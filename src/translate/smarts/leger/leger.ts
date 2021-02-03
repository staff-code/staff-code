import {RecordKey, Word} from "@sagittal/general"
import {CASE_DESENSITIZED_CODE_MAP, Code, computeUnicodeForCode, Octals, Unicode} from "../../codes"
import {computeUnicodeWidth} from "../horizontal"
import {
    MEDIUM_LEGER_LINE_UNICODE,
    MEDIUM_LEGER_LINE_WIDTH,
    NARROW_LEGER_LINE_UNICODE,
    NARROW_LEGER_LINE_WIDTH,
    WIDE_LEGER_LINE_UNICODE,
} from "./constants"

const EXCEPTION_LEGER_LINE_WIDTHS: Record<RecordKey<Unicode & Word>, Octals> = {
    [computeUnicodeForCode("nt8up" as Code & Word)]: 11 as Octals,
    [computeUnicodeForCode("nt16up" as Code & Word)]: 11 as Octals,
    [computeUnicodeForCode("nt32up" as Code & Word)]: 11 as Octals,
    [computeUnicodeForCode("nt64up" as Code & Word)]: 11 as Octals,
    [computeUnicodeForCode("nt128up" as Code & Word)]: 11 as Octals,
    [computeUnicodeForCode("nt256up" as Code & Word)]: 11 as Octals,
    [computeUnicodeForCode("nt512up" as Code & Word)]: 11 as Octals,
    [computeUnicodeForCode("nt1024up" as Code & Word)]: 11 as Octals,
    // See: https://w3c.github.io/smufl/gitbook/tables/round-and-square-noteheads.html
    [computeUnicodeForCode("nhrnblsllg" as Code & Word)]: 16 as Octals,
    [computeUnicodeForCode("nhrnwtsllg" as Code & Word)]: 16 as Octals,
    [computeUnicodeForCode("nhrnblsl" as Code & Word)]: 8 as Octals,
    [computeUnicodeForCode("nhrnwtsl" as Code & Word)]: 8 as Octals,
}

const computeSmuflLegerLineUnicode = (width: Octals): Unicode & Word => {
    if (width > MEDIUM_LEGER_LINE_WIDTH) return WIDE_LEGER_LINE_UNICODE
    if (width > NARROW_LEGER_LINE_WIDTH) return MEDIUM_LEGER_LINE_UNICODE
    return NARROW_LEGER_LINE_UNICODE
}

const computeLegerLineSupplementUnicode = (width: Octals): Unicode & Word => {
    if (width > 48) throw new Error(`No leger line is defined for a width > 48; this width was ${width}.`)

    return CASE_DESENSITIZED_CODE_MAP[`lgln${width}`]
}

const computeLegerLineUnicode = (unicode: Unicode & Word): Unicode & Word => {
    const maybeExceptionLegerLineWidth = EXCEPTION_LEGER_LINE_WIDTHS[unicode]
    const width = maybeExceptionLegerLineWidth || computeUnicodeWidth(unicode, {spacing: false})

    return computeSmuflLegerLineUnicode(width)
}

export {
    computeLegerLineUnicode,
}
