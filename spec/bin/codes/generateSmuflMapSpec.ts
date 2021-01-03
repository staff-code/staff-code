import {isUndefined, onlyRunInCi, Word} from "@sagittal/general"
import {generateSmuflMap} from "../../../bin/codes/generateSmuflMap"
import {Code, computeUnicodeLiteral, SMuFL_MAP, Unicode} from "../../../src"

// TODO: only thing I have to do left is figure out how exact I want to handle the generation of JSON/hardcode/whatever

describe("generateSmuflMap", (): void => {
    it("matches the hardcoded map", (): void => {
        onlyRunInCi()

        const actual = generateSmuflMap()

        let totalFailureCount = 0

        const actualEntries = Object.entries(actual) as Array<[Code & Word, Unicode & Word]>
        const hardcodedSmuflMapEntries = Object.entries(SMuFL_MAP) as Array<[Code & Word, Unicode & Word]>
        expect(actualEntries.length).toBe(hardcodedSmuflMapEntries.length)

        if (hardcodedSmuflMapEntries.length > actualEntries.length) {
            hardcodedSmuflMapEntries.forEach(
                ([hardcodedCode, hardcodedUnicode]: [Code & Word, Unicode & Word]): void => {
                    if (isUndefined(actual[hardcodedCode])) {
                        fail(`The hardcoded SMuFL map has an extra code, ${hardcodedCode}, which maps to ${computeUnicodeLiteral(hardcodedUnicode)}.`)
                        totalFailureCount += 1
                    }
                },
            )
        }

        actualEntries.forEach(([actualCode, actualUnicode]: [Code & Word, Unicode & Word]): void => {
            const expectedUnicode = SMuFL_MAP[actualCode]

            if (isUndefined(expectedUnicode)) {
                fail(`${actualCode} was not defined in the hardcoded SMuFL map.`)
                totalFailureCount += 1
            } else if (actualUnicode !== expectedUnicode) {
                fail(`${actualCode}, according to the hardcoded SMuFL map, was supposed to map to ${computeUnicodeLiteral(expectedUnicode)} but instead mapped to ${computeUnicodeLiteral(actualUnicode)}.`)
                totalFailureCount += 1
            }
        })

        if (totalFailureCount > 0) fail(`TOTAL FAILURE COUNT: ${totalFailureCount}`)
    })
})
