import {Decimal, floor, isUndefined, Name, RecordKey, round, Word} from "@sagittal/general"
// tslint:disable-next-line no-reaching-imports
import {computeUnicodeLiteral, Octals, Unicode} from "../../src/translate"
import {GlyphDatum} from "../types"
import {EXCEPTION_WIDTHS, FLOORED_WIDTHS} from "./exceptions"
import {boundingBoxEntries, smuflUnicodes} from "./globals"
import {BoundingBox} from "./types"

const computeBravuraWidth = (
    existingUnicode: Unicode & Word,
    [_, {bBoxNE: [x, y]}]: [Name<Unicode>, BoundingBox],
): Octals => {
    const computedWidth = FLOORED_WIDTHS.includes(existingUnicode) ?
        floor(x * 8) as Octals & Decimal<{integer: true}> :
        round(x * 8) as Octals

    const exceptionWidth = EXCEPTION_WIDTHS[existingUnicode]

    return isUndefined(exceptionWidth) ? computedWidth : exceptionWidth
}

const computeBravuraGlyphWidth = (
    bravuraWidths: Record<RecordKey<Unicode>, Octals>,
    [glyphName, glyphDatum]: [Name<Unicode>, GlyphDatum],
): Record<RecordKey<Unicode>, Octals> => {
    const existingUnicode = smuflUnicodes.find((unicode: Unicode & Word): boolean =>
        computeUnicodeLiteral(unicode) === glyphDatum.codepoint)
    if (isUndefined(existingUnicode)) {
        // tslint:disable-next-line
        // console.warn(`Did not find existing unicode in SMuFL data for glyph name ${glyphName} with ${stringify(glyphData)} `)
        return bravuraWidths
    }

    const bravuraDatum = boundingBoxEntries.find(
        ([bBoxGlyphName, _]: [Name<Unicode>, BoundingBox]): boolean => glyphName === bBoxGlyphName,
    )
    if (isUndefined(bravuraDatum)) {
        // tslint:disable-next-line
        // console.warn(`Did not find existing width in Bravura metadata for glyph name ${glyphName} with ${stringify(glyphData)} `)
        return bravuraWidths
    }
    const width: Octals = computeBravuraWidth(existingUnicode, bravuraDatum)

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
