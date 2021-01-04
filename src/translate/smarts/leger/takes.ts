import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {
    isMedievalRenaissanceMensuralIndividualNotesUnicode,
    isMedievalRenaissanceMensuralNoteheadsUnicode,
    isMedievalRenaissanceMensuralObliqueFormsPlainchantSingleNoteFormsUnicode,
    isMoreSimplifiedMusicNotationNoteheadsUnicode,
    isNoteheadNoteClusterIndividualNotesOrBeamedGroupsOfNotesUnicode,
    isNoteheadsSupplementUnicode,
    isShapeNoteNoteheadsSupplementUnicode,
    isSimplifiedMusicNotationNoteheadsUnicode,
    isTechniquesNoteheadsUnicode,
} from "../isUnicode"

const takesLegerLine = (unicode: Unicode & Word): boolean =>
    isNoteheadNoteClusterIndividualNotesOrBeamedGroupsOfNotesUnicode(unicode)
    || isSimplifiedMusicNotationNoteheadsUnicode(unicode)
    || isMoreSimplifiedMusicNotationNoteheadsUnicode(unicode)
    || isShapeNoteNoteheadsSupplementUnicode(unicode)
    || isNoteheadsSupplementUnicode(unicode)
    || isTechniquesNoteheadsUnicode(unicode)
    || isMedievalRenaissanceMensuralIndividualNotesUnicode(unicode)
    || isMedievalRenaissanceMensuralNoteheadsUnicode(unicode)
    || isMedievalRenaissanceMensuralObliqueFormsPlainchantSingleNoteFormsUnicode(unicode)

export {
    takesLegerLine,
}
