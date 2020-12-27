import {Word} from "@sagittal/general"
import {Code} from "../../../../src/translate/codes"
import {computeUnicodeForCode} from "../../../../src/translate/utility"
import {computeUnicodeLiteral} from "../../../../src/translate/utility/literal"

describe("computeUnicodeLiteral", (): void => {
    it("can get you the codepoint of a given Unicode char, using lowercase", (): void => {
        const unicode = computeUnicodeForCode("tmsgcn" as Code & Word)

        const actual = computeUnicodeLiteral(unicode)

        const expected = "u+e08a"
        expect(actual).toBe(expected)
    })
})
