import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Code, Symbol} from "../../types"

const CONVENTIONAL_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    "h": SMuFL_MAP["acnt"],
    "n": SMuFL_MAP["acnt"],
    "#": SMuFL_MAP["acsh"],
    "b": SMuFL_MAP["acfl"],
    "x": SMuFL_MAP["aclgdbsh"],
    "bb": SMuFL_MAP["acdbfl"],
} as Record<Code & Word, Symbol>

export {
    CONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
}
