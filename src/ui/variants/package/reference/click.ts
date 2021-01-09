import {BLANK, Io, Maybe, Sentence, SPACE, Word} from "@sagittal/general"
import {Code} from "../../../../translate"
import {components} from "../../../globals"
import {transferInputToDisplay} from "../../../transfer"
import {StaffCodeOptions} from "../../../types"

const computeInputWithInsertedCode = (input: HTMLTextAreaElement, code: Code & Word): Io & Sentence => {
    const textCursorPosition = input.selectionStart
    const upToSelection = input.value.slice(0, textCursorPosition)
    const maybePrecedingSpaceBuffer = upToSelection[upToSelection.length - 1] === SPACE ? BLANK : SPACE
    const afterSelection = input.value.slice(textCursorPosition)
    const maybeSucceedingSpaceBuffer = afterSelection[0] === SPACE ? BLANK : SPACE

    return `${upToSelection}${maybePrecedingSpaceBuffer}${code}${maybeSucceedingSpaceBuffer}${afterSelection}` as
        Io & Sentence
}

const handleReferenceClick = (
    event: MouseEvent,
    {callback}: StaffCodeOptions,
): void => {
    const {input, root} = components

    const eventPath = event.composedPath()
    const maybeParentReferenceRow = eventPath[1] as Maybe<HTMLTableRowElement>
    const maybeCodeCell =
        maybeParentReferenceRow && maybeParentReferenceRow.children[1] as Maybe<HTMLTableCellElement>
    if (!maybeCodeCell || maybeCodeCell.tagName !== "TD") return

    const code = maybeCodeCell.innerHTML as Code & Word
    input.value = computeInputWithInsertedCode(input, code)

    transferInputToDisplay(root, {callback})
}

export {
    handleReferenceClick,
}
