import {Word} from "@sagittal/general"
import {computeUnicodeLiteral, Unicode} from "../../../../src"
import {Code, computeUnicodeForCode} from "../../../../src/translate/codes"
import {EMPTY_UNICODE} from "../../../../src/translate/constants"

describe("computeUnicodeLiteral", (): void => {
    it("can get you the codepoint of a given Unicode char, using lowercase", (): void => {
        const unicode = computeUnicodeForCode("tmsgcn" as Code & Word)

        const actual = computeUnicodeLiteral(unicode)

        const expected = "U+E08A"
        expect(actual).toBe(expected)
    })

    it("does something reasonable for an empty Unicode", (): void => {
        const unicode = EMPTY_UNICODE as Unicode & Word

        const actual = computeUnicodeLiteral(unicode)

        const expected = "(BLANK)"
        expect(actual).toBe(expected)
    })
})
