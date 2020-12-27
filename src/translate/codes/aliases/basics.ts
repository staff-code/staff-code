import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../smufl"
import {Code, Symbol} from "../types"

const TIME_SIGNATURE_ALIASES_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    "tmnm": SMuFL_MAP["tmsgcmnm"],
    "tmdn": SMuFL_MAP["tmsgcmdn"],
} as Record<Code & Word, Symbol>

const NOTE_ALIASES_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    "nt1": SMuFL_MAP["ntwh"],
    "nt2": SMuFL_MAP["nthfup"],
    "nt4": SMuFL_MAP["ntqrup"],
    "nt8": SMuFL_MAP["nt8up"],
    "nt16": SMuFL_MAP["nt16up"],
    "nt32": SMuFL_MAP["nt32up"],
    "nt64": SMuFL_MAP["nt64up"],
    "nt128": SMuFL_MAP["nt128up"],
    "nt256": SMuFL_MAP["nt256up"],
    "nt512": SMuFL_MAP["nt512up"],
    "nt1024": SMuFL_MAP["nt1024up"],
    "nt2up": SMuFL_MAP["nthfup"],
    "nt2dn": SMuFL_MAP["nthfdn"],
    "nt4up": SMuFL_MAP["ntqrup"],
    "nt4dn": SMuFL_MAP["ntqrdn"],
    "nt": SMuFL_MAP["ntqrup"],
    "ntdb": SMuFL_MAP["ntdbwh"],
    "ntdn": SMuFL_MAP["ntqrdn"],
} as Record<Code & Word, Symbol>

const REST_ALIASES_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    "rsdb": SMuFL_MAP["rsdbwh"],
    "rs1": SMuFL_MAP["rswh"],
    "rs2": SMuFL_MAP["rshf"],
    "rs4": SMuFL_MAP["rsqr"],
    "rs": SMuFL_MAP["rsqr"],
} as Record<Code & Word, Symbol>

// See: https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
const BEAMS_ALIASES_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    "ntbmst": SMuFL_MAP["txblntshsm"],
    "ntbm8": SMuFL_MAP["txblntlnsm"],
    "ntbm16": SMuFL_MAP["txblntfr16shsm"],
    "bm8": SMuFL_MAP["txcn8bmshsm"],
    "bm16": SMuFL_MAP["txcn16bmshsm"],
    "txtp3": SMuFL_MAP["txtp3shsm"],
} as Record<Code & Word, Symbol>

export {
    TIME_SIGNATURE_ALIASES_MAP,
    NOTE_ALIASES_MAP,
    BEAMS_ALIASES_MAP,
    REST_ALIASES_MAP,
}
