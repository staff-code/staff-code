import {Id} from "@sagittal/general"
import {BASICS_SECTION_ID, Section} from "../../../../../../bin"
import referenceJson from "../reference.json"
import {appendSection} from "./section"

const PRIORITY_SECTION_IDS: Array<Id<Section>> = [
    BASICS_SECTION_ID,
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
