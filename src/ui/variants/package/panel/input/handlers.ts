import {abs, Char, doOnNextEventLoop, Io, isUndefined, max, Maybe, Ms, Sentence} from "@sagittal/general"
import {translateInputToDisplay} from "../../../../translate"
import {components, staffCodeConfig} from "../../globals"
import {getPreviousInputState, setPreviousInputState} from "./state"

let keycodeWhichIsDown: Maybe<string> = undefined

const TRANSLATE_TRIGGER_CODES = ["Space", "Enter", "Tab", "Semicolon", "Backspace"]

const isChangeGreaterThanOneChar = (): boolean => {
    const updatedInputValue = components.input.value as Io & Sentence

    const {value: previousInputValue} = getPreviousInputState()

    if (isUndefined(previousInputValue)) return true
    if (abs(previousInputValue.length - updatedInputValue.length) > 2) return true

    const previousInputChars = Array.from(previousInputValue) as Array<Io & Char>
    const updatedInputChars = Array.from(updatedInputValue) as Array<Io & Char>

    let charsToCheck = max(previousInputChars.length, updatedInputChars.length)

    let differentCharCount = 0
    for (let index = 0; index < charsToCheck; index++) {
        if (updatedInputChars[index] !== previousInputChars[index]) differentCharCount = differentCharCount + 1

        if (differentCharCount > 1) {
            return true
        }
    }

    return false
}

const shouldPressedKeyTriggerTranslate = (): boolean =>
    !!keycodeWhichIsDown && TRANSLATE_TRIGGER_CODES.includes(keycodeWhichIsDown)

const isCursorNotAtEndOfInput = (): boolean =>
    components.input.selectionStart < components.input.value.length

const shouldTranslate = (): boolean => {
    const changeIsGreaterThanOneChar = isChangeGreaterThanOneChar()
    const pressedKeyShouldTriggerTranslate = shouldPressedKeyTriggerTranslate()
    const cursorIsNotAtEndOfInput = isCursorNotAtEndOfInput()

    const answer = changeIsGreaterThanOneChar
        || pressedKeyShouldTriggerTranslate
        || cursorIsNotAtEndOfInput

    // tslint:disable-next-line
    // console.warn("shouldTranslate?", answer, "because > 1 char selection?", changeIsGreaterThanOneChar, "triggering key code?", pressedKeyShouldTriggerTranslate, "NOT @ end of input?", cursorIsNotAtEndOfInput, "and what is the keydown?", keycodeWhichIsDown)

    return answer
}

const handleKeydown = (event: KeyboardEvent): void => {
    if (event.code === keycodeWhichIsDown) return
    keycodeWhichIsDown = event.code
}

const handleKeyup = (): void => {
    keycodeWhichIsDown = undefined
}

const handleInput = (): void => {
    if (shouldTranslate()) {
        doOnNextEventLoop((): void => {
            translateInputToDisplay(components.root, staffCodeConfig.callback)
            setPreviousInputState()
        }, 100 as Ms).then()
    }
}

export {
    handleKeydown,
    handleKeyup,
    shouldTranslate,
    handleInput,
}
