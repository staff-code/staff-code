import {Name, RecordKey, Word} from "@sagittal/general"
import {Unicode, UnicodeLiteral} from "../src"

type GlyphDatum = {codepoint: UnicodeLiteral & Word}

type SmuflGlyphNames = Record<RecordKey<Name<Unicode>>, GlyphDatum>

export {
    SmuflGlyphNames,
    GlyphDatum,
}
