import {computeKeyPath, Id, Name, sort} from "@sagittal/general"
import * as fs from "fs"
import {Unicode} from "../../src"
import {computeSmuflCode} from "../codes"
import {computeGlyphUnicode} from "../glyphUnicode"
import {smuflRanges} from "./globals"
import {computeMnemonic} from "./mnemonic"
import {ReferenceRow, Section, SmuflRangeDatum} from "./types"

const generateSmuflReference = (): void => {
    const rangeEntries = Object.entries(smuflRanges) as Array<[Id<Section>, SmuflRangeDatum]>
    sort(rangeEntries, {by: computeKeyPath(1, "range_start")})

    const sections = rangeEntries.map(([rangeName, rangeDatum]: [Id<Section>, SmuflRangeDatum]): Section => {
        const {description, glyphs: glyphNames} = rangeDatum

        const sectionId = rangeName
        const sectionName = description
        const sectionData = glyphNames.map((glyphName: Name<Unicode>): ReferenceRow => {
            const unicode = computeGlyphUnicode(glyphName)
            const code = computeSmuflCode(glyphName)
            const mnemonic = computeMnemonic(glyphName)

            return [unicode, code, mnemonic]
        })

        return [sectionId, sectionName, sectionData]
    })

    fs.writeFileSync(
        "src/ui/variants/package/reference/reference.json",
        JSON.stringify(sections, undefined, 2),
    )
}

generateSmuflReference()
