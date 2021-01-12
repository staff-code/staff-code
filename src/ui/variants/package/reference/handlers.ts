import {BLANK, Io, Maybe, Sentence, SPACE, Word} from "@sagittal/general"
import {Code} from "../../../../translate"
import {transferInputToDisplay} from "../../../transfer"
import {components, staffCodeConfig} from "../globals"

// todo: bug with inserting Sagittals, they don't insert! maybe others have a problem? check commands too I guess

const insertCodeIntoInput = (code: Code & Word): void => {
    const {input} = components

    let textCursorPosition = input.selectionStart
    const upToSelection = input.value.slice(0, textCursorPosition)
    const maybePrecedingBuffer = upToSelection[upToSelection.length - 1] === SPACE ? BLANK : SPACE
    const afterSelection = input.value.slice(textCursorPosition)
    const maybeSucceedingBuffer = afterSelection[0] === SPACE ? BLANK : SPACE

    input.value = `${upToSelection}${maybePrecedingBuffer}${code}${maybeSucceedingBuffer}${afterSelection}` as
        Io & Sentence

    input.focus()
    textCursorPosition = textCursorPosition + code.length + maybePrecedingBuffer.length + maybeSucceedingBuffer.length
    input.selectionStart = textCursorPosition
    input.selectionEnd = textCursorPosition
}

const handleReferenceClick = (event: MouseEvent): void => {
    const eventPath = event.composedPath()
    const maybeParentReferenceRow = eventPath[1] as Maybe<HTMLTableRowElement>
    const maybeCodeCell =
        maybeParentReferenceRow && maybeParentReferenceRow.children[1] as Maybe<HTMLTableCellElement>
    if (!maybeCodeCell || maybeCodeCell.tagName !== "TD") return

    const code = maybeCodeCell.getAttribute("sc-code") as Code & Word
    insertCodeIntoInput(code)

    transferInputToDisplay(components.root, staffCodeConfig.callback)
}

export {
    handleReferenceClick,
}
