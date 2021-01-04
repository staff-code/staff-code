import {isPositive, Word} from "@sagittal/general"
import {LowercasedCode, Unicode} from "../../codes"
import {smarts} from "../globals"
import {CLEF_LOWERCASED_CODE_MAPS} from "./constants"
import {computeStaffPosition} from "./position"
import {StemZone} from "./types"

const getUnicodeGivenClefAndPosition = (lowercasedCode: LowercasedCode & Word): Unicode & Word => {
    const stemZone = isPositive(computeStaffPosition()) ?
        StemZone.ABOVE_MIDDLE_POSITION :
        StemZone.MIDDLE_POSITION_AND_BELOW

    return CLEF_LOWERCASED_CODE_MAPS[smarts.clef][stemZone][lowercasedCode]
}

export {
    getUnicodeGivenClefAndPosition,
}
