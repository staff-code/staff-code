import {Name, Word} from "@sagittal/general"
import {Unicode} from "../../src"
import {MatchesCaseAgnosticParameters} from "./types"

// todo: separate Lowercase type, from general, and replace everywhere

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
