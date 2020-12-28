import {isUndefined, RecordKey, round, Word} from "@sagittal/general"
import {bravuraMetadata, glyphNames} from "../../../../vendor"
import {computeUnicodeLiteral, Octels, SMuFL_MAP, Unicode} from "../../codes"

const computeBravuraWidth = ([_, {bBoxNE: [x, y]}]: [any, {bBoxNE: number[]}]): Octels =>
    round(x * 8) as Octels

const OVERRIDDEN_WIDTHS: Record<RecordKey<Unicode>, Octels> = {
    [SMuFL_MAP["st5ln"]]: 0 as Octels,
    [SMuFL_MAP["st5lnwd"]]: 0 as Octels,
    [SMuFL_MAP["st5lnnr"]]: 0 as Octels,
    [SMuFL_MAP["blsn"]]: 0 as Octels,
    [SMuFL_MAP["bldb"]]: 3 as Octels,
}

// TODO: DO NOT FORCE THE VENDOR FILES TO BE INCLUDED IN THE BUNDLE
//  There must be some other way to rig this so that only the widths get included, not the vendor files

const computeBravuraWidths = (): Record<RecordKey<Unicode>, Octels> => {
    const bravuraWidths = {} as Record<RecordKey<Unicode>, Octels>
    const boundingBoxEntries = Object.entries(bravuraMetadata.glyphBBoxes) as Array<[string, {bBoxNE: number[]}]>
    const glyphNameEntries = Object.entries(glyphNames) as Array<[string, {codepoint: string}]>
    const smuflUnicodes = Object.values(SMuFL_MAP) as Array<Unicode & Word>

    glyphNameEntries.forEach(([glyphName, glyphDatum]: [string, {codepoint: string}]): void => {
        const existingUnicode = smuflUnicodes.find((unicode: Unicode & Word): boolean =>
            computeUnicodeLiteral(unicode) === glyphDatum.codepoint)
        if (isUndefined(existingUnicode)) {
            // tslint:disable-next-line
            // console.warn(`Did not find existing unicode in SMuFL data for glyph name ${glyphName} with ${stringify(glyphData)} `)
            return
        }

        const bravuraDatum = boundingBoxEntries.find(([bBoxGlyphName, _]: [string, {bBoxNE: number[]}]): boolean =>
            glyphName === bBoxGlyphName)
        if (isUndefined(bravuraDatum)) {
            // tslint:disable-next-line
            // console.warn(`Did not find existing width in Bravura metadata for glyph name ${glyphName} with ${stringify(glyphData)} `)
            return
        }
        const computedWidth: Octels = computeBravuraWidth(bravuraDatum)

        const overriddenWidth = OVERRIDDEN_WIDTHS[existingUnicode]
        const width: Octels = isUndefined(overriddenWidth) ? computedWidth : overriddenWidth

        // tslint:disable-next-line
        // console.warn(`################### ${glyphName}: ${computedWidth} vs ${existingWidth} (Δ ${abs(computedWidth - existingWidth)})`)

        bravuraWidths[existingUnicode] = width
    })

    return bravuraWidths
}

export {
    computeBravuraWidths,
}
