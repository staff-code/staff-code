import {BLANK, doOnNextEventLoop, Maybe, Ms} from "@sagittal/general"
import {transferInputToDisplay} from "../../../transfer"
import {components, staffCodeOptions} from "../globals"

let keycodeWhichIsDown: Maybe<string> = undefined

const TRANSFER_TRIGGER_CODES = ["Space", "Enter", "Tab", "Semicolon", "Backspace"]

const isSelectionLengthGreaterThanOneChar = (): boolean => {
    const selection = document.getSelection()
    const selectionLength = (selection || BLANK).toString().length

    return selectionLength > 1
}

const shouldPressedKeyTriggerTransfer = (event: KeyboardEvent): boolean =>
    TRANSFER_TRIGGER_CODES.includes(event.code)

const isCursorNotAtEndOfInput = (): boolean =>
    components.input.selectionStart < components.input.value.length

const shouldTransfer = (event: KeyboardEvent, multiCharSelection: boolean): boolean =>
    multiCharSelection
    || shouldPressedKeyTriggerTransfer(event)
    || isCursorNotAtEndOfInput()

const handleKeydown = (event: KeyboardEvent): void => {
    if (event.code === keycodeWhichIsDown) return
    keycodeWhichIsDown = event.code
    const multiCharSelection = isSelectionLengthGreaterThanOneChar()
    doOnNextEventLoop((): void => {
        if (shouldTransfer(event, multiCharSelection)) {
            transferInputToDisplay(components.root, staffCodeOptions.callback)
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
