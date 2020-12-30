import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {
    isInFlagsAccidentalsArticulationHoldsPausesOrRestsRange,
    isInKievanSquareNotationRange,
    isInLegerLineRange,
    isInMedievalAndRenaissanceRange,
    isInNoteheadNoteStemOrBeamedGroupsOfNotesRange,
} from "./ranges"

const canBePositioned = (unicode: Unicode & Word): boolean =>
    isInLegerLineRange(unicode)
    || isInNoteheadNoteStemOrBeamedGroupsOfNotesRange(unicode)
    || isInFlagsAccidentalsArticulationHoldsPausesOrRestsRange(unicode)
    || isInMedievalAndRenaissanceRange(unicode)
    || isInKievanSquareNotationRange(unicode)

export {
    canBePositioned,
}
