import {Word} from "@sagittal/general"
import {CASE_DESENSITIZED_CODE_MAP, Code, computeUnicodeForCode, Unicode} from "../../codes"
import {computeUnicodeWidth} from "../horizontal"

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
    [computeUnicodeForCode("nhrnblsllg" as Code & Word)]: 16,
    [computeUnicodeForCode("nhrnwtsllg" as Code & Word)]: 16,
    [computeUnicodeForCode("nhrnblsl" as Code & Word)]: 8,
    [computeUnicodeForCode("nhrnwtsl" as Code & Word)]: 8,
}

const computeLegerLineUnicode = (unicode: Unicode & Word): Unicode & Word => {
    const maybeExceptionLegerLineWidth = EXCEPTION_LEGER_LINE_WIDTHS[unicode]
    const width = maybeExceptionLegerLineWidth || computeUnicodeWidth(unicode, {spacing: false})

    if (width > 48) throw new Error(`No leger line is defined for a width > 48; this width was ${width}.`)

    return CASE_DESENSITIZED_CODE_MAP[`lgln${width}`]
}

export {
    computeLegerLineUnicode,
}
