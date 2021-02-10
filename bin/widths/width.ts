import {isUndefined, Name, RecordKey, Unicode, Word} from "@sagittal/general"
import {GlyphDatum} from "../types"
import {boundingBoxEntries, smuflUnicodes} from "./globals"
import {BoundingBox, EighthOctals} from "./types"

const computeBravuraEighthOctalWidth = (
    existingUnicode: Unicode & Word,
    [_, {bBoxNE: [x, y]}]: [Name<Unicode>, BoundingBox],
): EighthOctals =>
    x as EighthOctals

const computeBravuraGlyphEighthOctalWidth = (
    bravuraWidths: Record<RecordKey<Unicode>, EighthOctals>,
    [glyphName, glyphDatum]: [Name<Unicode>, GlyphDatum],
): Record<RecordKey<Unicode>, EighthOctals> => {
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
    const eighthOctalWidth: EighthOctals = computeBravuraEighthOctalWidth(existingUnicode, bravuraDatum)

    // tslint:disable-next-line
    // console.warn(`################### ${glyphName}: ${computedWidth} vs ${existingWidth} (Δ ${abs(computedWidth - existingWidth)})`)

    return {
        ...bravuraWidths,
        [existingUnicode]: eighthOctalWidth,
    }
}

export {
    computeBravuraGlyphEighthOctalWidth,
}
