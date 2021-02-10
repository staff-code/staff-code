import {BLANK} from "@sagittal/general"
import * as fs from "fs"
import {GlyphData} from "./types"

const glyphData = JSON.parse(
    fs.readFileSync("vendor/glyphnames.json", {encoding: "utf8"})
        .replace(/\r/g, BLANK),
) as GlyphData

export {
    glyphData,
}
