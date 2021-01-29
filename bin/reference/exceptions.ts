import {Name} from "@sagittal/general"
// tslint:disable-next-line no-reaching-imports
import {Unicode} from "../../src/translate"

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
