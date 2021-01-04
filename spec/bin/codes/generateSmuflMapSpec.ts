import {isUndefined, onlyRunInCi, Word} from "@sagittal/general"
import {generateSmuflMap} from "../../../bin/codes/generateSmuflMap"
import {Code, computeUnicodeLiteral, Unicode} from "../../../src"
import {SMuFL_ABBREVIATION_ALIASES_MAP} from "../../../src/translate/codes/aliases"

describe("generateSmuflMap", (): void => {
    it("should fail whenever SMuFL adds or changes a glyph name, to alert us that we need to add both a new code and an abbreviation", (): void => {
        onlyRunInCi()

        const actual = generateSmuflMap()

        let totalFailureCount = 0

        const actualEntries = Object.entries(actual) as Array<[Code & Word, Unicode & Word]>
        const smuflAbbreviationAliasesMapEntries =
            Object.entries(SMuFL_ABBREVIATION_ALIASES_MAP) as Array<[Code & Word, Unicode & Word]>
        expect(actualEntries.length).toBe(smuflAbbreviationAliasesMapEntries.length)

        if (smuflAbbreviationAliasesMapEntries.length > actualEntries.length) {
            smuflAbbreviationAliasesMapEntries.forEach(
                ([expectedCode, expectedUnicode]: [Code & Word, Unicode & Word]): void => {
                    if (isUndefined(actual[expectedCode])) {
                        fail(`The current Staff Code SMuFL map has a code, ${expectedCode}, which maps to ${computeUnicodeLiteral(expectedUnicode)}, but which is not included in the latest SMuFL release.`)
                        totalFailureCount += 1
                    }
                },
            )
        }

        actualEntries.forEach(([actualCode, actualUnicode]: [Code & Word, Unicode & Word]): void => {
            const expectedUnicode = SMuFL_ABBREVIATION_ALIASES_MAP[actualCode]

            if (isUndefined(expectedUnicode)) {
                fail(`${actualCode} is in the latest SMuFL release, but does not yet have a definition in Staff Code.`)
                totalFailureCount += 1
            } else if (actualUnicode !== expectedUnicode) {
                fail(`${actualCode}, according to the current Staff Code SMuFL map, was supposed to map to ${computeUnicodeLiteral(expectedUnicode)} but in the latest SMuFL release mapped to ${computeUnicodeLiteral(actualUnicode)}.`)
                totalFailureCount += 1
            }
        })

        if (totalFailureCount > 0) fail(`TOTAL FAILURE COUNT: ${totalFailureCount}`)
    })
})
