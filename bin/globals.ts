import {BLANK} from "@sagittal/general"
import * as fs from "fs"
import {SmuflGlyphNames} from "./types"

const glyphNames = JSON.parse(
    fs.readFileSync("vendor/glyphnames.json", {encoding: "utf8"})
        .replace(/\r/g, BLANK),
) as SmuflGlyphNames

export {
    glyphNames,
}
