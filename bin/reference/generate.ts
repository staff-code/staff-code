import {computeKeyPath, Id, Link, sort} from "@sagittal/general"
import * as fs from "fs"
import {computeExplanation} from "./explanations"
import {smuflRanges} from "./globals"
import {
    BASICS_SECTION,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION,
    LEGER_LINES_SUPPLEMENT_SECTION,
} from "./notSmufl"
import {computeParenthetical} from "./parentheticals"
import {computeSectionDatum} from "./row"
import {Section, SmuflRangeDatum} from "./types"

const generateSmuflReference = (): void => {
    const rangeEntries = Object.entries(smuflRanges) as Array<[Id<Section>, SmuflRangeDatum]>
    sort(rangeEntries, {by: computeKeyPath(1, "range_start")})

    const sections = rangeEntries.map(([rangeName, rangeDatum]: [Id<Section>, SmuflRangeDatum]): Section => {
        const {description, glyphs: glyphNames} = rangeDatum

        const sectionId = rangeName
        const sectionName = description
        const parenthetical = computeParenthetical(sectionId)
        const sectionLink = "" as Link
        const explanation = computeExplanation(sectionId)
        const sectionData = glyphNames.map(computeSectionDatum)

        return [sectionId, sectionName, parenthetical, sectionLink, explanation, sectionData]
    })
    sections.unshift(BASICS_SECTION)
    sections.push(LEGER_LINES_SUPPLEMENT_SECTION)
    sections.push(COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION)

    fs.writeFileSync(
        "src/ui/variants/package/reference/reference.json",
        JSON.stringify(sections, undefined, 2),
    )
}

generateSmuflReference()
