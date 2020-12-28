import {isUndefined, Maybe, RecordKey, round} from "@sagittal/general"
import {bravuraMetadata, glyphNames} from "../../../../vendor"
import {Octels, SMuFL_MAP, Symbol, Unicode} from "../../codes"
import {computeUnicodeLiteral} from "../../utility"

const computeBravuraWidth = ([_, {bBoxNE: [x, y]}]: [any, {bBoxNE: number[]}]): Octels =>
    round(x * 8) as Octels

const OVERRIDDEN_WIDTHS: Record<RecordKey<Unicode>, Octels> = {
    [SMuFL_MAP["st5ln"].unicode]: 0 as Octels,
    [SMuFL_MAP["st5lnwd"].unicode]: 0 as Octels,
    [SMuFL_MAP["st5lnnr"].unicode]: 0 as Octels,
    [SMuFL_MAP["blsn"].unicode]: 0 as Octels,
    [SMuFL_MAP["bldb"].unicode]: 3 as Octels,
}

const computeBravuraWidths = (): Record<RecordKey<Unicode>, Octels> => {
    const bravuraWidths = {} as Record<RecordKey<Unicode>, Octels>
    const boundingBoxEntries = Object.entries(bravuraMetadata.glyphBBoxes) as Array<[string, {bBoxNE: number[]}]>
    const glyphNameEntries = Object.entries(glyphNames) as Array<[string, {codepoint: string}]>
    const smuflSymbols = Object.values(SMuFL_MAP) as Symbol[]

    glyphNameEntries.forEach(([glyphName, glyphDatum]: [string, {codepoint: string}]): void => {
        const existingSymbol = smuflSymbols.find(({unicode}: Symbol): boolean =>
            computeUnicodeLiteral(unicode) === glyphDatum.codepoint)
        if (isUndefined(existingSymbol)) {
            // tslint:disable-next-line
            // console.warn(`Did not find existing symbol in SMuFL data for glyph name ${glyphName} with ${stringify(glyphData)} `)
            return
        }
        const existingWidth: Maybe<Octels> = existingSymbol.width

        const bravuraDatum = boundingBoxEntries.find(([bBoxGlyphName, _]: [string, {bBoxNE: number[]}]): boolean =>
            glyphName === bBoxGlyphName)
        if (isUndefined(bravuraDatum)) {
            // tslint:disable-next-line
            // console.warn(`Did not find existing width in Bravura metadata for glyph name ${glyphName} with ${stringify(glyphData)} `)
            return
        }
        const computedWidth: Octels = computeBravuraWidth(bravuraDatum)

        const overriddenWidth = OVERRIDDEN_WIDTHS[existingSymbol.unicode]
        const width: Octels = isUndefined(overriddenWidth) ? computedWidth : overriddenWidth

        // tslint:disable-next-line
        // console.warn(`################### ${glyphName}: ${computedWidth} vs ${existingWidth} (Δ ${abs(computedWidth - existingWidth)})`)

        bravuraWidths[existingSymbol.unicode] = width
    })

    return bravuraWidths
}

export {
    computeBravuraWidths,
}
