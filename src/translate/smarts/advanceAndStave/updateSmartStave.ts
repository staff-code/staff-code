import {Word} from "@sagittal/general"
import {Octels, Unicode} from "../../codes"
import {smarts} from "../globals"
import {SMART_STAVE_OFF_UNICODE, SMART_STAVE_ON_UNICODE, ST16_UNICODE, ST24_UNICODE, ST8_UNICODE} from "./constants"

const updateSmartStave = (unicode: Unicode & Word): void => {
    if (unicode === SMART_STAVE_ON_UNICODE) smarts.staveOn = true
    if (unicode === SMART_STAVE_OFF_UNICODE) {
        smarts.staveWidth = 0 as Octels
        smarts.staveOn = false
    }

    if (unicode === ST8_UNICODE) smarts.staveWidth = smarts.staveWidth + 8 as Octels
    if (unicode === ST16_UNICODE) smarts.staveWidth = smarts.staveWidth + 16 as Octels
    if (unicode === ST24_UNICODE) smarts.staveWidth = smarts.staveWidth + 24 as Octels
}

export {
    updateSmartStave,
}
