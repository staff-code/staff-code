import {Name, RecordKey, Unicode, UnicodeLiteral, Word} from "@sagittal/general"

type GlyphDatum = {codepoint: UnicodeLiteral & Word}

type SmuflGlyphNames = Record<RecordKey<Name<Unicode>>, GlyphDatum>

export {
    SmuflGlyphNames,
    GlyphDatum,
}
