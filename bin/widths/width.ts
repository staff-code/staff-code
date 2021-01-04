import {isUndefined, Name, RecordKey, round, Word} from "@sagittal/general"
import {computeUnicodeLiteral, Octals, Unicode, UnicodeLiteral} from "../../src"
import {EXCEPTION_WIDTHS} from "./exceptions"
import {boundingBoxEntries, smuflUnicodes} from "./globals"

const computeBravuraWidth = ([_, {bBoxNE: [x, y]}]: [any, {bBoxNE: number[]}]): Octals =>
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
    const computedWidth: Octals = computeBravuraWidth(bravuraDatum)

    const overriddenWidth = EXCEPTION_WIDTHS[existingUnicode]
    const width: Octals = isUndefined(overriddenWidth) ? computedWidth : overriddenWidth

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
