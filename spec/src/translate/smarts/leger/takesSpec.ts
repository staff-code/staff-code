import {Word} from "@sagittal/general"
import {
    Code,
    computeUnicodeForCode,
    LowercasedCode,
    LOWERCASED_CODE_MAP,
    Unicode,
} from "../../../../../src/translate/codes"
import {takesLegerLine} from "../../../../../src/translate/smarts/leger"
import {canBePositioned} from "../../../../../src/translate/smarts/positionAndClef"

describe("takesLegerLine", (): void => {
    it("determines whether a glyph ever takes a leger line, regardless whether it might need one now", (): void => {
        const unicode = computeUnicodeForCode("note8thUp" as Code & Word)

        const actual = takesLegerLine(unicode)

        expect(actual).toBeTruthy()
    })

    it("is not true for metronome marks", (): void => {
        const unicode = computeUnicodeForCode("metNoteDoubleWhole" as Code & Word)

        const actual = takesLegerLine(unicode)

        expect(actual).toBeFalsy()
    })

    it("testing this one", (): void => {
        const unicode = computeUnicodeForCode("noteheadParenthesisLeft" as Code & Word)

        const actual = takesLegerLine(unicode)

        expect(actual).toBeTruthy()
    })

    it("and this one", (): void => {
        const unicode = computeUnicodeForCode("noteShapeQuarterMoonDoubleWhole" as Code & Word)

        const actual = takesLegerLine(unicode)

        expect(actual).toBeTruthy()
    })

    it("every glyph which takes a leger line can be positioned", (): void => {
        const lowercasedCodeMapEntries =
            Object.entries(LOWERCASED_CODE_MAP) as Array<[LowercasedCode & Word, Unicode & Word]>

        lowercasedCodeMapEntries.forEach(([lowercasedCode, unicode]: [LowercasedCode & Word, Unicode & Word]): void => {
            if (takesLegerLine(unicode) && !canBePositioned(unicode)) {
                fail(`Code ${lowercasedCode} takes a leger line but cannot be positioned.`)
            }
        })
    })
})
