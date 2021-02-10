import {computeKeyPath, Id, sort} from "@sagittal/general"
import * as fs from "fs"
import {smuflRanges} from "./globals"
import {computeIsPrioritySection} from "./priority"
import {computeSectionDatum} from "./row"
import {Section, SmuflRangeDatum} from "./types"

const generateSmuflReference = (): void => {
    const rangeEntries = Object.entries(smuflRanges) as Array<[Id<Section>, SmuflRangeDatum]>
    sort(rangeEntries, {by: computeKeyPath(1, "range_start")})

    const prioritySections = [] as Array<Id<Section>>

    const sections = rangeEntries.map(([rangeName, rangeDatum]: [Id<Section>, SmuflRangeDatum]): Section => {
        const {description, glyphs: glyphNames} = rangeDatum

        const sectionId = rangeName
        const sectionName = description
        const sectionData = glyphNames.map(computeSectionDatum)

        const isPrioritySection = computeIsPrioritySection(glyphNames)
        if (isPrioritySection) prioritySections.push(sectionId)

        return [sectionId, sectionName, sectionData]
    })

    fs.writeFileSync(
        "src/ui/variants/package/reference/section/priority.json",
        JSON.stringify(prioritySections, undefined, 2),
    )

    fs.writeFileSync(
        "src/ui/variants/package/reference/section/reference.json",
        JSON.stringify(sections, undefined, 2),
    )
}

generateSmuflReference()
