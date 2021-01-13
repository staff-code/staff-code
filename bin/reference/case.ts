import {Name, Word} from "@sagittal/general"
import {Unicode} from "../../src"
import {MatchesCaseAgnosticParameters} from "./types"

// TODO: CLEAN, READY TO GO: SEPARATE LOWERCASE TYPE
//  So you can take any string type and then make it an all Lowercase version of itself
//  Also do Uppercase while you're at it I suppose... or is the whole thing actually CaseInsensitive ?
//  - but it should come from @sagittal/general

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
