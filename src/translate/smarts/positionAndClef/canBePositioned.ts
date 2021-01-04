import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {
    isFlagsAccidentalsArticulationHoldsPausesOrRestsUnicode,
    isKievanSquareNotationUnicode,
    isMedievalAndRenaissanceUnicode,
    isNoteheadNoteStemOrBeamedGroupsOfNotesUnicode,
} from "../isUnicode"
import {isManualLegerLineUnicode, takesLegerLine} from "../leger"

const canBePositioned = (unicode: Unicode & Word): boolean =>
    isManualLegerLineUnicode(unicode)
    || isNoteheadNoteStemOrBeamedGroupsOfNotesUnicode(unicode)
    || isFlagsAccidentalsArticulationHoldsPausesOrRestsUnicode(unicode)
    || isMedievalAndRenaissanceUnicode(unicode)
    || isKievanSquareNotationUnicode(unicode)
    || takesLegerLine(unicode)

export {
    canBePositioned,
}
