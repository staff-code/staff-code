import {isUndefined, onlyRunInCi, Word} from "@sagittal/general"
import {generateSmuflMap} from "../../../bin/codes/generateSmuflMap"
import {Code, computeUnicodeLiteral, Unicode} from "../../../src"
import {SMuFL_ABBREVIATION_ALIASES_MAP} from "../../../src/translate/codes/aliases"

// TODO: CLEAN, READY TO GO: ABBREVIATED CODES INFRASTRUCTURE
//  THe only thing I have to do left is figure out how exact I want to handle the generation of JSON/hardcode/whatever
//  Like... now that I pulled this in, and used it to prove out the generation, do I even need to keep it?
//  I could keep it as a test expectation, and it would fail whenever they changed SMuFL on us.
//  That's probably fine. Just rename everything accordingly. You can even keep all the formatting and comments and such
//  But just in the test.
//  And then just make sure that the generate script writes to file, like the other script does, and puts it where the
//  Original file used to be.
//  Then make a package.json script for it and make sure that runs the same time the other script runs.

describe("generateSmuflMap", (): void => {
    it("matches the hardcoded map", (): void => {
        onlyRunInCi()

        const actual = generateSmuflMap()

        let totalFailureCount = 0

        const actualEntries = Object.entries(actual) as Array<[Code & Word, Unicode & Word]>
        const hardcodedSmuflMapEntries =
            Object.entries(SMuFL_ABBREVIATION_ALIASES_MAP) as Array<[Code & Word, Unicode & Word]>
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
            const expectedUnicode = SMuFL_ABBREVIATION_ALIASES_MAP[actualCode]

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
