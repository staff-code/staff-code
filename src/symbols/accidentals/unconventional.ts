import {Code, Symbol} from "../types"

// See: https://w3c.github.io/smufl/gitbook/tables/stein-zimmermann-accidentals-24-edo.html
// And: https://w3c.github.io/smufl/gitbook/tables/other-accidentals.html

const UNCONVENTIONAL_ACCIDENTAL_MAP: Record<Code, Symbol> = {
    /*U+E282*/[Code[">"]]: {unicode: "", description: "Half sharp (quarter-tone sharp) (Stein)},"},
    /*U+E284*/[Code["<"]]: {unicode: "", description: "Narrow reversed flat (quarter-tone flat)},"},
    /*U+E283*/[Code[">#"]]: {unicode: "", description: "One and a half sharps (three-quarter-tones sharp) (Stein)},"},
    /*U+E285*/[Code["<b"]]: {unicode: "", description: "Narrow reversed flat and flat (three-quarter-tones flat)},"},
    /*U+E47B*/[Code["+"]]: {unicode: "", description: "Wilson plus (5 comma up)},"},
    /*U+E47C*/[Code["-"]]: {unicode: "", description: "Wilson minus (5 comma down)},"},
} as Record<Code, Symbol>

export {
    UNCONVENTIONAL_ACCIDENTAL_MAP,
}
