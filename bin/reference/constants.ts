import {Id, Link} from "@sagittal/general"
import {Section} from "./types"

const COMMANDS_SECTION_ID = "commands" as Id<Section>

// todo: perhaps these should also include their text, to spare from that one exception for the commands?
// Temporary link, until a public post is ready.
const INTRO_TO_STAFF_CODE_LINK: Link = "https://forum.sagittal.org/viewtopic.php?p=3192#p3192" as Link

// todo: there's definitely some clean-up that could be done here with the explanations in two places,
//  and so much "" ending up in the final smufl reference,
//  and so much stuff that doesn't depend on smufl/bravura updates needing to run through the gamut and remember to regenerate it

export {
    COMMANDS_SECTION_ID,
    INTRO_TO_STAFF_CODE_LINK,
}
