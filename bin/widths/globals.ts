import {BLANK, Name} from "@sagittal/general"
import * as fs from "fs"
// tslint:disable-next-line no-reaching-imports
import {Unicode} from "../../src/translate"
import {computeGlyphUnicodes} from "../glyphUnicode"
import {BoundingBox, BravuraMetadata} from "./types"

const bravuraMetadata = JSON.parse(
    fs.readFileSync("vendor/bravura_metadata.json", {encoding: "utf8"})
        .replace(/\r/g, BLANK),
) as BravuraMetadata
const boundingBoxEntries = Object.entries(bravuraMetadata.glyphBBoxes) as Array<[Name<Unicode>, BoundingBox]>

const smuflUnicodes = computeGlyphUnicodes()

export {
    boundingBoxEntries,
    smuflUnicodes,
}
