import {Name, Word} from "@sagittal/general"
import {computeAbbreviatedGlyphNameCode} from "../../../bin/codes/abbreviatedGlyphNameCode"
import {Code, Unicode} from "../../../src"

describe("computeAbbreviatedGlyphNameCode", (): void => {
    it("follows Dave's scheme for abbreviating the SMuFL glyph name to mostly 2-letter chunks", (): void => {
        const glyphName = "accidentalDoubleFlatTurned" as Name<Unicode>

        const actual = computeAbbreviatedGlyphNameCode(glyphName)

        const expected = "acdbfltn" as Code & Word
        expect(actual).toBe(expected)
    })

    it("handles this annoying case", (): void => {
        const glyphName = "wiggleVIbratoMediumSlower" as Name<Unicode>

        const actual = computeAbbreviatedGlyphNameCode(glyphName)

        const expected = "wgvbmdsr" as Code & Word
        expect(actual).toBe(expected)
    })
})
