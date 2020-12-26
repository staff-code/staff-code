import {Codeword, CODEWORD_MAP} from "../../../../src/translate/codes"

describe("code verifications", (): void => {
    it("no two codewords, when put in lower case, are the same", (): void => {
        const seenLowercaseCodewords = [] as Codeword[]

        const codewords = Object.keys(CODEWORD_MAP) as Codeword[]

        codewords.forEach((codeword: Codeword): void => {
            const lowercaseCodeword = codeword.toLowerCase() as Codeword
            if (seenLowercaseCodewords.includes(lowercaseCodeword)) {
                fail(`duplicate codeword: ${codeword}`)
            }
            seenLowercaseCodewords.push(lowercaseCodeword)
        })
    })
})
