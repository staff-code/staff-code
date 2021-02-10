import {Unicode, Word} from "@sagittal/general"
import {smarts} from "../globals"
import {BASS_UNICODE, TREBLE_UNICODE} from "./constants"
import {Clef} from "./types"

const updateSmartClef = (unicode: Unicode & Word): void => {
    if (unicode === TREBLE_UNICODE) smarts.clef = Clef.TREBLE
    if (unicode === BASS_UNICODE) smarts.clef = Clef.BASS
}

export {
    updateSmartClef,
}
