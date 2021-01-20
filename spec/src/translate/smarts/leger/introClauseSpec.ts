import {Word} from "@sagittal/general"
import {Code} from "../../../../../src"
import {smarts} from "../../../../../src/translate"
import {computeUnicodeForCode} from "../../../../../src/translate/codes"
import {computeSmartLegerUnicodeIntroClause} from "../../../../../src/translate/smarts/leger/introClause"
import {Pitch} from "../../../../../src/translate/smarts/positionAndClef"

describe("computeSmartLegerUnicodeIntroClause", (): void => {
    it("doesn't spit out the literal characters 'undefined' ever", (): void => {
        const unicode = computeUnicodeForCode("ntqrdn" as Code & Word)

        smarts.pitch = Pitch.B5
        const actual = computeSmartLegerUnicodeIntroClause(unicode)

        const expected = ""
        expect(actual).toBe(expected)
    })
})
