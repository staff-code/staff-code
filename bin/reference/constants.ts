import {Id, Link} from "@sagittal/general"
import {Section} from "./types"

const COMMANDS_SECTION_ID = "commands" as Id<Section>
const COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID = "combiningStaffPositionsSupplement" as Id<Section>
const LEGER_LINES_SUPPLEMENT_SECTION_ID = "legerLinesSupplement" as Id<Section>

// TODO: CLEAN, READY TO GO: REFINE RELATIONSHIP BETWEEN BIN/ & SRC/ W/R/T EXCEPTIONS, PARENTHETICALS, LINKS
//  Perhaps these should also include their text, to spare from that one exception for the commands?
//  - And there's definitely some clean-up that could be done here with the explanations in two places,
//  - And so much wasted "" space ending up in the final smufl reference,
//  - And so much stuff that doesn't depend on smufl/bravura updates, yet need to remember to run script to regenerate

// Temporary link, until a public post is ready.
const INTRO_TO_STAFF_CODE_LINK: Link = "https://forum.sagittal.org/viewtopic.php?p=3192#p3192" as Link

export {
    COMMANDS_SECTION_ID,
    INTRO_TO_STAFF_CODE_LINK,
    LEGER_LINES_SUPPLEMENT_SECTION_ID,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID,
}
