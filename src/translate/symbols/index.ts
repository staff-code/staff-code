export {BASS_POSITION_MAP, TREBLE_POSITION_MAP, POSITION_MAP, CLEF_MAP} from "./positionAndClef"
export {MANUAL_ADVANCE_MAP, SMART_ADVANCE_MAP, MANUAL_STAVE_MAP, SMART_STAVE_MAP} from "./advanceAndStave"
export {CODE_MAP_PLUS_SMART_CODES, CODE_MAP} from "./codes"
export {EMPTY_UNICODE} from "./constants"
export {Code, Unicode, Symbol, Codeword, LowercaseCodeword, Width} from "./types"

// TODO: FEATURE IMPROVE, READY TO GO: NEW CODES FOR ALL 2932 SMuFL GLYPHS
//  Add in Dave's new set of codes
//  Replace any existing staffCode with the new automatically generated code
//  When this is no more than 2 characters longer.
