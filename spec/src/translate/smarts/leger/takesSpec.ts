import {Word} from "@sagittal/general"
import {
    CASE_DESENSITIZED_CODE_MAP,
    CaseDesensitized,
    Code,
    computeUnicodeForCode,
    Unicode,
} from "../../../../../src/translate/codes"
import {takesLegerLine} from "../../../../../src/translate/smarts/leger"
import {canBePositioned} from "../../../../../src/translate/smarts/positionAndClef"

describe("takesLegerLine", (): void => {
    it("determines whether a glyph ever takes a leger line, regardless whether it might need one now", (): void => {
        const unicode = computeUnicodeForCode("nt8up" as Code & Word)

        const actual = takesLegerLine(unicode)

        expect(actual).toBeTruthy()
    })

    it("every glyph which takes a leger line can be positioned", (): void => {
        const caseDesensitizedCodeMapEntries =
            Object.entries(CASE_DESENSITIZED_CODE_MAP) as Array<[Code & CaseDesensitized & Word, Unicode & Word]>

        caseDesensitizedCodeMapEntries.forEach(
            ([caseDesensitizedCode, unicode]: [Code & CaseDesensitized & Word, Unicode & Word]): void => {
                if (takesLegerLine(unicode) && !canBePositioned(unicode)) {
                    fail(`Code ${caseDesensitizedCode} takes a leger line but cannot be positioned.`)
                }
            },
        )
    })
})
