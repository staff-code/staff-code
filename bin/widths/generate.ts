import {Name, RecordKey, Unicode} from "@sagittal/general"
import * as fs from "fs"
import {glyphNames} from "../globals"
import {GlyphDatum} from "../types"
import {EighthOctals} from "./types"
import {computeBravuraGlyphEighthOctalWidth} from "./width"

const generateBravuraWidths = (): void => {
    const glyphNameEntries = Object.entries(glyphNames) as Array<[Name<Unicode>, GlyphDatum]>

    const bravuraEighthOctalWidths = glyphNameEntries
        .reduce(computeBravuraGlyphEighthOctalWidth, {} as Record<RecordKey<Unicode>, EighthOctals>)

    fs.writeFileSync(
        "src/translate/smarts/horizontal/bravuraEighthOctalWidths.json",
        JSON.stringify(bravuraEighthOctalWidths, undefined, 2),
    )
}

generateBravuraWidths()
