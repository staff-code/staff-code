import {isNumber, isUndefined} from "@sagittal/general"
import {
    BASS_POSITION_ALIASES_MAP,
    Code,
    CODE_MAP,
    Codeword,
    TREBLE_POSITION_ALIASES_MAP,
} from "../../../../src/translate/codes"
import {computeCodewordFromCode} from "../../../../src/translate/utility/codeword"

describe("code verifications", (): void => {
    it("no two codewords, when put in lower case, are the same", (): void => {
        const seenLowercaseCodewords = [] as Codeword[]

        const codewords = Object.keys(Code) as Codeword[]

        codewords.forEach((codeword: Codeword): void => {
            const lowercaseCodeword = codeword.toLowerCase() as Codeword
            if (seenLowercaseCodewords.includes(lowercaseCodeword)) {
                fail(`duplicate codeword: ${codeword}`)
            }
            seenLowercaseCodewords.push(lowercaseCodeword)
        })
    })

    // See: http://forum.sagittal.org/viewtopic.php?f=17&t=436&p=3172#word-types
    // The condition that actually needs to be protected is
    // That if I map over all the base words and get their code points,
    // That there is one and exactly one reference to each code point.
    it("every codeword maps to a symbol (when a clef is chosen)", (): void => {
        const codes = Object.values(Code) as Code[]
        const TOTAL_CODE_MAP = {
            ...CODE_MAP,
            ...BASS_POSITION_ALIASES_MAP,
            ...TREBLE_POSITION_ALIASES_MAP,
        }

        codes.forEach((code: Code): void => {
            // Object.entries returns, for an enum, both its string keys to its numeric indices *and* vice versa!
            if (!isNumber(code)) return

            if (isUndefined(TOTAL_CODE_MAP[ code ])) {
                fail(`unmapped codeword: ${computeCodewordFromCode(code)}`)
            }
        })
    })
})
