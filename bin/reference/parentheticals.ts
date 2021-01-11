import {Id, RecordKey} from "@sagittal/general"
import {Parenthetical, Section} from "./types"

const NOT_SMUFL = "(not SMuFL)" as Parenthetical

const SECTION_DESCRIPTION_PARENTHETICALS: Record<RecordKey<Id<Section>>, Parenthetical> = {
    "staves": "(and leger lines)" as Parenthetical,
    "combiningStaffPositionsSupplement": NOT_SMUFL,
    "legerLinesSupplement": NOT_SMUFL,
}

const computeParenthetical = (sectionId: Id<Section>): Parenthetical =>
    SECTION_DESCRIPTION_PARENTHETICALS[sectionId] || "" as Parenthetical

export {
    computeParenthetical,
    NOT_SMUFL,
}
