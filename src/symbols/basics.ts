import {Code, Symbol} from "./types"

const LEGER_LINE_MAP: Record<Code, Symbol> = {
    /*U+E022*/[Code["lgln"]]: {unicode: "", width: 13, description: "leger line"},
} as Record<Code, Symbol>

const BAR_MAP: Record<Code, Symbol> = {
    /*U+E030*/[Code["brln"]]: {unicode: "", width: 4, description: "bar line (single)"},
    /*U+E031*/[Code["brlndb"]]: {unicode: "", width: 7, description: "bar line double"},
} as Record<Code, Symbol>

const TIME_SIGNATURE_MAP: Record<Code, Symbol> = {
    /*U+E080*/[Code["tm0"]]: {unicode: "", width: 17, description: "time signature digit 0"},
    /*U+E081*/[Code["tm1"]]: {unicode: "", width: 17, description: "time signature digit 1"},
    /*U+E082*/[Code["tm2"]]: {unicode: "", width: 17, description: "time signature digit 2"},
    /*U+E083*/[Code["tm3"]]: {unicode: "", width: 17, description: "time signature digit 3"},
    /*U+E084*/[Code["tm4"]]: {unicode: "", width: 17, description: "time signature digit 4"},
    /*U+E085*/[Code["tm5"]]: {unicode: "", width: 17, description: "time signature digit 5"},
    /*U+E086*/[Code["tm6"]]: {unicode: "", width: 17, description: "time signature digit 6"},
    /*U+E087*/[Code["tm7"]]: {unicode: "", width: 17, description: "time signature digit 7"},
    /*U+E088*/[Code["tm8"]]: {unicode: "", width: 17, description: "time signature digit 8"},
    /*U+E089*/[Code["tm9"]]: {unicode: "", width: 17, description: "time signature digit 9"},
    /*U+E08A*/[Code["tmcm"]]: {unicode: "", width: 17, description: "common time"},
    /*U+E09E*/[Code["tmnm"]]: {unicode: "", width: 0, description: "time signature combining numerator position"},
    /*U+E09F*/[Code["tmdn"]]: {unicode: "", width: 0, description: "time signature combining denominator position"},
} as Record<Code, Symbol>

const NOTE_MAP: Record<Code, Symbol> = {
    /*U+E1D0*/[Code["ntdb"]]: {unicode: "", width: 23, description: "double whole note"},
    /*U+E1D2*/[Code["nt1"]]: {unicode: "", width: 13, description: "whole note"},
    /*U+E1D3*/[Code["nt2"]]: {unicode: "", width: 13, description: "half note stem up"},
    /*U+E1D4*/[Code["nt2dn"]]: {unicode: "", width: 13, description: "half note stem down"},
    /*U+E1D5*/[Code["nt4"]]: {unicode: "", width: 13, description: "quarter note stem up"},
    /*U+E1D6*/[Code["nt4dn"]]: {unicode: "", width: 13, description: "quarter note stem down"},
    /*U+E1D7*/[Code["nt8"]]: {unicode: "", width: 21, description: "quarter note stem up"},
    /*U+E1D8*/[Code["nt8dn"]]: {unicode: "", width: 13, description: "quarter note stem down"},
    /*U+E1D9*/[Code["nt16"]]: {unicode: "", width: 21, description: "sixteenth note stem up"},
    /*U+E1DA*/[Code["nt16dn"]]: {unicode: "", width: 13, description: "sixteenth note stem down"},
} as Record<Code, Symbol>
NOTE_MAP[Code["nt"]] = NOTE_MAP[Code["nt4"]]

const REST_MAP: Record<Code, Symbol> = {
    /*U+E4E2*/[Code["rsdb"]]: {unicode: "", description: "double whole rest"},
    /*U+E4E3*/[Code["rs1"]]: {unicode: "", description: "whole rest"},
    /*U+E4E4*/[Code["rs2"]]: {unicode: "", description: "half rest"},
    /*U+E4E5*/[Code["rs4"]]: {unicode: "", description: "quarter rest"},
    /*U+E4E6*/[Code["rs8"]]: {unicode: "", description: "eighth rest"},
    /*U+E4E7*/[Code["rs16"]]: {unicode: "", description: "sixteenth rest"},
} as Record<Code, Symbol>
REST_MAP[Code["rs"]] = REST_MAP[Code["rs4"]]

const DOT_MAP: Record<Code, Symbol> = {
    /*U+E1E7*/[Code["dt"]]: {unicode: "", width: 6, description: "augmentation dot"},
} as Record<Code, Symbol>
DOT_MAP[Code["agdt"]] = DOT_MAP[Code["dt"]]

// See: https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
const BEAMS_MAP: Record<Code, Symbol> = {
    /*U+E1F0*/[Code["ntbmst"]]: {unicode: "", description: "note for start of any beam (short stem)"},
    /*U+E1F2*/[Code["ntbm8"]]: {unicode: "", description: "note for end of eighth beam, and possible continuation of any beam (short stem)"},
    /*U+E1F4*/[Code["ntbm16"]]: {unicode: "", description: "note for end of 16th beam, and possible continuation of any beam (short stem)"},
    /*U+E1F7*/[Code["bm8"]]: {unicode: "", description: "eighth beam continuation (for short stems)"},
    /*U+E1F9*/[Code["bm16"]]: {unicode: "", description: "sixteenth beam continuation (for short stems)"},
    /*U+E1FF*/[Code["tp3"]]: {unicode: "", description: "tuplet digit 3 (for short stems)"},
} as Record<Code, Symbol>

const BREAKS_MAP: Record<Code, Symbol> = {
    /*U+000D*/[Code["br"]]: {unicode: "\n", description: "stave break"},
} as Record<Code, Symbol>

export {
    LEGER_LINE_MAP,
    BAR_MAP,
    TIME_SIGNATURE_MAP,
    NOTE_MAP,
    REST_MAP,
    DOT_MAP,
    BEAMS_MAP,
    BREAKS_MAP,
}
