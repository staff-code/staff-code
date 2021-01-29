import {Name, RecordKey} from "@sagittal/general"
// tslint:disable-next-line no-reaching-imports
import {computeUnicodeFromUnicodeLiteral, Octals, Unicode, UnicodeLiteral} from "../../src/translate"
import {computeGlyphUnicode} from "../glyphUnicode"

const EXCEPTION_WIDTHS: Record<RecordKey<Unicode>, Octals> = {
    [computeGlyphUnicode("staff6Lines" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff6LinesWide" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff6LinesNarrow" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff5Lines" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff5LinesWide" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff5LinesNarrow" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff4Lines" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff4LinesWide" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff4LinesNarrow" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff3Lines" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff3LinesWide" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff3LinesNarrow" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff2Lines" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff2LinesWide" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff2LinesNarrow" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff1Line" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff1LineWide" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("staff1LineNarrow" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("chantStaff" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("chantStaffWide" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("chantStaffNarrow" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("luteStaff6Lines" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("luteStaff6LinesWide" as Name<Unicode>)]: 0 as Octals,
    [computeGlyphUnicode("luteStaff6LinesNarrow" as Name<Unicode>)]: 0 as Octals,
}

const FLOORED_WIDTHS = ([
    "U+E030",
    "U+E031",
    "U+E032",
    "U+E033",
    "U+E034",
    "U+E035",
    "U+E036",
    "U+E037",
    "U+E038",
    "U+E039",
    "U+E041",
    "U+E04D",
    "U+EBA4",
    "U+EBA5",
] as UnicodeLiteral[]).map(computeUnicodeFromUnicodeLiteral)

export {
    EXCEPTION_WIDTHS,
    FLOORED_WIDTHS,
}
