import {Name, RecordKey, Word} from "@sagittal/general"
// tslint:disable-next-line no-reaching-imports
import {Unicode, UnicodeLiteral} from "../src/translate"

type GlyphDatum = {codepoint: UnicodeLiteral & Word}

type SmuflGlyphNames = Record<RecordKey<Name<Unicode>>, GlyphDatum>

export {
    SmuflGlyphNames,
    GlyphDatum,
}
