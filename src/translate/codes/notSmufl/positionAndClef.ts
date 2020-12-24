import {Code, Symbol} from "../types"

const NOT_SMuFL_ZERO_POSITION_MAP: Record<Code, Symbol> = {
    /*U+E410*/[Code[`stpsrs0`]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

// TODO: FEATURE IMPROVE, READY TO GO: IMPLEMENT SUPPLEMENTAL POSITIONS
const NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP: Record<Code, Symbol>  = {
    /*U+E411*/[Code[`stpsrs9`]]: {unicode: ""},
    /*U+E412*/[Code[`stpsrs10`]]: {unicode: ""},
    /*U+E413*/[Code[`stpsrs11`]]: {unicode: ""},
    /*U+E414*/[Code[`stpsrs12`]]: {unicode: ""},
    /*U+E415*/[Code[`stpsrs13`]]: {unicode: ""},
    /*U+E416*/[Code[`stpsrs14`]]: {unicode: ""},
    /*U+E417*/[Code[`stpsrs15`]]: {unicode: ""},
    /*U+E418*/[Code[`stpslw9`]]: {unicode: ""},
    /*U+E419*/[Code[`stpslw10`]]: {unicode: ""},
    /*U+E41A*/[Code[`stpslw11`]]: {unicode: ""},
    /*U+E41B*/[Code[`stpslw12`]]: {unicode: ""},
    /*U+E41C*/[Code[`stpslw13`]]: {unicode: ""},
    /*U+E41D*/[Code[`stpslw14`]]: {unicode: ""},
    /*U+E41E*/[Code[`stpslw15`]]: {unicode: ""},
} as Record<Code, Symbol>

export {
    NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
}
