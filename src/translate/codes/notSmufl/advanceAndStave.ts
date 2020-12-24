import {Code, Symbol} from "../types"

const NOT_SMuFL_SMART_STAVE_MAP: Record<Code, Symbol> = {
    /*U+E40C*/[Code[`ston`]]: {unicode: "", width: 0},
    /*U+E40D*/[Code[`stof`]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

const NOT_SMuFL_SMART_SPACING_MAP: Record<Code, Symbol> = {
    /*U+E388*/[Code[`sp0`]]: {unicode: "", width: 0},
    /*U+E389*/[Code[`sp1`]]: {unicode: "", width: 1},
    /*U+E38A*/[Code[`sp2`]]: {unicode: "", width: 2},
    /*U+E38B*/[Code[`sp3`]]: {unicode: "", width: 3},
    /*U+E38C*/[Code[`sp4`]]: {unicode: "", width: 4},
    /*U+E38D*/[Code[`sp5`]]: {unicode: "", width: 5},
    /*U+E38E*/[Code[`sp6`]]: {unicode: "", width: 6},
    /*U+E38F*/[Code[`sp7`]]: {unicode: "", width: 7},
} as Record<Code, Symbol>

const NOT_SMuFL_MANUAL_ADVANCE_MAP: Record<Code, Symbol> = {
    /*U+200A              */[Code[`1;`]]: {unicode: " ", width: 1},
    /*U+2009              */[Code[`2;`]]: {unicode: " ", width: 2},
    /*U+2009 U+200A       */[Code[`3;`]]: {unicode: "  ", width: 3},
    /*U+2005              */[Code[`4;`]]: {unicode: " ", width: 4},
    /*U+2005 U+200A       */[Code[`5;`]]: {unicode: "  ", width: 5},
    /*U+2004              */[Code[`6;`]]: {unicode: " ", width: 6},
    /*U+2004 U+200A       */[Code[`7;`]]: {unicode: "  ", width: 7},
    /*U+2002              */[Code[`8;`]]: {unicode: " ", width: 8},
    /*U+2002 U+200A       */[Code[`9;`]]: {unicode: "  ", width: 9},
    /*U+2008              */[Code[`10;`]]: {unicode: " ", width: 10},
    /*U+2008 U+200A       */[Code[`11;`]]: {unicode: "  ", width: 11},
    /*U+3000              */[Code[`12;`]]: {unicode: "　", width: 12},
    /*U+3000 U+200A       */[Code[`13;`]]: {unicode: "　 ", width: 13},
    /*U+3000 U+2009       */[Code[`14;`]]: {unicode: "　 ", width: 14}, // *
    /*U+3000 U+2009 U+200A*/[Code[`15;`]]: {unicode: "　  ", width: 15}, // *
    /*U+2003              */[Code[`16;`]]: {unicode: " ", width: 16},
    /*U+2003 U+200A       */[Code[`17;`]]: {unicode: "  ", width: 17},
    /*U+2003 U+2009       */[Code[`18;`]]: {unicode: "  ", width: 18},
    /*U+2003 U+2009 U+200A*/[Code[`19;`]]: {unicode: "   ", width: 19},
    /*U+2003 U+2005       */[Code[`20;`]]: {unicode: "  ", width: 20},
    /*U+2003 U+2005 U+200A*/[Code[`21;`]]: {unicode: "   ", width: 21},
    /*U+2003 U+2004       */[Code[`22;`]]: {unicode: "  ", width: 22},
    /*U+2003 U+2004 U+200A*/[Code[`23;`]]: {unicode: "   ", width: 23},
    /*U+2003 U+2002       */[Code[`24;`]]: {unicode: "  ", width: 24},
} as Record<Code, Symbol>

// * U+2001 EM QUAD, our desired "14;", is not in the font yet. Once it is, these should be replaced.

const NOT_SMuFL_SMART_ADVANCE_MAP: Record<Code, Symbol> = {
    /*U+2000*/[Code[`;`]]: {unicode: " ", width: 0},
} as Record<Code, Symbol>

export {
    NOT_SMuFL_SMART_STAVE_MAP,
    NOT_SMuFL_SMART_SPACING_MAP,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    NOT_SMuFL_SMART_ADVANCE_MAP,
}
