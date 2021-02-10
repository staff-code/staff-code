import {Unicode, Word} from "@sagittal/general"
import {
    isIndividualNotesOrBeamedGroupsOfNotesUnicode,
    isMedievalRenaissanceMensuralIndividualNotesUnicode,
    isMedievalRenaissanceMensuralNoteheadsUnicode,
    isMedievalRenaissanceMensuralObliqueFormsUnicode,
    isMoreSimplifiedMusicNotationNoteheadsUnicode,
    isNoteheadNoteClusterOrIndividualNoteUnicode,
    isNoteheadsSupplementUnicode,
    isNoteheadUnicode,
    isShapeNoteNoteheadsSupplementUnicode,
    isSimplifiedMusicNotationNoteheadsUnicode,
    isTechniquesNoteheadsUnicode,
} from "../isUnicode"

const takesLegerLine = (unicode: Unicode & Word): boolean =>
    isNoteheadUnicode(unicode)
    || isNoteheadNoteClusterOrIndividualNoteUnicode(unicode)
    || isIndividualNotesOrBeamedGroupsOfNotesUnicode(unicode)
    || isSimplifiedMusicNotationNoteheadsUnicode(unicode)
    || isMoreSimplifiedMusicNotationNoteheadsUnicode(unicode)
    || isShapeNoteNoteheadsSupplementUnicode(unicode)
    || isNoteheadsSupplementUnicode(unicode)
    || isTechniquesNoteheadsUnicode(unicode)
    || isMedievalRenaissanceMensuralIndividualNotesUnicode(unicode)
    || isMedievalRenaissanceMensuralNoteheadsUnicode(unicode)
    || isMedievalRenaissanceMensuralObliqueFormsUnicode(unicode)

export {
    takesLegerLine,
}
