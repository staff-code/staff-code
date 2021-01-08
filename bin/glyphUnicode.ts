import {Name, Word} from "@sagittal/general"
import {computeUnicodeFromUnicodeLiteral, Unicode} from "../src"
import {glyphNames} from "./globals"
import {GlyphDatum} from "./types"

const computeGlyphUnicode = (glyphName: Name<Unicode>): Unicode & Word =>
    computeUnicodeFromUnicodeLiteral(glyphNames[glyphName].codepoint)

const computeGlyphUnicodes = (): Array<Unicode & Word> =>
    Object.values(glyphNames).map(({codepoint}: GlyphDatum): Unicode & Word => {
        return computeUnicodeFromUnicodeLiteral(codepoint)
    })

export {
    computeGlyphUnicode,
    computeGlyphUnicodes,
}
