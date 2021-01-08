import {BLANK} from "@sagittal/general"
import fs from "fs"
import {SmuflRanges} from "./types"

const smuflRanges = JSON.parse(
    fs.readFileSync("vendor/ranges.json", {encoding: "utf8"})
        .replace(/\r/g, BLANK),
) as SmuflRanges

export {
    smuflRanges,
}
