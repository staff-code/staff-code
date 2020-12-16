import {Code, Symbol, Unicode} from "../types"
import {CONVENTIONAL_ACCIDENTAL_MAP} from "./conventional"
import {UNCONVENTIONAL_ACCIDENTAL_MAP} from "./unconventional"

// See: https://w3c.github.io/smufl/gitbook/tables/extended-helmholtz-ellis-accidentals-just-intonation.html
// All EHEJIPN staffCodes start with a dot (full-stop). Unicodes are successive below.

const EHEJIPN_ACCIDENTAL_MAP: Record<Code, Symbol> = {
    /*U+E2C0*/[Code[".bbv"]]: {unicode: "" as Unicode},
    /*U+E2C1*/[Code[".bv"]]: {unicode: "" as Unicode},
    /*U+E2C2*/[Code[".nv"]]: {unicode: "" as Unicode},
    /*U+E2C3*/[Code[".#v"]]: {unicode: "" as Unicode},
    /*U+E2C4*/[Code[".xv"]]: {unicode: "" as Unicode},
    /*U+E2C5*/[Code[".bb^"]]: {unicode: "" as Unicode},
    /*U+E2C6*/[Code[".b^"]]: {unicode: "" as Unicode},
    /*U+E2C7*/[Code[".n^"]]: {unicode: "" as Unicode},
    /*U+E2C8*/[Code[".#^"]]: {unicode: "" as Unicode},
    /*U+E2C9*/[Code[".x^"]]: {unicode: "" as Unicode},
    /*U+E2CA*/[Code[".bbvv"]]: {unicode: "" as Unicode},
    /*U+E2CB*/[Code[".bvv"]]: {unicode: "" as Unicode},
    /*U+E2CC*/[Code[".nvv"]]: {unicode: "" as Unicode},
    /*U+E2CD*/[Code[".#vv"]]: {unicode: "" as Unicode},
    /*U+E2CE*/[Code[".xvv"]]: {unicode: "" as Unicode},
    /*U+E2CF*/[Code[".bb^^"]]: {unicode: "" as Unicode},
    /*U+E2D0*/[Code[".b^^"]]: {unicode: "" as Unicode},
    /*U+E2D1*/[Code[".n^^"]]: {unicode: "" as Unicode},
    /*U+E2D2*/[Code[".#^^"]]: {unicode: "" as Unicode},
    /*U+E2D3*/[Code[".x^^"]]: {unicode: "" as Unicode},
    /*U+E2D4*/[Code[".bbvvv"]]: {unicode: "" as Unicode},
    /*U+E2D5*/[Code[".bvvv"]]: {unicode: "" as Unicode},
    /*U+E2D6*/[Code[".nvvv"]]: {unicode: "" as Unicode},
    /*U+E2D7*/[Code[".#vvv"]]: {unicode: "" as Unicode},
    /*U+E2D8*/[Code[".xvvv"]]: {unicode: "" as Unicode},
    /*U+E2D9*/[Code[".bb^^^"]]: {unicode: "" as Unicode},
    /*U+E2DA*/[Code[".b^^^"]]: {unicode: "" as Unicode},
    /*U+E2DB*/[Code[".n^^^"]]: {unicode: "" as Unicode},
    /*U+E2DC*/[Code[".#^^^"]]: {unicode: "" as Unicode},
    /*U+E2DD*/[Code[".x^^^"]]: {unicode: "" as Unicode},
    /*U+E2DE*/[Code[".L"]]: {unicode: "" as Unicode},
    /*U+E2DF*/[Code[".P"]]: {unicode: "" as Unicode},
    /*U+E2E0*/[Code[".LL"]]: {unicode: "" as Unicode},
    /*U+E2E1*/[Code[".PP"]]: {unicode: "" as Unicode},
    /*U+E2E2*/[Code[".<"]]: {unicode: "" as Unicode},
    /*U+E2E3*/[Code[".>"]]: {unicode: "" as Unicode},
    /*U+E2E4*/[Code[".<|"]]: {unicode: "" as Unicode},
    /*U+E2E5*/[Code[".>|"]]: {unicode: "" as Unicode},
    /*U+E2E6*/[Code[".\\\\"]]: {unicode: "" as Unicode},
    /*U+E2E7*/[Code[".//"]]: {unicode: "" as Unicode},
    /*U+E2E8*/[Code[".\\"]]: {unicode: "" as Unicode},
    /*U+E2E9*/[Code["./"]]: {unicode: "" as Unicode},
    /*U+E2EA*/[Code[".^"]]: {unicode: "" as Unicode},
    /*U+E2EB*/[Code[".v"]]: {unicode: "" as Unicode},
    /*U+E2EE*/[Code[".{"]]: {unicode: "" as Unicode},
    /*U+E2EF*/[Code[".}"]]: {unicode: "" as Unicode},
    /*U+E2F0*/[Code[".bbt"]]: {unicode: "" as Unicode},
    /*U+E2F1*/[Code[".bt"]]: {unicode: "" as Unicode},
    /*U+E2F2*/[Code[".nt"]]: {unicode: "" as Unicode},
    /*U+E2F3*/[Code[".#t"]]: {unicode: "" as Unicode},
    /*U+E2F4*/[Code[".xt"]]: {unicode: "" as Unicode},
    /*U+E2F5*/[Code[".<t"]]: {unicode: "" as Unicode},
    /*U+E2F6*/[Code[".>t"]]: {unicode: "" as Unicode},
    /*U+E2F7*/[Code[".\\\\\\"]]: {unicode: "" as Unicode},
    /*U+E2F8*/[Code[".///"]]: {unicode: "" as Unicode},
    /*U+E2F9*/[Code[".~"]]: {unicode: "" as Unicode},
    /*U+E2FA*/[Code[".~~"]]: {unicode: "" as Unicode},
    /*U+E2FB*/[Code[".="]]: {unicode: "" as Unicode},

    // For convenience of EHEJIPN users, conventional accidentals with dots at the start of their codes
    // See: https://w3c.github.io/smufl/gitbook/tables/standard-accidentals-12-edo.html
    [Code[".bb"]]: CONVENTIONAL_ACCIDENTAL_MAP[Code["bb"]],
    [Code[".b"]]: CONVENTIONAL_ACCIDENTAL_MAP[Code["b"]],
    [Code[".n"]]: CONVENTIONAL_ACCIDENTAL_MAP[Code["n"]],
    [Code[".#"]]: CONVENTIONAL_ACCIDENTAL_MAP[Code["#"]],
    /*U+E263*/[Code[".x"]]: {unicode: "", width: 10, description: "Double sharp"}, // *
    /*U+E281*/[Code[".<b"]]: {unicode: "", description: "Reversed flat and flat (three-quarter-tones flat) (Zimmermann)"},
    [Code[".>#"]]: UNCONVENTIONAL_ACCIDENTAL_MAP[Code[">#"]],
} as Record<Code, Symbol>

// * Not the same as "x" or "X", which is the (Sagittal-compatible) large double-sharp.

export {
    EHEJIPN_ACCIDENTAL_MAP,
}
