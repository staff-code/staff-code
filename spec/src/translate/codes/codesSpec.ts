import {Code, CODE_MAP} from "../../../../src/translate/codes"

describe("code verifications", (): void => {
    it("no two codes, when put in lower case, are the same", (): void => {
        const seenLowercaseCodes = [] as Code[]

        const codes = Object.keys(CODE_MAP) as Code[]

        codes.forEach((code: Code): void => {
            const lowercaseCode = code.toLowerCase() as Code
            if (seenLowercaseCodes.includes(lowercaseCode)) {
                fail(`duplicate code: ${code}`)
            }
            seenLowercaseCodes.push(lowercaseCode)
        })
    })
})
