import {Id, RecordKey} from "@sagittal/general"
import {Explanation, Section} from "./types"

const EXPLANATIONS: Record<RecordKey<Id<Section>>, Explanation> = {
    "staves": `StaffCode generates staff pieces and leger lines automatically after a <u>ston</u> (<u>st</u>aff <u>on</u>) command, and any staff-piece code will change what kind of staff is generated. The default is <u>st5ln</u> (<u>st</u>aff <u>5</u> <u>l</u>i<u>n</u>es).` as Explanation,
    "clefs": `StaffCode maps note names C1 ... B3 C4 D4 ... C7 to staff positions based on the preceding clef and its staff position. If there has been no clef, treble staff positioning is used.` as Explanation,
    "combiningStaffPositions": `These are invisible characters that move the following symbol up or down if possible. StaffCode generates them from note names C1 ... B3 C4 D4 ... C7 based on the preceding clef and its staff position. They can also be used directly, relative to the middle staff line. See also <a href="#combiningStaffPositionsSupplement">Combining staff positions supplement</a>.` as Explanation,
}

// TODO: FEATURE IMPROVE, READY TO GO: IMPROVE EXPLANATION FORMATTING
//  In the note for the Leger lines supplement section of the Reference, the code "ston" is half underlined.
//  In the note for the Staves section, "ston" and "st5ln" are fully underlined.
//  But should they be underlined at all? I think only the code characters in the mnemonics should be underlined,
//  As you have rightly also done in those notes.
//  If the codes are to be distinguished in some way in the notes, then it would make sense to do this by setting them
//  In Roboto mono. But I'm not saying this is essential. I'll leave that up to you.
//  - Probably the codes should be Roboto Mono and the parenthetical mnemonics in the normal serif font.

const computeExplanation = (sectionId: Id<Section>): Explanation =>
    EXPLANATIONS[sectionId] || "" as Explanation

export {
    computeExplanation,
}
