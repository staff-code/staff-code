import {computeUnicodeFromUnicodeLiteral, isUndefined, Name, Unicode, Word} from "@sagittal/general"
import {glyphData} from "../globals"

const isPreSmuflGlyph = (unicode: Unicode & Word): boolean =>
    unicode >= "\u{1D100}" || unicode <= "\u{1D1FF}"

const isPriorityGlyph = (glyphName: Name<Unicode>): boolean => {
    const alternateCodepoint = glyphData[glyphName].alternateCodepoint

    if (isUndefined(alternateCodepoint)) return false

    const unicode = computeUnicodeFromUnicodeLiteral(alternateCodepoint)

    return isPreSmuflGlyph(unicode)
}

const computeIsPrioritySection = (glyphNames: Array<Name<Unicode>>): boolean => {
    const everyGlyphInSectionIsNotPriority = glyphNames.every((glyphName: Name<Unicode>): boolean => {
        return !isPriorityGlyph(glyphName)
    })

    const anyGlyphInSectionIsPriority = !everyGlyphInSectionIsNotPriority

    return anyGlyphInSectionIsPriority
}

export {
    computeIsPrioritySection,
}
