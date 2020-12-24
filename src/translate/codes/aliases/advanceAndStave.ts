import {SMuFL_MAP} from "../smufl"
import {Code, Symbol} from "../types"

const MANUAL_STAVE_ALIASES_MAP: Record<Code, Symbol> = {
    [Code[`st8`]]: SMuFL_MAP[Code[`st5lnnr`]],
    [Code[`st16`]]: SMuFL_MAP[Code[`st5ln`]],
    [Code[`st24`]]: SMuFL_MAP[Code[`st5lnwd`]],
} as Record<Code, Symbol>

const LINE_BREAK_ALIASES_MAP: Record<Code, Symbol> = {
    [Code[`br;`]]: SMuFL_MAP[Code[`lnfd`]],
} as Record<Code, Symbol>

export {
    MANUAL_STAVE_ALIASES_MAP,
    LINE_BREAK_ALIASES_MAP,
}
