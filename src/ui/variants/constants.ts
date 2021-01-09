import {Em, Io, Multiplier, Sentence} from "@sagittal/general"

const DEFAULT_INITIAL_CODES = "ston Gcl ; " as Io & Sentence
const DEFAULT_INITIAL_LINE = 2 as Multiplier<Em>
const DEFAULT_INITIAL_SIZE = 1 as Multiplier<Em>

export {
    DEFAULT_INITIAL_CODES,
    DEFAULT_INITIAL_SIZE,
    DEFAULT_INITIAL_LINE,
}
