import {Name} from "@sagittal/general"
import {Unicode} from "../../src"

const rejoinSagittalCommaNames = (glyphNameWord: Name<Unicode>): Name<Unicode> =>
    glyphNameWord
        .replace(/(\d+)v (\d+)/, "$1v$2")
        .replace(/(\d+) ([unskCSMLA]) /, "$1$2 ") as Name<Unicode>

const unjoinTabClefs = (glyphNameWord: Name<Unicode>): Name<Unicode> =>
    glyphNameWord
        .replace(/(\d+)string/, "$1 string") as Name<Unicode>

export {
    rejoinSagittalCommaNames,
    unjoinTabClefs,
}
