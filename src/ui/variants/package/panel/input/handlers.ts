import {abs, Char, doOnNextEventLoop, Io, isUndefined, Maybe, Ms, Sentence} from "@sagittal/general"
import {transferInputToDisplay} from "../../../../transfer"
import {components, staffCodeConfig} from "../../globals"

// TODO, CLEAN, READY TO GO: GLOBALS FOR INPUT HANDLING
let keycodeWhichIsDown: Maybe<string> = undefined
let previousInputValue = "" as Io & Sentence

const TRANSFER_TRIGGER_CODES = ["Space", "Enter", "Tab", "Semicolon", "Backspace"]

const isChangeGreaterThanOneChar = (): boolean => {
    const updatedInputValue = components.input.value as Io & Sentence

    if (isUndefined(previousInputValue)) return true
    if (abs(previousInputValue.length - updatedInputValue.length) > 2) return true

    const previousInputChars = Array.from(previousInputValue) as Array<Io & Char>
    const updatedInputChars = Array.from(updatedInputValue) as Array<Io & Char>

    let differentCharCount = 0
    updatedInputChars.forEach((word: Io & Char, index: number): void => {
        if (word !== previousInputChars[index]) differentCharCount = differentCharCount + 1
    })

    return differentCharCount > 1
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
