// tslint:disable max-line-length

import {Id, RecordKey} from "@sagittal/general"
import {Section} from "../../../../../../bin"
import {
    BASICS_NOT_SMuFL_SECTION_ID,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
} from "./constants"
import {Explanation} from "./types"

const EXPLANATIONS: Record<RecordKey<Id<Section>>, Explanation> = {
    "staves": `StaffCode generates staff pieces and leger lines automatically after a <span>ston</span> (<u>st</u>aff <u>on</u>) command, and any staff-piece code will change what kind of staff is generated. The default is <span>st5ln</span> (<u>st</u>aff <u>5</u> <u>l</u>i<u>n</u>es).` as Explanation,
    "clefs": `StaffCode maps note names C1 ... B3 C4 D4 ... C7 to staff positions based on the preceding clef and its staff position. If there has been no clef, treble staff positioning is used.` as Explanation,
    "combiningStaffPositions": `These are invisible characters that move the following symbol up or down if possible. StaffCode generates them from note names C1 ... B3 C4 D4 ... C7 based on the preceding clef and its staff position. They can also be used directly, relative to the middle staff line. See also <a href="#combiningStaffPositionsSupplement">Combining staff positions supplement</a>.` as Explanation,
    [BASICS_NOT_SMuFL_SECTION_ID]: `"Auto stem direction" means stem down for middle line and above, otherwise stem up.` as Explanation,
    [LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_ID]: `SMuFL does not have suitable leger lines for all note and notehead symbols, so StaffCode adds the following. StaffCode will generate them automatically following <span>ston</span> (<u>st</u>aff <u>on</u>).` as Explanation,
    [COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_ID]: `SMuFL does not allow staff positions corresponding to more than 2 leger lines. And it does not allow symbols on the middle staff line without advancing. So StaffCode adds the following additional positions.` as Explanation,
}

const computeExplanation = (sectionId: Id<Section>): Explanation =>
    EXPLANATIONS[sectionId] || "" as Explanation

export {
    computeExplanation,
}
