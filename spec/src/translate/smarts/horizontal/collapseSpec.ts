import {Sentence, Unicode} from "@sagittal/general"
import {collapseAdvances} from "../../../../../src/translate/smarts"

describe("collapseAdvances", (): void => {
    it("takes contiguous sequences of advances and revises them to be comprised of as few advances of as equal of side as possible", (): void => {
        const unicodeSentence = "　      " as Unicode & Sentence

        /*
        U+E1D7 : Eighth note (quaver) stem up
        U+E019 : 4-line staff (wide)

        U+3000 : IDEOGRAPHIC SPACE                  16
        U+200A : HAIR SPACE                         1
        U+2006 : SIX-PER-EM SPACE                   3

        U+E1D6 : Quarter note (crotchet) stem down

        U+200A : HAIR SPACE                         1
        U+2006 : SIX-PER-EM SPACE                   3

        U+E01F : 4-line staff (narrow)

        U+205F : MEDIUM MATHEMATICAL SPACE [MMSP]   7
        U+200A : HAIR SPACE                         1
         */

        // 16 + 1 + 3   →   20  →   10 + 10
        // 1 + 3        →   4   →   1 + 3
        // 7 + 1        →   8   →   3 + 5

        /*
        U+2009 : THIN SPACE                         5
        U+2008 : PUNCTUATION SPACE                  10
         */

        const actual = collapseAdvances(unicodeSentence)

        const expected =
            "\uE1D7" +
            "\uE019" +
            "\u2008" +
            "\u2008" +
            "\uE1D6" +
            "\u200A" +
            "\u2006" +
            "\uE01F" +
            "\u2006" +
            "\u2009"
        expect(actual).toBe(expected)
    })
})
