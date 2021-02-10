import {Id} from "@sagittal/general"
import {Section} from "../../../../../../bin"
import referenceJson from "../reference.json"
import {BASICS_NOT_SMuFL_SECTION_ID} from "./constants"
import {
    BASICS_NOT_SMuFL_SECTION,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION,
} from "./notSmufl"
import {appendSection} from "./section"

const PRIORITY_SECTION_IDS: Array<Id<Section>> = [
    BASICS_NOT_SMuFL_SECTION_ID,
    "staffBracketsAndDividers",
    "staves",
    "barlines",
    "repeats",
    "clefs",
    "timeSignatures",
    "noteheads",
    "slashNoteheads",
    "noteClusters",
    "individualNotes",
    "beamedGroupsOfNotes",
    "stems",
    "tremolos",
    "flags",
    "standardAccidentals12Edo",
    "articulation",
    "holdsAndPauses",
    "rests",
    "barRepeats",
    "octaves",
    "dynamics",
    "commonOrnaments",
    "otherBaroqueOrnaments",
    "combiningStrokesForTrillsAndMordents",
    "precomposedTrillsAndMordents",
    "brassTechniques",
    "windTechniques",
    "stringTechniques",
    "pluckedTechniques",
    "keyboardTechniques",
] as Array<Id<Section>>

const isPrioritySection = ([sectionId]: Section): boolean =>
    PRIORITY_SECTION_IDS.includes(sectionId)

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
