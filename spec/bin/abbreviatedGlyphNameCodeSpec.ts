import {Name} from "@sagittal/general"
import {computeAbbreviatedGlyphNameCode} from "../../bin/abbreviatedGlyphNameCode"
import {Unicode} from "../../src"

describe("computeAbbreviatedGlyphNameCode", (): void => {
    it("follows Dave's scheme for abbreviating the SMuFL glyph name to mostly 2-letter chunks", (): void => {
        const glyphName = "accidentalDoubleFlatTurned" as Name<Unicode>

        const actual = computeAbbreviatedGlyphNameCode(glyphName)

        const expected = "acdbfltn"
        expect(actual).toBe(expected)
    })

    it("handles this annoying case", (): void => {
        const glyphName = "wiggleVIbratoMediumSlower" as Name<Unicode>

        const actual = computeAbbreviatedGlyphNameCode(glyphName)

        const expected = "wgvbmdsr"
        expect(actual).toBe(expected)
    })
})
