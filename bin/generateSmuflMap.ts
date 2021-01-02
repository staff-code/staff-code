import {BLANK, Name, RecordKey, Word} from "@sagittal/general"
import * as fs from "fs"
import {Code, computeUnicodeFromUnicodeLiteral, Unicode, UnicodeLiteral} from "../src"
import {computeAbbreviatedGlyphNameCode} from "./abbreviatedGlyphNameCode"

const generateSmuflMap = (): Record<RecordKey<Code & Word>, Unicode & Word> => {
    const glyphNames = JSON.parse(
        fs.readFileSync("vendor/glyphnames.json", {encoding: "utf8"})
            .replace(/\r/g, BLANK),
    )
    const glyphNameEntries = Object.entries(glyphNames) as Array<[Name<Unicode>, {codepoint: UnicodeLiteral & Word}]>

    return glyphNameEntries.reduce(
        (
            smuflMap: Record<RecordKey<Code & Word>, Unicode & Word>,
            [glyphName, glyphDatum]: [Name<Unicode>, {codepoint: UnicodeLiteral & Word}],
        ): Record<RecordKey<Code & Word>, Unicode & Word> => {
            const code = computeAbbreviatedGlyphNameCode(glyphName)

            return {
                ...smuflMap,
                [code]: computeUnicodeFromUnicodeLiteral(glyphDatum.codepoint),
            }
        },
        {} as Record<RecordKey<Code & Word>, Unicode & Word>,
    )
}

export {
    generateSmuflMap,
}
