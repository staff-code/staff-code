import {
    BASS_POSITION_MAP,
    Code,
    CODE_MAP,
    EMPTY_UNICODE,
    POSITION_MAP,
    Symbol,
    TREBLE_POSITION_MAP,
    Unicode,
} from "../symbols"
import {computeMapUnicodes, computeUnicodeForCode} from "../utility"
import {smarts} from "./globals"

const TREBLE_UNICODE = computeUnicodeForCode(Code["tbcf"])
const BASS_UNICODE = computeUnicodeForCode(Code["bscf"])

const BASS_CODE_MAP: Record<Code, Symbol> = {...CODE_MAP, ...BASS_POSITION_MAP} as Record<Code, Symbol>
const TREBLE_CODE_MAP: Record<Code, Symbol> = {...CODE_MAP, ...TREBLE_POSITION_MAP} as Record<Code, Symbol>

const POSITION_UNICODES = computeMapUnicodes(POSITION_MAP)
const FAKE_TEMP_MIDDLE_POSITION_UNICODE = computeUnicodeForCode(Code["md0"])

const canBePositioned = (unicodeWord: Unicode): boolean =>
    (unicodeWord >= "\uE022" && unicodeWord <= "\uE024")    // Leger lines
    || (unicodeWord >= "\uE0A0" && unicodeWord <= "\uE21F") // Noteheads, notes, stems, beamed groups of notes
    || (unicodeWord >= "\uE240" && unicodeWord <= "\uE4FF") // Flags, accidentals, articulation, holds, pauses, rests
    || (unicodeWord >= "\uE900" && unicodeWord <= "\uEA1F") // Medieval & Renaissance
    || (unicodeWord >= "\uEC30" && unicodeWord <= "\uEC3F") // Kievan square notation

const isPositionUnicode = (unicodeWord: Unicode): boolean =>
    POSITION_UNICODES.includes(unicodeWord)

const updateSmartPosition = ({unicode}: Symbol): void => {
    if (isPositionUnicode(unicode)) smarts.position = unicode
}

const computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts = (symbol: Symbol): Unicode => {
    updateSmartClef(symbol)
    updateSmartPosition(symbol)

    return canBePositioned(symbol.unicode) && smarts.position !== FAKE_TEMP_MIDDLE_POSITION_UNICODE ?
        smarts.position :
        EMPTY_UNICODE
}

const updateSmartClef = ({unicode}: Symbol): void => {
    if (unicode === TREBLE_UNICODE) smarts.codeMap = TREBLE_CODE_MAP
    if (unicode === BASS_UNICODE) smarts.codeMap = BASS_CODE_MAP
}

export {
    canBePositioned,
    updateSmartPosition,
    isPositionUnicode,
    computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts,
    updateSmartClef,
    TREBLE_CODE_MAP,
}
