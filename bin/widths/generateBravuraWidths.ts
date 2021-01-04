import {Name, RecordKey, Word} from "@sagittal/general"
import * as fs from "fs"
import {Octals, Unicode, UnicodeLiteral} from "../../src"
import {glyphNames} from "./globals"
import {computeBravuraGlyphWidth} from "./width"

const generateBravuraWidths = (): void => {
    const glyphNameEntries = Object.entries(glyphNames) as Array<[Name<Unicode>, {codepoint: UnicodeLiteral & Word}]>

    const bravuraWidths = glyphNameEntries.reduce(computeBravuraGlyphWidth, {} as Record<RecordKey<Unicode>, Octals>)

    fs.writeFileSync(
        "src/translate/smarts/advanceAndStave/bravuraWidths.json",
        JSON.stringify(bravuraWidths, undefined, 2),
    )
}

generateBravuraWidths()
