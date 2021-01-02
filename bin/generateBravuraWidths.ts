import {BLANK, isUndefined, Name, RecordKey, round, Word} from "@sagittal/general"
import * as fs from "fs"
import {computeUnicodeLiteral, Octals, SMuFL_MAP, Unicode, UnicodeLiteral} from "../src"

const computeBravuraWidth = ([_, {bBoxNE: [x, y]}]: [any, {bBoxNE: number[]}]): Octals =>
    round(x * 8) as Octals

const OVERRIDDEN_WIDTHS: Record<RecordKey<Unicode>, Octals> = {
    [SMuFL_MAP["st6ln"]]: 0 as Octals,
    [SMuFL_MAP["st6lnwd"]]: 0 as Octals,
    [SMuFL_MAP["st6lnnr"]]: 0 as Octals,
    [SMuFL_MAP["st5ln"]]: 0 as Octals,
    [SMuFL_MAP["st5lnwd"]]: 0 as Octals,
    [SMuFL_MAP["st5lnnr"]]: 0 as Octals,
    [SMuFL_MAP["st4ln"]]: 0 as Octals,
    [SMuFL_MAP["st4lnwd"]]: 0 as Octals,
    [SMuFL_MAP["st4lnnr"]]: 0 as Octals,
    [SMuFL_MAP["st3ln"]]: 0 as Octals,
    [SMuFL_MAP["st3lnwd"]]: 0 as Octals,
    [SMuFL_MAP["st3lnnr"]]: 0 as Octals,
    [SMuFL_MAP["st2ln"]]: 0 as Octals,
    [SMuFL_MAP["st2lnwd"]]: 0 as Octals,
    [SMuFL_MAP["st2lnnr"]]: 0 as Octals,
    [SMuFL_MAP["st1ln"]]: 0 as Octals,
    [SMuFL_MAP["st1lnwd"]]: 0 as Octals,
    [SMuFL_MAP["st1lnnr"]]: 0 as Octals,
    [SMuFL_MAP["chst"]]: 0 as Octals, // Plainchant staff
    [SMuFL_MAP["chstwd"]]: 0 as Octals, // Plainchant staff (wide)
    [SMuFL_MAP["chstnr"]]: 0 as Octals, // Plainchant staff (narrow)
    [SMuFL_MAP["ltst6ln"]]: 0 as Octals, // Lute tablature staff, 6 courses
    [SMuFL_MAP["ltst6lnwd"]]: 0 as Octals, // Lute tablature staff, 6 courses (wide)
    [SMuFL_MAP["ltst6lnnr"]]: 0 as Octals, // Lute tablature staff, 6 courses (narrow)
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
