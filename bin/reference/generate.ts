import {computeKeyPath, Name, sort} from "@sagittal/general"
import * as fs from "fs"
import {Unicode} from "../../src"
import {computeSmuflCode} from "../codes"
import {computeGlyphUnicode} from "../glyphUnicode"
import {smuflRanges} from "./globals"
import {ReferenceRow, ReferenceSection, SmuflRangeDatum} from "./types"

const generateSmuflReference = (): void => {
    const rangeValues = Object.values(smuflRanges) as SmuflRangeDatum[]
    sort(rangeValues, {by: computeKeyPath("range_start")})

    const referenceSections = rangeValues.map((rangeData: SmuflRangeDatum): ReferenceSection => {
        const {description, glyphs: glyphNames} = rangeData

        const sectionName = description
        const sectionData = glyphNames.map((glyphName: Name<Unicode>): ReferenceRow => {
            const unicode = computeGlyphUnicode(glyphName)
            const code = computeSmuflCode(glyphName)

            return [unicode, code, glyphName]
        })

        return [sectionName, sectionData]
    })

    fs.writeFileSync(
        "src/ui/reference/reference.json",
        JSON.stringify(referenceSections, undefined, 2),
    )
}

generateSmuflReference()
