import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../smufl"
import {Code, Unicode} from "../types"

const MANUAL_STAVE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "st8": SMuFL_MAP["st5lnnr"],
    "st16": SMuFL_MAP["st5ln"],
    "st24": SMuFL_MAP["st5lnwd"],
    "st": SMuFL_MAP["st5lnnr"],
} as Record<Code & Word, Unicode & Word>

const LINE_BREAK_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "br;": SMuFL_MAP["lnfd"],
} as Record<Code & Word, Unicode & Word>

export {
    MANUAL_STAVE_ALIASES_MAP,
    LINE_BREAK_ALIASES_MAP,
}
