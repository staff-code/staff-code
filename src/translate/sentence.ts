import {
    BLANK,
    Clause,
    finalChar,
    Io,
    NEWLINE,
    Sentence,
    setAllPropertiesOfObjectOnAnother,
    SPACE,
    sumTexts,
    Unicode,
    Word,
} from "@sagittal/general"
import {processMacros} from "./macros"
import {
    collapseAdvances,
    computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts,
    computeAdvanceUnicode,
    INITIAL_SMARTS,
    Octals,
    smarts,
} from "./smarts"
import {computeInputUnicodeClause} from "./word"

const bufferSemicolonsAndCollapseAllWhitespacesToSingleSpaces = (inputSentence: Io & Sentence): Io & Sentence => {
    const temporarilyReplaceActualAdvanceCodesWithTmpAltSemicolonsSoTheyDontGetSeparated = inputSentence
        .replace(/(^|\s|;)(\d+);/g, "$1$2\x07 ")
        .replace(/(^|\s|;)(\d+)((?=;))/g, "$1$2\x07 ")
        .replace(/(^|\s|;)en(?=;)/g, "$1en\x07 ")
        .replace(/(^|\s|;)nl(?=;)/g, "$1nl\x07 ")
        .replace(/(^|\s|;)rt(?=;)/g, "$1rt\x07 ")
        .replace(/(^|\s|;)cn(?=;)/g, "$1cn\x07 ")

    const separateSemicolonsThatWereNotPartOfActualAdvanceCodes =
        temporarilyReplaceActualAdvanceCodesWithTmpAltSemicolonsSoTheyDontGetSeparated
            .replace(/;/g, " ; ")

    const restoreSemicolonsToActualAdvanceCodes = separateSemicolonsThatWereNotPartOfActualAdvanceCodes
        .replace(/cn\x07/g, "cn;")
        .replace(/rt\x07/g, "rt;")
        .replace(/nl\x07/g, "nl;")
        .replace(/en\x07/g, "en;")
        .replace(/(\d+)\x07/g, "$1;")

    return restoreSemicolonsToActualAdvanceCodes
        .replace(/<br>/g, SPACE)
        .replace(/\s+/g, SPACE)
        .trim() as Io & Sentence
}

const UNICODE_TO_ENSURE_IMMEDIATE_VISIBILITY_OF_NEWLINE = computeAdvanceUnicode(1 as Octals) as Unicode

const ensureImmediateVisibilityOfNewline = (unicodeSentence: Unicode & Sentence): Unicode & Sentence =>
    finalChar(unicodeSentence) === NEWLINE ?
        sumTexts(unicodeSentence, UNICODE_TO_ENSURE_IMMEDIATE_VISIBILITY_OF_NEWLINE) as Unicode & Sentence :
        unicodeSentence

const computeInputSentenceUnicode = (inputSentence: Io & Sentence): Unicode & Sentence => {
    // tslint:disable-next-line
    // console.warn("NEW SENTENCE ------------------", inputSentence)

    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})

    let inputs = bufferSemicolonsAndCollapseAllWhitespacesToSingleSpaces(inputSentence).split(SPACE) as Array<Io & Word>
    inputs = processMacros(inputs)

    const unicodeClauses: Array<Unicode & Clause> = inputs.map(computeInputUnicodeClause)
    let unicodeSentence = unicodeClauses.join(BLANK) as Unicode & Sentence
    unicodeSentence = ensureImmediateVisibilityOfNewline(unicodeSentence)

    const advanceToEndOfInkUnicodeClause = computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts()
    unicodeSentence = sumTexts(unicodeSentence, advanceToEndOfInkUnicodeClause as Unicode as Unicode & Sentence)

    return collapseAdvances(unicodeSentence)
}

export {
    computeInputSentenceUnicode,
}
