import {BLANK, doOnNextEventLoop, Maybe, Ms} from "@sagittal/general"
import {transferInputToDisplay} from "../../../../transfer"
import {components, staffCodeConfig} from "../../globals"

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
            transferInputToDisplay(components.root, staffCodeConfig.callback)
        }
    }, 100 as Ms).then()
}

// TODO: BUG, READY TO GO: TRANSLATION DOES NOT ALWAYS OCCUR WHEN WANTED
/*
There are still a few cases where I make a change to the input, and expect it to update the output, but it does not:
1. When I make a selection and hit the Delete key (as opposed to the "Backspace" key).
2. When I make a selection and choose "Delete" from the right-click menu.
3. After I make a deletion that updates correctly (using the Backspace key or "Cut" from the right-click menu),
if I then choose "Undo" from the right-click menu (as opposed to Ctrl-Z).
4. After I make a paste that updates correctly (using Ctrl-V or "Paste" in the right-click menu),
if I then choose "Undo" from the right-click menu (as opposed to Ctrl-Z).
5. After I click at the end of the input and backspace until the output updates,
if I then attempt to undo (using either Ctrl-Z or "Undo from the right-click menu).
 */

const handleKeyup = (): void => {
    keycodeWhichIsDown = undefined
}

export {
    handleKeydown,
    handleKeyup,
}
