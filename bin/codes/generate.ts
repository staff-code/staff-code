import {Name, RecordKey, Word} from "@sagittal/general"
import * as fs from "fs"
// tslint:disable-next-line no-reaching-imports
import {Code, computeUnicodeFromUnicodeLiteral, Unicode} from "../../src/translate"
import {glyphNames} from "../globals"
import {GlyphDatum} from "../types"
import {computeSmuflCode} from "./smuflCode"

const generateSmuflMap = (): Record<RecordKey<Code & Word>, Unicode & Word> => {
    const glyphNameEntries = Object.entries(glyphNames) as Array<[Name<Unicode>, GlyphDatum]>

    const smuflMap = glyphNameEntries.reduce(
        (
            smuflMap: Record<RecordKey<Code & Word>, Unicode & Word>,
            [glyphName, glyphDatum]: [Name<Unicode>, GlyphDatum],
        ): Record<RecordKey<Code & Word>, Unicode & Word> => {
            const code = computeSmuflCode(glyphName)

            return {
                ...smuflMap,
                [code]: computeUnicodeFromUnicodeLiteral(glyphDatum.codepoint),
            }
        },
        {} as Record<RecordKey<Code & Word>, Unicode & Word>,
    )

    fs.writeFileSync(
        "src/translate/codes/smufl/smufl.json",
        JSON.stringify(smuflMap, undefined, 2),
    )

    return smuflMap
}

if (!process?.env?.TEST_MODE) generateSmuflMap()

export {
    generateSmuflMap,
}
