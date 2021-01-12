import {Em, Io, Link, Multiplier, Sentence} from "@sagittal/general"

const DEFAULT_INITIAL_CODES = "ston Gcl ; " as Io & Sentence
const DEFAULT_INITIAL_LINE = 2 as Multiplier<Em>
const DEFAULT_INITIAL_SIZE = 1 as Multiplier<Em>
const DEFAULT_INITIAL_REFERENCE_OPEN = false

const WEB_APP_URL = "https://app.sagittal.org/staffcode/" as Link

export {
    WEB_APP_URL,
    DEFAULT_INITIAL_SIZE,
    DEFAULT_INITIAL_CODES,
    DEFAULT_INITIAL_LINE,
    DEFAULT_INITIAL_REFERENCE_OPEN,
}
