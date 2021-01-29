import {Name, SPACE} from "@sagittal/general"
// tslint:disable-next-line no-reaching-imports
import {Unicode} from "../src/translate"

const separateWordsBySpaces = (glyphName: Name<Unicode>): Name<Unicode> =>
    glyphName
        .replace(/([A-Z])/g, " $1")
        .replace(/(\d)/g, " $1 ")
        .replace(/\s+/g, SPACE)
        .trim() as Name<Unicode>

const separateWordsBySpacesForMnemonic = (glyphName: Name<Unicode>): Name<Unicode> =>
    glyphName
        .replace(/([A-Z])/g, " $1")
        .replace(/([^\d])(\d)/g, "$1 $2")
        .replace(/\s+/g, SPACE)
        .trim() as Name<Unicode>

export {
    separateWordsBySpaces,
    separateWordsBySpacesForMnemonic,
}
