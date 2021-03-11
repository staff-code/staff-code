import {Id, Link, Name, Word} from "@sagittal/general"
import {Code, Section} from "../../../../../../bin"

const EMPTY_CODE_CELL = "..." as Code & Word

const BASICS_NOT_SMuFL_SECTION_ID = "basics" as Id<Section>
const COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_ID = "combiningStaffPositionsSupplement" as Id<Section>
const LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_ID = "legerLinesSupplement" as Id<Section>

const BASICS_NOT_SMuFL_SECTION_NAME =
    "StaffCode basics" as Name<Section>
const COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_NAME =
    "Combining staff positions supplement" as Name<Section>
const LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_NAME =
    "Leger lines supplement" as Name<Section>

const INTRODUCTION_TO_STAFF_CODE_LINK: Link = "https://forum.sagittal.org/viewtopic.php?f=23&t=519" as Link
const STAFF_CODE_SUBFORUM_LINK: Link = "https://forum.sagittal.org/viewforum.php?f=22" as Link

export {
    EMPTY_CODE_CELL,
    BASICS_NOT_SMuFL_SECTION_ID,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
    BASICS_NOT_SMuFL_SECTION_NAME,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_NAME,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_NAME,
    INTRODUCTION_TO_STAFF_CODE_LINK,
    STAFF_CODE_SUBFORUM_LINK,
}
