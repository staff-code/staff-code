import {BLANK, Io, Maybe, Sentence, SPACE, Word} from "@sagittal/general"
import {Code, SMART_ADVANCE_COMMAND_CODE} from "../../../../../translate"
import {translateInputToDisplay} from "../../../../translate"
import {components, staffCodeConfig} from "../../globals"
import {getPreviousInputState, setPreviousInputState} from "../../panel"

const isWhitespaceOrUndefinedAlready = (maybeChar: Maybe<string>): boolean =>
    !maybeChar || !!maybeChar.match(/\s/)

const insertCodeIntoInputAndSavePreviousState = (code: Code & Word): void => {
    const {input} = components

    setPreviousInputState()

    const previousValue = input.value
    let textCursorPosition = input.selectionStart

    const upToSelection = previousValue.slice(0, textCursorPosition)
    const maybePrecedingBuffer =
        code === SMART_ADVANCE_COMMAND_CODE || isWhitespaceOrUndefinedAlready(upToSelection[upToSelection.length - 1]) ?
            BLANK :
            SPACE
    const afterSelection = previousValue.slice(textCursorPosition)
    const maybeSucceedingBuffer = isWhitespaceOrUndefinedAlready(afterSelection[0]) ? BLANK : SPACE

    input.value = `${upToSelection}${maybePrecedingBuffer}${code}${maybeSucceedingBuffer}${afterSelection}` as
        Io & Sentence

    input.focus()
    textCursorPosition = textCursorPosition + code.length + maybePrecedingBuffer.length + maybeSucceedingBuffer.length
    input.selectionStart = textCursorPosition
    input.selectionEnd = textCursorPosition
}

const handleReferenceInsert = (event: MouseEvent): void => {
    const eventPath = event.composedPath()
    const maybeParentReferenceRow = eventPath.find((element: EventTarget): boolean => {
        return (element as HTMLTableRowElement).tagName === "TR"
    }) as Maybe<HTMLTableRowElement>
    const maybeCodeCell =
        maybeParentReferenceRow && maybeParentReferenceRow.children[1] as Maybe<HTMLTableCellElement>
    if (!maybeCodeCell || maybeCodeCell.tagName !== "TD") return

    const code = maybeCodeCell.getAttribute("sc-code") as Code & Word
    if (!code.length) return
    insertCodeIntoInputAndSavePreviousState(code)

    translateInputToDisplay(components.root, staffCodeConfig.callback)
}

const handleReferenceInsertUndo = (event: KeyboardEvent): void => {
    if (event.code === "KeyZ" && event.ctrlKey) {
        const {input} = components

        const {value, position} = getPreviousInputState()
        if (value) {
            input.value = value
            input.selectionStart = position
            input.selectionEnd = position
        }
    }
}

export {
    handleReferenceInsert,
    handleReferenceInsertUndo,
}
