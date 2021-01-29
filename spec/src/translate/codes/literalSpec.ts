import {Word} from "@sagittal/general"
import {
    computeUnicodeFromUnicodeLiteral,
    computeUnicodeLiteral,
    EMPTY_UNICODE,
    Unicode,
    UnicodeLiteral,
} from "../../../../src/translate"
import {Code, computeUnicodeForCode} from "../../../../src/translate/codes"

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

describe("computeUnicodeFromUnicodeLiteral", (): void => {
    it("works", (): void => {
        const unicodeLiteral = "U+E08A" as UnicodeLiteral

        const actual = computeUnicodeFromUnicodeLiteral(unicodeLiteral)

        const expected = "\ue08a"
        expect(actual).toBe(expected)
    })

    it("works for >4 digit code points", (): void => {
        const unicodeLiteral = "U+10E08A" as UnicodeLiteral

        const actual = computeUnicodeFromUnicodeLiteral(unicodeLiteral)

        const expected = "\u{10e08a}"
        expect(actual).toBe(expected)
    })
})
