import {Name, RecordKey} from "@sagittal/general"
import * as fs from "fs"
import {Octals, Unicode} from "../../src"
import {glyphNames} from "../globals"
import {GlyphDatum} from "../types"
import {ASCII_WIDTHS} from "./ascii"
import {computeBravuraGlyphWidth} from "./width"

const generateBravuraWidths = (): void => {
    const glyphNameEntries = Object.entries(glyphNames) as Array<[Name<Unicode>, GlyphDatum]>

    let bravuraWidths = glyphNameEntries.reduce(computeBravuraGlyphWidth, {} as Record<RecordKey<Unicode>, Octals>)

    bravuraWidths = {
        ...bravuraWidths,
        ...ASCII_WIDTHS,
    }

    fs.writeFileSync(
        "src/translate/smarts/horizontal/bravuraWidths.json",
        JSON.stringify(bravuraWidths, undefined, 2),
    )
}

generateBravuraWidths()
