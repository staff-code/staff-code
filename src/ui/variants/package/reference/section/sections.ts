import {Id} from "@sagittal/general"
import {Section} from "../../../../../../bin"
import {
    BASICS_NOT_SMuFL_SECTION,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION,
} from "./notSmufl"
import priorityJson from "./priority.json"
import referenceJson from "./reference.json"
import {appendSection} from "./section"

const isPrioritySection = ([sectionId]: Section): boolean =>
    (priorityJson as Array<Id<Section>>).includes(sectionId)

const appendSections = (): void => {
    const sections = referenceJson as Section[]

    sections.unshift(BASICS_NOT_SMuFL_SECTION)
    sections.push(LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION)
    sections.push(COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION)

    const prioritySections = [] as Section[]
    const otherSections = [] as Section[]

    sections.forEach((section: Section): void => {
        if (isPrioritySection(section)) {
            prioritySections.push(section)
        } else {
            otherSections.push(section)
        }
    })

    const sortedSections = [...prioritySections, ...otherSections]

    sortedSections.forEach(appendSection)
}

export {
    appendSections,
}
