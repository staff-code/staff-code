import {Word} from "@sagittal/general"
import {computeUnicodeLiteral} from "../../../../src"
import {Code, computeUnicodeForCode} from "../../../../src/translate/codes"

describe("computeUnicodeLiteral", (): void => {
    it("can get you the codepoint of a given Unicode char, using lowercase", (): void => {
        const unicode = computeUnicodeForCode("tmsgcn" as Code & Word)

        const actual = computeUnicodeLiteral(unicode)

        const expected = "U+E08A"
        expect(actual).toBe(expected)
    })
})
