import {RecordKey, Word} from "@sagittal/general"
import {EMPTY_UNICODE} from "../../../constants"
import {Code, Unicode} from "../../types"
import {Command} from "./types"

const SMART_STAVE_ON_COMMAND_CODE = "ston" as Command & Code & Word
const SMART_STAVE_OFF_COMMAND_CODE = "stof" as Command & Code & Word

const NOT_SMuFL_SMART_STAVE_COMMAND_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    [SMART_STAVE_ON_COMMAND_CODE]: EMPTY_UNICODE,
    [SMART_STAVE_OFF_COMMAND_CODE]: EMPTY_UNICODE,
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SMART_SPACING_COMMAND_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "sp0": EMPTY_UNICODE,
    "sp1": EMPTY_UNICODE,
    "sp2": EMPTY_UNICODE,
    "sp3": EMPTY_UNICODE,
    "sp4": EMPTY_UNICODE,
    "sp5": EMPTY_UNICODE,
    "sp6": EMPTY_UNICODE,
    "sp7": EMPTY_UNICODE,
} as Record<Code & Word, Unicode & Word>

const SMART_ADVANCE_COMMAND_CODE = ";" as Command & Code & Word
const PLACE_AGAINST_END_OF_STAFF_ADVANCE_COMMAND_CODE = "en;" as Command & Code & Word
const RIGHT_ALIGN_ADVANCE_COMMAND_CODE = "rt;" as Command & Code & Word
const CENTER_ALIGN_ADVANCE_COMMAND_CODE = "cn;" as Command & Code & Word

const NOT_SMuFL_SMART_ADVANCE_COMMAND_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    [SMART_ADVANCE_COMMAND_CODE]: EMPTY_UNICODE,
    [PLACE_AGAINST_END_OF_STAFF_ADVANCE_COMMAND_CODE]: EMPTY_UNICODE,
    [RIGHT_ALIGN_ADVANCE_COMMAND_CODE]: EMPTY_UNICODE,
    [CENTER_ALIGN_ADVANCE_COMMAND_CODE]: EMPTY_UNICODE,
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_SMART_SPACING_COMMAND_MAP,
    NOT_SMuFL_SMART_STAVE_COMMAND_MAP,
    NOT_SMuFL_SMART_ADVANCE_COMMAND_MAP,
    SMART_ADVANCE_COMMAND_CODE,
    PLACE_AGAINST_END_OF_STAFF_ADVANCE_COMMAND_CODE,
    RIGHT_ALIGN_ADVANCE_COMMAND_CODE,
    CENTER_ALIGN_ADVANCE_COMMAND_CODE,
    SMART_STAVE_ON_COMMAND_CODE,
    SMART_STAVE_OFF_COMMAND_CODE,
}
