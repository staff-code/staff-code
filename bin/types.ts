import {Name, RecordKey, Unicode, UnicodeLiteral, Word} from "@sagittal/general"

type GlyphDatum = {codepoint: UnicodeLiteral & Word}

type GlyphData = Record<RecordKey<Name<Unicode>>, GlyphDatum>

export {
    GlyphData,
    GlyphDatum,
}
