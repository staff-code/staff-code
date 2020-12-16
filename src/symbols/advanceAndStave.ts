import {Code, Symbol} from "./types"

const MANUAL_ADVANCE_MAP: Record<Code, Symbol> = {
    /*U+200A              */[Code["ad1"]]: {unicode: " ", width: 1, description: "HAIR SPACE"},
    /*U+2009              */[Code["ad2"]]: {unicode: " ", width: 2, description: "THIN SPACE"},
    /*U+2009 U+200A       */[Code["ad3"]]: {unicode: "  ", width: 3},
    /*U+2005              */[Code["ad4"]]: {unicode: " ", width: 4, description: "FOUR-PER-EM SPACE"},
    /*U+2005 U+200A       */[Code["ad5"]]: {unicode: "  ", width: 5},
    /*U+2004              */[Code["ad6"]]: {unicode: " ", width: 6, description: "THREE-PER-EM SPACE"},
    /*U+2004 U+200A       */[Code["ad7"]]: {unicode: "  ", width: 7},
    /*U+2002              */[Code["ad8"]]: {unicode: " ", width: 8, description: "EN SPACE"},
    /*U+2002 U+200A       */[Code["ad9"]]: {unicode: "  ", width: 9},
    /*U+2008              */[Code["ad10"]]: {unicode: " ", width: 10, description: "PUNCTUATION SPACE"},
    /*U+2008 U+200A       */[Code["ad11"]]: {unicode: "  ", width: 11},
    /*U+3000              */[Code["ad12"]]: {unicode: "　", width: 12, description: "IDEOGRAPHIC SPACE"},
    /*U+3000 U+200A       */[Code["ad13"]]: {unicode: "　 ", width: 13},
    /*U+3000 U+2009       */[Code["ad14"]]: {unicode: "　 ", width: 14}, // *
    /*U+3000 U+2009 U+200A*/[Code["ad15"]]: {unicode: "　  ", width: 15}, // *
    /*U+2003              */[Code["ad16"]]: {unicode: " ", width: 16, description: "EM SPACE"},
} as Record<Code, Symbol>

const SMART_ADVANCE_MAP: Record<Code, Symbol> = {
    /*U+2000*/[Code[";"]]: {unicode: " ", width: 0, description: "EN QUAD"},
} as Record<Code, Symbol>

// * U+2001 EM QUAD, our desired ad14, is not in the font yet. Once it is, these should be replaced.

const MANUAL_STAVE_MAP: Record<Code, Symbol> = {
    /*U+E020*/[Code["st8"]]: {unicode: "", width: 0},
    /*U+E014*/[Code["st16"]]: {unicode: "", width: 0},
    /*U+E01A*/[Code["st24"]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

const SMART_STAVE_MAP: Record<Code, Symbol> = {
    /*U+E02E*/[Code["st"]]: {unicode: "", width: 0},
    /*U+E02F*/[Code["stof"]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

export {
    MANUAL_ADVANCE_MAP,
    SMART_ADVANCE_MAP,
    MANUAL_STAVE_MAP,
    SMART_STAVE_MAP,
}
