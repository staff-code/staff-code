import {BLANK, Name, SPACE, Word} from "@sagittal/general"
import {Code, Unicode} from "../../src"
import {separateWordsBySpaces} from "../separate"
import {computeGlyphNameWordAbbreviation} from "./glyphNameWordAbbreviation"

const replaceOrdinals = (glyphName: Name<Unicode>): Name<Unicode> =>
    glyphName
        .replace(/1st/, "1")
        .replace(/2nd/, "2")
        .replace(/3rd/, "3")
        .replace(/(\d)th/, "$1") as Name<Unicode>

const fixSmuflCapitalizationIssue = (glyphName: Name<Unicode>): Name<Unicode> =>
    glyphName
        // Manually corrected glyph names "wiggleVIbratoLargestSlower" and "wiggleVIbratoMediumSlower"
        // (uppercase "I" to lowercase "i") so they would generate sensible staffCodes,
        // Despite the fact that this can never be fixed in SMuFL. See https://github.com/w3c/smufl/issues/167
        .replace(/wiggleVIbrato/, "wiggleVibrato") as Name<Unicode>

const updateEhejipn = (glyphName: Name<Unicode>): Name<Unicode> =>
    glyphName
        .replace(/23Limit29LimitComma/, "23LimitComma") as Name<Unicode>

const computeSmuflCode = (glyphName: Name<Unicode>): Code & Word => {
    const words = separateWordsBySpaces(replaceOrdinals(fixSmuflCapitalizationIssue(updateEhejipn(glyphName))))
        .split(SPACE) as Array<Name<Unicode> & Word>

    return words.map(computeGlyphNameWordAbbreviation).join(BLANK) as Code & Word
}

export {
    computeSmuflCode,
    fixSmuflCapitalizationIssue,
    updateEhejipn,
}
