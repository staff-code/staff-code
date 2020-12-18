import {isNumber, isUndefined} from "@sagittal/general"
import {Code, Codeword, CODE_MAP} from "../../../../src/translate/symbols"
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

    it("every codeword maps to a symbol", (): void => {
        const codes = Object.values(Code) as Code[]

        codes.forEach((code: Code): void => {
            // Object.entries returns, for an enum, both its string keys to its numeric indices *and* vice versa!
            if (!isNumber(code)) return

            if (isUndefined(CODE_MAP[ code ])) {
                fail(`unmapped codeword: ${computeCodewordFromCode(code)}`)
            }
        })
    })
})
