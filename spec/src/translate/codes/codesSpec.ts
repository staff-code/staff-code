import {Word} from "@sagittal/general"
import {CASE_DESENSITIZED_CODE_MAP, Code} from "../../../../src/translate/codes"

describe("CASE_DESENSITIZED_CODE_MAP", (): void => {
    const codes = Object.keys(CASE_DESENSITIZED_CODE_MAP) as Array<Code & Word>

    it("curlies", (): void => {
        codes.forEach((code: Code & Word): void => {
            if (code[0] === "{") {
                fail(`code ${code} starts with a "{" but that initial character is reserved for beginning inline comments`)
            }

            // A code can end with a } because it's fine to turn commenting off even if it wasn't on
            // (consequently, words ending with } couldn't exist within comments, though)

            // A code can contain a { or a } because we only look for them at the beginning
        })
    })

    describe("double-quotes", (): void => {
        codes.forEach((code: Code & Word): void => {
            if (code[0] === `"`) {
                fail(`code ${code} starts with a '\"' but that initial character is reserved for beginning annotations/lyrics`)
            }

            // A code can end with a " because it's fine to turn annotating off even if it wasn't on
            // (consequently, words ending with " couldn't exist within annotations, though)

            // A code can contain a " because we only look for them at the beginning
        })
    })
})
