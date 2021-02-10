import {RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../bin"
import {SMuFL_MAP} from "../smufl"

const TIME_SIGNATURE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "tmnm": SMuFL_MAP["tmsgcmnm"],
    "tmdn": SMuFL_MAP["tmsgcmdn"],
} as Record<Code & Word, Unicode & Word>

const REST_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "rsdb": SMuFL_MAP["rsdbwh"],
    "rs1": SMuFL_MAP["rswh"],
    "rs2": SMuFL_MAP["rshf"],
    "rs4": SMuFL_MAP["rsqr"],
    "rs": SMuFL_MAP["rsqr"],
} as Record<Code & Word, Unicode & Word>

// See: https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
const BEAMS_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "ntbmst": SMuFL_MAP["txblntshsm"],
    "ntbmstln": SMuFL_MAP["txblntlnsm"],
    "ntbm8": SMuFL_MAP["txblntfr8shsm"],
    "ntbm8ln": SMuFL_MAP["txblntfr8lnsm"],
    "ntbm16": SMuFL_MAP["txblntfr16shsm"],
    "ntbm16ln": SMuFL_MAP["txblntfr16lnsm"],
    "ntbm32ln": SMuFL_MAP["txblntfr32lnsm"],
    "bm8": SMuFL_MAP["txcn8bmshsm"],
    "bm8ln": SMuFL_MAP["txcn8bmlnsm"],
    "bm16": SMuFL_MAP["txcn16bmshsm"],
    "bm16ln": SMuFL_MAP["txcn16bmlnsm"],
    "bm32ln": SMuFL_MAP["txcn32bmlnsm"],
    "txtp3": SMuFL_MAP["txtp3shsm"],
    "txtp3ln": SMuFL_MAP["txtp3lnsm"],
} as Record<Code & Word, Unicode & Word>

const BARLINE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "bl": SMuFL_MAP["blsn"],
} as Record<Code & Word, Unicode & Word>

export {
    TIME_SIGNATURE_ALIASES_MAP,
    BEAMS_ALIASES_MAP,
    REST_ALIASES_MAP,
    BARLINE_ALIASES_MAP,
}
