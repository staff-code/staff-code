import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../smufl"
import {Code, Symbol} from "../types"

const MANUAL_STAVE_ALIASES_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    "st8": SMuFL_MAP["st5lnnr"],
    "st16": SMuFL_MAP["st5ln"],
    "st24": SMuFL_MAP["st5lnwd"],
} as Record<Code & Word, Symbol>

// TODO: Can we count on what goes into a text field on the web when someone hits their "Enter"/"Return" key?
//  Will it be the same in every browser and on every OS? Is that a web standard?
const LINE_BREAK_ALIASES_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    "br;": SMuFL_MAP["lnfd"],
} as Record<Code & Word, Symbol>

export {
    MANUAL_STAVE_ALIASES_MAP,
    LINE_BREAK_ALIASES_MAP,
}
