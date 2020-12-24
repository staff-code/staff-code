import {SMuFL_MAP} from "../../smufl"
import {Code, Symbol} from "../../types"

const CONVENTIONAL_ACCIDENTAL_ALIASES_MAP: Record<Code, Symbol> = {
    [Code[`h`]]: SMuFL_MAP[Code[`acnt`]],
    [Code[`n`]]: SMuFL_MAP[Code[`acnt`]],
    [Code[`#`]]: SMuFL_MAP[Code[`acsh`]],
    [Code[`b`]]: SMuFL_MAP[Code[`acfl`]],
    [Code[`x`]]: SMuFL_MAP[Code[`aclgdbsh`]],
    [Code[`bb`]]: SMuFL_MAP[Code[`acdbfl`]],
} as Record<Code, Symbol>

export {
    CONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
}
