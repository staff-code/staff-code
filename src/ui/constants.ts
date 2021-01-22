import {Em, Filename, FontName, Io, Link, Multiplier, Sentence} from "@sagittal/general"

const DEFAULT_INITIAL_CODES = "ston Gcl ; " as Io & Sentence
const DEFAULT_INITIAL_LINE = 2 as Multiplier<Em>
const DEFAULT_INITIAL_SIZE = 1 as Multiplier<Em>
const DEFAULT_INITIAL_REFERENCE_OPEN = false

const WEB_APP_URL = "https://staffcode.org" as Link
const BRAVURA_TEXT_SC_OTF = "assets/fonts/BravuraTextSC.otf" as Filename
const BRAVURA_TEXT_SC_WOFF = "assets/fonts/BravuraTextSC.woff" as Filename
const BRAVURA_TEXT_SC = "Bravura Text SC" as FontName

export {
    WEB_APP_URL,
    DEFAULT_INITIAL_SIZE,
    DEFAULT_INITIAL_CODES,
    DEFAULT_INITIAL_LINE,
    DEFAULT_INITIAL_REFERENCE_OPEN,
    BRAVURA_TEXT_SC_OTF,
    BRAVURA_TEXT_SC_WOFF,
    BRAVURA_TEXT_SC,
}
