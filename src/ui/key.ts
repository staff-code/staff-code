import {BLANK, doOnNextEventLoop, Maybe, Ms} from "@sagittal/general"
import {components} from "./globals"
import {transferInputToDisplay} from "./transfer"
import {StaffCodeOptions} from "./types"

let keycodeWhichIsDown: Maybe<string> = undefined

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
    {callback}: StaffCodeOptions,
): void => {
    const {input, root} = components

    if (event.code === keycodeWhichIsDown) return
    keycodeWhichIsDown = event.code
    const multiCharSelection = isSelectionLengthGreaterThanOneChar()
    doOnNextEventLoop((): void => {
        if (shouldTransfer(event, input, multiCharSelection)) {
            transferInputToDisplay(root, {callback})
        }
    }, 100 as Ms).then()
}

const handleKeyup = (): void => {
    keycodeWhichIsDown = undefined
}

export {
    handleKeydown,
    handleKeyup,
}
