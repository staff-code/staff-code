import {Id, Link} from "@sagittal/general"
import {Section} from "./types"

const BASICS_SECTION_ID = "basics" as Id<Section>
const COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID = "combiningStaffPositionsSupplement" as Id<Section>
const LEGER_LINES_SUPPLEMENT_SECTION_ID = "legerLinesSupplement" as Id<Section>

// Temporary link, until a public post is ready.
const INTRODUCTION_TO_STAFF_CODE_LINK: Link = "https://forum.sagittal.org/viewtopic.php?p=3192#p3192" as Link

export {
    BASICS_SECTION_ID,
    INTRODUCTION_TO_STAFF_CODE_LINK,
    LEGER_LINES_SUPPLEMENT_SECTION_ID,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID,
}
