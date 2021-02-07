import {Id, Link} from "@sagittal/general"
import {Section} from "./types"

const BASICS_SECTION_ID = "basics" as Id<Section>
const COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID = "combiningStaffPositionsSupplement" as Id<Section>
const LEGER_LINES_SUPPLEMENT_SECTION_ID = "legerLinesSupplement" as Id<Section>

// TODO: CLEAN, READY TO GO: REFINE RELATIONSHIP BETWEEN BIN/ & SRC/ W/R/T EXCEPTIONS, PARENTHETICALS, LINKS
//  Perhaps these should also include their text, to spare from that one exception for the commands?
//  - And there's definitely some clean-up that could be done here with the explanations in two places,
//  - And so much wasted "" space ending up in the final SMuFL reference,
//  - And so much stuff that doesn't depend on smufl/bravura updates, yet need to remember to run script to regenerate
//  - Note: generate-smufl-reference (emp. on smufl) is a bit of a misnomer ATM, but shouldn't be when we're done here
//  - Also, the ASCII widths don't need to be in there, with the bravura widths

// Temporary link, until a public post is ready.
const INTRODUCTION_TO_STAFF_CODE_LINK: Link = "https://forum.sagittal.org/viewtopic.php?p=3192#p3192" as Link

export {
    BASICS_SECTION_ID,
    INTRODUCTION_TO_STAFF_CODE_LINK,
    LEGER_LINES_SUPPLEMENT_SECTION_ID,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID,
}
