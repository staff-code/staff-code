import {Code} from "../../../../src/translate"
import {computeUnicodeForCode} from "../../../../src/translate/utility"
import {computeUnicodeLiteral} from "../../../../src/translate/utility/literal"

describe("computeUnicodeLiteral", (): void => {
    it("can get you the codepoint of a given Unicode char, using lowercase", (): void => {
        const unicodeWord = computeUnicodeForCode(Code["tmsgcn"])

        const actual = computeUnicodeLiteral(unicodeWord)

        const expected = "u+e08a"
        expect(actual).toBe(expected)
    })
})
