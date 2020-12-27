import {Word} from "@sagittal/general"
import {Code, CODE_MAP, LowercaseCode} from "../../../../src/translate/codes"

describe("code verifications", (): void => {
    it("no two codes, when put in lower case, are the same", (): void => {
        const seenLowercaseCodes = [] as Array<LowercaseCode & Word>

        const codes = Object.keys(CODE_MAP) as Array<Code & Word>

        codes.forEach((code: Code): void => {
            const lowercaseCode = code.toLowerCase() as LowercaseCode & Word
            if (seenLowercaseCodes.includes(lowercaseCode)) {
                fail(`duplicate code: ${code}`)
            }
            seenLowercaseCodes.push(lowercaseCode)
        })
    })
})
