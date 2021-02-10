import {computeUnicodeFromUnicodeLiteral, Name, Unicode, Word} from "@sagittal/general"
import {glyphData} from "./globals"
import {GlyphDatum} from "./types"

const computeGlyphUnicode = (glyphName: Name<Unicode>): Unicode & Word =>
    computeUnicodeFromUnicodeLiteral(glyphData[glyphName].codepoint)

const computeGlyphUnicodes = (): Array<Unicode & Word> =>
    Object.values(glyphData).map(({codepoint}: GlyphDatum): Unicode & Word => {
        return computeUnicodeFromUnicodeLiteral(codepoint)
    })

export {
    computeGlyphUnicode,
    computeGlyphUnicodes,
}
