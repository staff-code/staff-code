import {BLANK, Io, Maybe, Sentence, SPACE, Word} from "@sagittal/general"
import {Code} from "../../../../../translate"
import {transferInputToDisplay} from "../../../../transfer"
import {components, staffCodeConfig} from "../../globals"
import {INPUT_PREVIOUS_POSITION_DATA_ATTRIBUTE, INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE} from "./constants"

const insertCodeIntoInputAndSavePreviousState = (code: Code & Word): void => {
    const {input, reference} = components

    const previousValue = input.value
    let textCursorPosition = input.selectionStart

    reference.setAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE, previousValue)
    reference.setAttribute(INPUT_PREVIOUS_POSITION_DATA_ATTRIBUTE, JSON.stringify(textCursorPosition))

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

const handleReferenceTableClick = (event: MouseEvent): void => {
    const eventPath = event.composedPath()
    const maybeParentReferenceRow = eventPath[1] as Maybe<HTMLTableRowElement>
    const maybeCodeCell =
        maybeParentReferenceRow && maybeParentReferenceRow.children[1] as Maybe<HTMLTableCellElement>
    if (!maybeCodeCell || maybeCodeCell.tagName !== "TD") return

    const code = maybeCodeCell.getAttribute("sc-code") as Code & Word
    if (!code.length) return
    insertCodeIntoInputAndSavePreviousState(code)

    transferInputToDisplay(components.root, staffCodeConfig.callback)
}

const handleReferenceTableUndo = (event: KeyboardEvent): void => {
    if (event.code === "KeyZ" && event.ctrlKey) {
        let previousValue = components.reference.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)
        if (previousValue) {
            let previousPosition = parseInt(
                components.reference.getAttribute(INPUT_PREVIOUS_POSITION_DATA_ATTRIBUTE) as string,
            )
            components.input.value = previousValue
            components.input.selectionStart = previousPosition
            components.input.selectionEnd = previousPosition
            components.reference.removeAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)
            components.reference.removeAttribute(INPUT_PREVIOUS_POSITION_DATA_ATTRIBUTE)
        }
    }
}

export {
    handleReferenceTableClick, // todo: rename to just insert and undo
    handleReferenceTableUndo,
}
