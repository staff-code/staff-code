import {BLANK, Io, Maybe, Sentence, SPACE, Word} from "@sagittal/general"
import {Code} from "../../../../../translate"
import {translateInputToDisplay} from "../../../../translate"
import {components, staffCodeConfig} from "../../globals"
import {getPreviousInputState, setPreviousInputState} from "../../panel"

// TODO: FEATURE IMPROVE, READY TO GO: INSERT FINESSE
//  Inserting codes shouldn't add a space after a return carriage

// TODO: INSERT PREVIEW
//  It might be a bit hard to do, but maybe I could make the words appear in the input where you would insert
//  Them, as a sort of greyed-out preview. Any interest in that?

const insertCodeIntoInputAndSavePreviousState = (code: Code & Word): void => {
    const {input} = components

    setPreviousInputState()

    const previousValue = input.value
    let textCursorPosition = input.selectionStart

    const upToSelection = previousValue.slice(0, textCursorPosition)
    const maybePrecedingBuffer = upToSelection[upToSelection.length - 1] === SPACE ? BLANK : SPACE
    const afterSelection = previousValue.slice(textCursorPosition)
    const maybeSucceedingBuffer = afterSelection[0] === SPACE ? BLANK : SPACE

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
