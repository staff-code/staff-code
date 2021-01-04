import {Word} from "@sagittal/general"
import {Code} from "../../../../../src"
import {computeUnicodeForCode} from "../../../../../src/translate/codes"
import {smarts} from "../../../../../src/translate/smarts"
import {computeSmartLegerUnicodeIntroClause} from "../../../../../src/translate/smarts/leger/introClause"

describe("computeSmartLegerUnicodeIntroClause", (): void => {
    it("doesn't spit out the literal characters 'undefined' ever", (): void => {
        const unicode = computeUnicodeForCode("ntqrdn" as Code & Word)

        smarts.positionUnicode = computeUnicodeForCode("up7" as Code & Word)
        const actual = computeSmartLegerUnicodeIntroClause(unicode)

        const expected = ""
        expect(actual).toBe(expected)
    })
})
