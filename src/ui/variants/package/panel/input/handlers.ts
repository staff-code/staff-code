import {abs, doOnNextEventLoop, Maybe, Ms} from "@sagittal/general"
import {transferInputToDisplay} from "../../../../transfer"
import {components, staffCodeConfig} from "../../globals"

// TODO, CLEAN, READY TO GO: GLOBALS FOR INPUT HANDLING
let keycodeWhichIsDown: Maybe<string> = undefined
let previousInputValueLength = 0

const TRANSFER_TRIGGER_CODES = ["Space", "Enter", "Tab", "Semicolon", "Backspace"]

const isChangeGreaterThanOneChar = (): boolean => {
    const updatedInputValueLength = components.input.value.length

    return abs(previousInputValueLength - updatedInputValueLength) > 1
}

const shouldPressedKeyTriggerTransfer = (): boolean =>
    !!keycodeWhichIsDown && TRANSFER_TRIGGER_CODES.includes(keycodeWhichIsDown)

const isCursorNotAtEndOfInput = (): boolean =>
    components.input.selectionStart < components.input.value.length

const shouldTransfer = (): boolean =>
    isChangeGreaterThanOneChar()
    || shouldPressedKeyTriggerTransfer()
    || isCursorNotAtEndOfInput()

const handleKeydown = (event: KeyboardEvent): void => {
    if (event.code === keycodeWhichIsDown) return
    keycodeWhichIsDown = event.code
}

const handleKeyup = (): void => {
    keycodeWhichIsDown = undefined
}

const handleInput = (): void => {
    if (shouldTransfer()) {
        doOnNextEventLoop((): void => {
            transferInputToDisplay(components.root, staffCodeConfig.callback)
            previousInputValueLength = components.input.value.length
        }, 100 as Ms).then()
    }
}

export {
    handleKeydown,
    handleKeyup,
    shouldTransfer,
    handleInput,
}
