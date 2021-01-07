import {Decimal, floor, isUndefined, Name, RecordKey, round, Word} from "@sagittal/general"
import {computeUnicodeFromUnicodeLiteral, computeUnicodeLiteral, Octals, Unicode, UnicodeLiteral} from "../../src"
import {EXCEPTION_WIDTHS} from "./exceptions"
import {boundingBoxEntries, smuflUnicodes} from "./globals"

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

const computeBravuraWidth = (
    existingUnicode: Unicode & Word,
    [_, {bBoxNE: [x, y]}]: [any, {bBoxNE: number[]}],
): Octals =>
    FLOORED_WIDTHS.includes(existingUnicode) ?
        floor(x * 8) as Octals & Decimal<{integer: true}> :
        round(x * 8) as Octals

const computeBravuraGlyphWidth = (
    bravuraWidths: Record<RecordKey<Unicode>, Octals>,
    [glyphName, glyphDatum]: [Name<Unicode>, {codepoint: UnicodeLiteral & Word}],
): Record<RecordKey<Unicode>, Octals> => {
    const existingUnicode = smuflUnicodes.find((unicode: Unicode & Word): boolean =>
        computeUnicodeLiteral(unicode) === glyphDatum.codepoint)
    if (isUndefined(existingUnicode)) {
        // tslint:disable-next-line
        // console.warn(`Did not find existing unicode in SMuFL data for glyph name ${glyphName} with ${stringify(glyphData)} `)
        return bravuraWidths
    }

    const bravuraDatum = boundingBoxEntries.find(
        ([bBoxGlyphName, _]: [Name<Unicode>, {bBoxNE: number[]}]): boolean => glyphName === bBoxGlyphName,
    )
    if (isUndefined(bravuraDatum)) {
        // tslint:disable-next-line
        // console.warn(`Did not find existing width in Bravura metadata for glyph name ${glyphName} with ${stringify(glyphData)} `)
        return bravuraWidths
    }
    const computedWidth: Octals = computeBravuraWidth(existingUnicode, bravuraDatum)

    const exceptionWidth = EXCEPTION_WIDTHS[existingUnicode]
    const width: Octals = isUndefined(exceptionWidth) ? computedWidth : exceptionWidth

    // tslint:disable-next-line
    // console.warn(`################### ${glyphName}: ${computedWidth} vs ${existingWidth} (Δ ${abs(computedWidth - existingWidth)})`)

    return {
        ...bravuraWidths,
        [existingUnicode]: width,
    }
}

export {
    computeBravuraGlyphWidth,
}
