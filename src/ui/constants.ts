import {Em, Filename, FontName, Io, Link, Multiplier, Sentence} from "@sagittal/general"

const DEFAULT_INITIAL_CODES = "ston Gcl ; " as Io & Sentence
const DEFAULT_INITIAL_LINE = 2 as Multiplier<Em>
const DEFAULT_INITIAL_SIZE = 1 as Multiplier<Em>
const DEFAULT_INITIAL_REFERENCE_OPEN = false

const WEB_APP_URL = "https://staffcode.org" as Link
const BRAVURA_TEXT_BB_OTF = "assets/fonts/BravuraTextBB.otf" as Filename
const BRAVURA_TEXT_BB_WOFF = "assets/fonts/BravuraTextBB.woff" as Filename
const BRAVURA_TEXT_BB = "Bravura Text BB" as FontName

export {
    WEB_APP_URL,
    DEFAULT_INITIAL_SIZE,
    DEFAULT_INITIAL_CODES,
    DEFAULT_INITIAL_LINE,
    DEFAULT_INITIAL_REFERENCE_OPEN,
    BRAVURA_TEXT_BB_OTF,
    BRAVURA_TEXT_BB_WOFF,
    BRAVURA_TEXT_BB,
}
