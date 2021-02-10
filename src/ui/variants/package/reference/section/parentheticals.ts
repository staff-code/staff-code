import {Id, RecordKey} from "@sagittal/general"
import {Section} from "../../../../../../bin"
import {Parenthetical} from "./types"

const SECTION_DESCRIPTION_PARENTHETICALS: Record<RecordKey<Id<Section>>, Parenthetical> = {
    "staves": "(and leger lines)" as Parenthetical,
}

const computeParenthetical = (sectionId: Id<Section>): Parenthetical =>
    SECTION_DESCRIPTION_PARENTHETICALS[sectionId] || "" as Parenthetical

export {
    computeParenthetical,
}
