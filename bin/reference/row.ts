import {Name} from "@sagittal/general"
import {Unicode} from "../../src"
import {computeSmuflCode} from "../codes"
import {computeGlyphUnicode} from "../glyphUnicode"
import {computeMnemonic} from "./mnemonic"
import {ReferenceRow} from "./types"

const computeSectionDatum = (glyphName: Name<Unicode>): ReferenceRow => {
    const unicode = computeGlyphUnicode(glyphName)
    const code = computeSmuflCode(glyphName)
    const mnemonic = computeMnemonic(glyphName)

    return [unicode, code, mnemonic]
}

export {
    computeSectionDatum,
}
