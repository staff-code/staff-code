import {SMuFL_MAP} from "../smufl"
import {Code, Symbol} from "../types"

const TIME_SIGNATURE_ALIASES_MAP: Record<Code, Symbol> = {
    [Code[`tmnm`]]: SMuFL_MAP[Code[`tmsgcmnm`]],
    [Code[`tmdn`]]: SMuFL_MAP[Code[`tmsgcmdn`]],
} as Record<Code, Symbol>

const NOTE_ALIASES_MAP: Record<Code, Symbol> = {
    [Code[`nt1`]]: SMuFL_MAP[Code[`ntwh`]],
    [Code[`nt2`]]: SMuFL_MAP[Code[`nthfup`]],
    [Code[`nt4`]]: SMuFL_MAP[Code[`ntqrup`]],
    [Code[`nt8`]]: SMuFL_MAP[Code[`nt8up`]],
    [Code[`nt16`]]: SMuFL_MAP[Code[`nt16up`]],
    [Code[`nt32`]]: SMuFL_MAP[Code[`nt32up`]],
    [Code[`nt64`]]: SMuFL_MAP[Code[`nt64up`]],
    [Code[`nt128`]]: SMuFL_MAP[Code[`nt128up`]],
    [Code[`nt256`]]: SMuFL_MAP[Code[`nt256up`]],
    [Code[`nt512`]]: SMuFL_MAP[Code[`nt512up`]],
    [Code[`nt1024`]]: SMuFL_MAP[Code[`nt1024up`]],
    [Code[`nt2up`]]: SMuFL_MAP[Code[`nthfup`]],
    [Code[`nt2dn`]]: SMuFL_MAP[Code[`nthfdn`]],
    [Code[`nt4up`]]: SMuFL_MAP[Code[`ntqrup`]],
    [Code[`nt4dn`]]: SMuFL_MAP[Code[`ntqrdn`]],
    [Code[`nt`]]: SMuFL_MAP[Code[`ntqrup`]],
} as Record<Code, Symbol>

// See: https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
const BEAMS_ALIASES_MAP: Record<Code, Symbol> = {
    [Code[`ntbmst`]]: SMuFL_MAP[Code[`txblntshsm`]],
    [Code[`ntbm8`]]: SMuFL_MAP[Code[`txblntlnsm`]],
    [Code[`ntbm16`]]: SMuFL_MAP[Code[`txblntfr16shsm`]],
    [Code[`bm8`]]: SMuFL_MAP[Code[`txcn8bmshsm`]],
    [Code[`bm16`]]: SMuFL_MAP[Code[`txcn16bmshsm`]],
    [Code[`txtp3`]]: SMuFL_MAP[Code[`txtp3shsm`]],
} as Record<Code, Symbol>

export {
    TIME_SIGNATURE_ALIASES_MAP,
    NOTE_ALIASES_MAP,
    BEAMS_ALIASES_MAP,
}
