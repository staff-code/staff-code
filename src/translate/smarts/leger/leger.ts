import {Word} from "@sagittal/general"
import {Code, computeUnicodeForCode, Unicode} from "../../codes"
import {computeUnicodeWidth} from "../advanceAndStave"
import {
    MEDIUM_LEGER_LINE_UNICODE,
    MEDIUM_LEGER_LINE_WIDTH,
    NARROW_LEGER_LINE_UNICODE,
    NARROW_LEGER_LINE_WIDTH,
    WIDE_LEGER_LINE_UNICODE,
} from "./constants"

const EXCEPTION_LEGER_LINE_WIDTHS = {
    [computeUnicodeForCode("nt8up" as Code & Word)]: 11,
    [computeUnicodeForCode("nt16up" as Code & Word)]: 11,
    [computeUnicodeForCode("nt32up" as Code & Word)]: 11,
    [computeUnicodeForCode("nt64up" as Code & Word)]: 11,
    [computeUnicodeForCode("nt128up" as Code & Word)]: 11,
    [computeUnicodeForCode("nt256up" as Code & Word)]: 11,
    [computeUnicodeForCode("nt512up" as Code & Word)]: 11,
    [computeUnicodeForCode("nt1024up" as Code & Word)]: 11,
    // See: https://w3c.github.io/smufl/gitbook/tables/round-and-square-noteheads.html
    [computeUnicodeForCode("noteheadRoundBlackSlashedLarge" as Code & Word)]: 16,
    [computeUnicodeForCode("noteheadRoundWhiteSlashedLarge" as Code & Word)]: 16,
    [computeUnicodeForCode("noteheadRoundBlackSlashed" as Code & Word)]: 8,
    [computeUnicodeForCode("noteheadRoundWhiteSlashed" as Code & Word)]: 8,
}

const computeLegerLineUnicode = (unicode: Unicode & Word): Unicode & Word => {
    const maybeExceptionLegerLineWidth = EXCEPTION_LEGER_LINE_WIDTHS[unicode]
    const width = maybeExceptionLegerLineWidth || computeUnicodeWidth(unicode, {spacing: false})

    if (width > MEDIUM_LEGER_LINE_WIDTH) return WIDE_LEGER_LINE_UNICODE
    if (width > NARROW_LEGER_LINE_WIDTH) return MEDIUM_LEGER_LINE_UNICODE
    return NARROW_LEGER_LINE_UNICODE
}

export {
    computeLegerLineUnicode,
}
