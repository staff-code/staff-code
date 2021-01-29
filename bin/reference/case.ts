import {Name, Word} from "@sagittal/general"
// tslint:disable-next-line no-reaching-imports
import {Unicode} from "../../src/translate"
import {MatchesCaseAgnosticParameters} from "./types"

const matchesCaseAgnostic = ({glyphNameChar, code, codeIndex}: MatchesCaseAgnosticParameters): boolean =>
    glyphNameChar.toLowerCase() === code[codeIndex].toLowerCase()

const computeCaseModifiedGlyphNameWord = (glyphNameWord: Name<Unicode> & Word): Name<Unicode> & Word =>
    glyphNameWord.match(/\d+[CSML]/) ?
        glyphNameWord ://.replace(/V/g, "v") as Name<Unicode> & Word :
        glyphNameWord.length === 1 ?
            glyphNameWord.toUpperCase() as Name<Unicode> & Word :
            glyphNameWord.toLowerCase() as Name<Unicode> & Word

export {
    matchesCaseAgnostic,
    computeCaseModifiedGlyphNameWord,
}
