import {SMuFL_MAP} from "../../smufl"
import {Code, Symbol} from "../../types"

// See: https://w3c.github.io/smufl/gitbook/tables/stein-zimmermann-accidentals-24-edo.html
// And: https://w3c.github.io/smufl/gitbook/tables/other-accidentals.html

const UNCONVENTIONAL_ACCIDENTAL_ALIASES_MAP: Record<Code, Symbol> = {
    [Code[`>`]]: SMuFL_MAP[Code[`acqrtnshst`]],
    [Code[`<`]]: SMuFL_MAP[Code[`acnrrvfl`]],
    [Code[`>#`]]: SMuFL_MAP[Code[`acthqrtnshst`]],
    [Code[`<b`]]: SMuFL_MAP[Code[`acnrrvflanfl`]],
    [Code[`+`]]: SMuFL_MAP[Code[`acwlpl`]],
    [Code[`-`]]: SMuFL_MAP[Code[`acwlmn`]],
} as Record<Code, Symbol>

export {
    UNCONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
}
