import {Word} from "@sagittal/general"
import {LowercasedCode, Unicode} from "../../codes"
import {smarts} from "../globals"
import {CLEF_LOWERCASED_CODE_MAPS} from "./constants"

const getUnicodeGivenClef = (lowercasedCode: LowercasedCode & Word): Unicode & Word =>
    CLEF_LOWERCASED_CODE_MAPS[smarts.clef][lowercasedCode]

export {
    getUnicodeGivenClef,
}
