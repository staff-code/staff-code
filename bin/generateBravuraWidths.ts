import {BLANK, isUndefined, RecordKey, round, Word} from "@sagittal/general"
import * as fs from "fs"
import {computeUnicodeLiteral, Octals, SMuFL_MAP, Unicode} from "../src"

const computeBravuraWidth = ([_, {bBoxNE: [x, y]}]: [any, {bBoxNE: number[]}]): Octals =>
    round(x * 8) as Octals

const OVERRIDDEN_WIDTHS: Record<RecordKey<Unicode>, Octals> = {
    [SMuFL_MAP["st5ln"]]: 0 as Octals,
    [SMuFL_MAP["st5lnwd"]]: 0 as Octals,
    [SMuFL_MAP["st5lnnr"]]: 0 as Octals,
    [SMuFL_MAP["blsn"]]: 0 as Octals,
    [SMuFL_MAP["bldb"]]: 3 as Octals,
}

const generateBravuraWidths = (): void => {
    const bravuraMetadata = JSON.parse(
        fs.readFileSync("vendor/bravura_metadata.json", {encoding: "utf8"})
            .replace(/\r/g, BLANK),
    )
    const glyphNames = JSON.parse(
        fs.readFileSync("vendor/glyphnames.json", {encoding: "utf8"})
            .replace(/\r/g, BLANK),
    )

    const bravuraWidths = {} as Record<RecordKey<Unicode>, Octals>
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
        const computedWidth: Octals = computeBravuraWidth(bravuraDatum)

        const overriddenWidth = OVERRIDDEN_WIDTHS[existingUnicode]
        const width: Octals = isUndefined(overriddenWidth) ? computedWidth : overriddenWidth

        // tslint:disable-next-line
        // console.warn(`################### ${glyphName}: ${computedWidth} vs ${existingWidth} (Δ ${abs(computedWidth - existingWidth)})`)

        bravuraWidths[existingUnicode] = width
    })

    fs.writeFileSync(
        "src/translate/smarts/advanceAndStave/bravuraWidths.json",
        JSON.stringify(bravuraWidths, undefined, 2),
    )
}

generateBravuraWidths()
