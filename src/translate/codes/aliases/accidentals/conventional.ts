import {RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../../bin"
import {SMuFL_MAP} from "../../smufl"

const CONVENTIONAL_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "n": SMuFL_MAP["acnt"],
    "h": SMuFL_MAP["acnt"],
    "#": SMuFL_MAP["acsh"],
    "b": SMuFL_MAP["acfl"],
    "X": SMuFL_MAP["aclgdbsh"],
    "bb": SMuFL_MAP["acdbfl"],
    "sh": SMuFL_MAP["acsh"],
    "fl": SMuFL_MAP["acfl"],
    "dbsh": SMuFL_MAP["aclgdbsh"],
    "dbfl": SMuFL_MAP["acdbfl"],
} as Record<Code & Word, Unicode & Word>

export {
    CONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
}
