import {BLANK, Io, Maybe, Sentence, SPACE, Word} from "@sagittal/general"
import {Code} from "../../../../translate"
import {transferInputToDisplay} from "../../../transfer"
import {components, staffCodeOptions} from "../globals"

const insertCodeIntoInput = (code: Code & Word): void => {
    const {input} = components

    const textCursorPosition = input.selectionStart
    const upToSelection = input.value.slice(0, textCursorPosition)
    const maybePrecedingSpaceBuffer = upToSelection[upToSelection.length - 1] === SPACE ? BLANK : SPACE
    const afterSelection = input.value.slice(textCursorPosition)
    const maybeSucceedingSpaceBuffer = afterSelection[0] === SPACE ? BLANK : SPACE

    input.value = `${upToSelection}${maybePrecedingSpaceBuffer}${code}${maybeSucceedingSpaceBuffer}${afterSelection}` as
        Io & Sentence
}

const handleReferenceClick = (event: MouseEvent): void => {
    const eventPath = event.composedPath()
    const maybeParentReferenceRow = eventPath[1] as Maybe<HTMLTableRowElement>
    const maybeCodeCell =
        maybeParentReferenceRow && maybeParentReferenceRow.children[1] as Maybe<HTMLTableCellElement>
    if (!maybeCodeCell || maybeCodeCell.tagName !== "TD") return

    const code = maybeCodeCell.innerHTML as Code & Word
    insertCodeIntoInput(code)

    transferInputToDisplay(components.root, staffCodeOptions.callback)
}

export {
    handleReferenceClick,
}
