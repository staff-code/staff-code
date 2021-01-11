import {Id, RecordKey} from "@sagittal/general"
import {Explanation, Section} from "./types"

const EXPLANATIONS: Record<RecordKey<Id<Section>>, Explanation> = {
    "staves": `Following <b>ston</b> (<b>st</b>aff <b>on</b>) StaffCode generates staff pieces and leger lines automatically, and any staff-piece code will change what kind of staff is generated. The default is <b>st5ln</b> (<b>st</b>aff <b>5</b> <b>l</b>i<b>n</b>es).` as Explanation,
    "clefs": `StaffCode maps note names C1 D1 E1 .. C7 to staff positions based on the preceding clef and its staff position. If there has been no clef, treble staff positioning is used.` as Explanation,
    "combiningStaffPositions": `These are invisible characters that move the following symbol up or down if possible. StaffCode generates them from note names C1 D1 E1 .. C7 based on the preceding clef and its staff position. They can also be used directly, relative to the middle staff line. See also <a href="Combining staff positions supplement">Combining staff positions supplement</a>.` as Explanation,
    "combiningStaffPositionsSupplement": `SMuFL does not allow staff positions corresponding to more than 2 leger lines. And it does not allow symbols on the middle staff line without advancing. So StaffCode adds the following additional positions.` as Explanation,
    "legerLinesSupplement": `SMuFL does not have suitable leger lines for all note and notehead symbols, so StaffCode adds the following. StaffCode will generate them automatically following <b>st</b>on (<b>st</b>aff <b>on</b>).` as Explanation,
}

const computeExplanation = (sectionId: Id<Section>): Explanation =>
    EXPLANATIONS[sectionId] || "" as Explanation

export {
    computeExplanation,
}
