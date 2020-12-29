import {BLANK, doOnNextEventLoop, Ms} from "@sagittal/general"
import {transferInputToDisplay} from "./transfer"
import {StaffCodeOptions} from "./types"

let keydown = false

const TRANSFER_TRIGGER_CODES = ["Space", "Enter", "Tab", "Semicolon", "Backspace"]

const isSelectionLengthGreaterThanOneChar = (): boolean => {
    const selection = document.getSelection()
    const selectionLength = (selection || BLANK).toString().length

    return selectionLength > 1
}

const shouldPressedKeyTriggerTransfer = (event: KeyboardEvent): boolean =>
    TRANSFER_TRIGGER_CODES.includes(event.code)

const isCursorNotAtEndOfInput = (input: HTMLTextAreaElement): boolean =>
    input.selectionStart < input.value.length

const shouldTransfer = (event: KeyboardEvent, input: HTMLTextAreaElement, multiCharSelection: boolean): boolean =>
    multiCharSelection
    || shouldPressedKeyTriggerTransfer(event)
    || isCursorNotAtEndOfInput(input)

const handleKeydown = (
    event: KeyboardEvent,
    input: HTMLTextAreaElement,
    root: HTMLSpanElement,
    {callback}: StaffCodeOptions,
): void => {
    if (keydown) return
    keydown = true
    const multiCharSelection = isSelectionLengthGreaterThanOneChar()
    doOnNextEventLoop((): void => {
        if (shouldTransfer(event, input, multiCharSelection)) {
            transferInputToDisplay(root, {callback})
        }
    }, 100 as Ms).then()
}

const handleKeyup = (): void => {
    keydown = false
}

export {
    handleKeydown,
    handleKeyup,
}