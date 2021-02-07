import {Word} from "@sagittal/general"
import {smarts} from "../../../../../src/translate"
import {Code, computeUnicodeForCode} from "../../../../../src/translate/codes"
import {computeSmartLegerUnicodeIntroClause} from "../../../../../src/translate/smarts/leger/introClause"
import {Position} from "../../../../../src/translate/smarts/vertical"

describe("computeSmartLegerUnicodeIntroClause", (): void => {
    it("doesn't spit out the literal characters 'undefined' ever", (): void => {
        const unicode = computeUnicodeForCode("ntqrdn" as Code & Word)

        smarts.position = 7 as Position
        const actual = computeSmartLegerUnicodeIntroClause(unicode)

        const expected = ""
        expect(actual).toBe(expected)
    })
})
