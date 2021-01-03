import {BLANK, isUndefined, Name, RecordKey, round, Word} from "@sagittal/general"
import * as fs from "fs"
import {computeUnicodeLiteral, Octals, SMuFL_MAP, Unicode, UnicodeLiteral} from "../src"

// todo: I should probably break this thing down too, into a widths module

const computeBravuraWidth = ([_, {bBoxNE: [x, y]}]: [any, {bBoxNE: number[]}]): Octals =>
    round(x * 8) as Octals

const OVERRIDDEN_WIDTHS: Record<RecordKey<Unicode>, Octals> = {
    [SMuFL_MAP["staff6Lines"]]: 0 as Octals,
    [SMuFL_MAP["staff6LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["staff6LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["staff5Lines"]]: 0 as Octals,
    [SMuFL_MAP["staff5LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["staff5LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["staff4Lines"]]: 0 as Octals,
    [SMuFL_MAP["staff4LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["staff4LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["staff3Lines"]]: 0 as Octals,
    [SMuFL_MAP["staff3LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["staff3LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["staff2Lines"]]: 0 as Octals,
    [SMuFL_MAP["staff2LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["staff2LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["staff1Line"]]: 0 as Octals,
    [SMuFL_MAP["staff1LineWide"]]: 0 as Octals,
    [SMuFL_MAP["staff1LineNarrow"]]: 0 as Octals,
    [SMuFL_MAP["chantStaff"]]: 0 as Octals,
    [SMuFL_MAP["chantStaffWide"]]: 0 as Octals,
    [SMuFL_MAP["chantStaffNarrow"]]: 0 as Octals,
    [SMuFL_MAP["luteStaff6Lines"]]: 0 as Octals,
    [SMuFL_MAP["luteStaff6LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["luteStaff6LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["barlineSingle"]]: 0 as Octals,
    [SMuFL_MAP["barlineDouble"]]: 3 as Octals,
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
    const boundingBoxEntries = Object.entries(bravuraMetadata.glyphBBoxes) as Array<[Name<Unicode>, {bBoxNE: number[]}]>
    const glyphNameEntries = Object.entries(glyphNames) as Array<[Name<Unicode>, {codepoint: UnicodeLiteral & Word}]>
    const smuflUnicodes = Object.values(SMuFL_MAP) as Array<Unicode & Word>

    glyphNameEntries.forEach(([glyphName, glyphDatum]: [Name<Unicode>, {codepoint: UnicodeLiteral & Word}]): void => {
        const existingUnicode = smuflUnicodes.find((unicode: Unicode & Word): boolean =>
            computeUnicodeLiteral(unicode) === glyphDatum.codepoint)
        if (isUndefined(existingUnicode)) {
            // tslint:disable-next-line
            // console.warn(`Did not find existing unicode in SMuFL data for glyph name ${glyphName} with ${stringify(glyphData)} `)
            return
        }

        const bravuraDatum = boundingBoxEntries.find(
            ([bBoxGlyphName, _]: [Name<Unicode>, {bBoxNE: number[]}]): boolean => glyphName === bBoxGlyphName,
        )
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
