import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Code, Unicode} from "../../types"

const CONVENTIONAL_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "h": SMuFL_MAP["acnt"],
    "n": SMuFL_MAP["acnt"],
    "#": SMuFL_MAP["acsh"],
    "b": SMuFL_MAP["acfl"], // todo: add nt, sh, fl, dbsh, and dbfl
    "x": SMuFL_MAP["aclgdbsh"],
    "bb": SMuFL_MAP["acdbfl"],
} as Record<Code & Word, Unicode & Word>

export {
    CONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
}
