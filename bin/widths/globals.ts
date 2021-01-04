import {BLANK, Name, Word} from "@sagittal/general"
import fs from "fs"
import {SMuFL_MAP, Unicode} from "../../src"

const bravuraMetadata = JSON.parse(
    fs.readFileSync("vendor/bravura_metadata.json", {encoding: "utf8"})
        .replace(/\r/g, BLANK),
)
const boundingBoxEntries = Object.entries(bravuraMetadata.glyphBBoxes) as Array<[Name<Unicode>, {bBoxNE: number[]}]>

const glyphNames = JSON.parse(
    fs.readFileSync("vendor/glyphnames.json", {encoding: "utf8"})
        .replace(/\r/g, BLANK),
)
const smuflUnicodes = Object.values(SMuFL_MAP) as Array<Unicode & Word>

export {
    boundingBoxEntries,
    smuflUnicodes,
    glyphNames,
}
