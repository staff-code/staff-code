import {Name, Word} from "@sagittal/general"
import {computeSmuflCode} from "../../../bin/codes"
import {Code, Unicode} from "../../../src"

describe("computeSmuflCode", (): void => {
    it("generally reduces every word in the SMuFL glyph name down to the first two letters, with vowels removed           ", (): void => {
        const glyphName = "legerLineNarrow" as Name<Unicode>

        const actual = computeSmuflCode(glyphName)

        const expected = "lglnnr" as Code & Word
        expect(actual).toBe(expected)
    })

    it("includes exceptional words such as 'turned' → 'tn' (rather than 'tr') due to clashes with other codes              ", (): void => {
        const glyphName = "accidentalDoubleFlatTurned" as Name<Unicode>

        const actual = computeSmuflCode(glyphName)

        const expected = "acdbfltn" as Code & Word
        expect(actual).toBe(expected)
    })

    it("handles this annoying case where they got the capitalization goofed up in SMuFL", (): void => {
        const glyphName = "wiggleVIbratoMediumSlower" as Name<Unicode>

        const actual = computeSmuflCode(glyphName)

        const expected = "wgvbmdsr" as Code & Word
        expect(actual).toBe(expected)
    })

    it("it removes ordinal number suffixes", (): void => {
        expect(computeSmuflCode("mensuralObliqueAsc2ndVoid" as Name<Unicode>)).toBe("mnobas2vd")
        expect(computeSmuflCode("noteheadClusterWhole3rd" as Name<Unicode>)).toBe("nhclwh3")

        expect(computeSmuflCode("note512thUp" as Name<Unicode>)).toBe("nt512up")
        expect(computeSmuflCode("note1024thDown" as Name<Unicode>)).toBe("nt1024dn")
        expect(computeSmuflCode("mensuralObliqueDesc5thBlack" as Name<Unicode>)).toBe("mnobds5bl")
        expect(computeSmuflCode("note16thUp" as Name<Unicode>)).toBe("nt16up")
        expect(computeSmuflCode("luteFrench7thCourse" as Name<Unicode>)).toBe("ltfr7cr")
        expect(computeSmuflCode("rest128th" as Name<Unicode>)).toBe("rs128")
        expect(computeSmuflCode("luteFrench9thCourse" as Name<Unicode>)).toBe("ltfr9cr")
    })

    it("capitalizes single letter words", (): void => {
        const glyphName = "timeSigX" as Name<Unicode>

        const actual = computeSmuflCode(glyphName)

        const expected = "tmsgX" as Code & Word
        expect(actual).toBe(expected)
    })

    it("deletes the letter sequence 'igh' as if it were a vowel", (): void => {
        const glyphName = "restHBarRight" as Name<Unicode>

        const actual = computeSmuflCode(glyphName)

        const expected = "rsHbrrt" as Code & Word
        expect(actual).toBe(expected)
    })

    it("returns the first two letters of the word without vowels deleted if the word would be less than 2 chars after deleting vowels", (): void => {
        const glyphName = "pictHiHat" as Name<Unicode>

        const actual = computeSmuflCode(glyphName)

        const expected = "pchiht" as Code & Word
        expect(actual).toBe(expected)
    })
})
