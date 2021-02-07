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
    Word,
} from "@sagittal/general"
import {Octals, Unicode} from "./codes"
import {processMacros} from "./macros"
import {
    collapseAdvances,
    computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts,
    computeAdvanceUnicode,
    INITIAL_SMARTS,
    smarts,
} from "./smarts"
import {computeInputUnicodeClause} from "./word"

const bufferSemicolonsAndCollapseAllWhitespacesToSingleSpaces = (inputSentence: Io & Sentence): Io & Sentence =>
    inputSentence
        .replace(/(\d+);/g, "$1\x07")
        .replace(/en;/g, "en\x07")
        .replace(/nl;/g, "nl\x07")
        .replace(/rt;/g, "rt\x07")
        .replace(/cn;/g, "cn\x07")
        .replace(/;/g, " ; ")
        .replace(/cn\x07/g, "cn;")
        .replace(/rt\x07/g, "rt;")
        .replace(/nl\x07/g, "nl;")
        .replace(/en\x07/g, "en;")
        .replace(/(\d+)\x07/g, "$1;")
        .replace(/<br>/g, SPACE)
        .replace(/\s+/g, SPACE)
        .trim() as Io & Sentence

const ensureLineBreaksImmediatelyDisplay = (unicodeSentence: Unicode & Sentence): Unicode & Sentence =>
    finalChar(unicodeSentence) === NEWLINE ?
        sumTexts(unicodeSentence, computeAdvanceUnicode(1 as Octals) as Unicode) as Unicode & Sentence :
        unicodeSentence

const computeInputSentenceUnicode = (inputSentence: Io & Sentence): Unicode & Sentence => {
    // tslint:disable-next-line
    // console.warn("NEW SENTENCE ------------------", inputSentence)

    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})

    let inputs = bufferSemicolonsAndCollapseAllWhitespacesToSingleSpaces(inputSentence).split(SPACE) as Array<Io & Word>
    inputs = processMacros(inputs)

    const unicodeClauses: Array<Unicode & Clause> = inputs.map(computeInputUnicodeClause)
    let unicodeSentence = unicodeClauses.join(BLANK) as Unicode & Sentence
    unicodeSentence = ensureLineBreaksImmediatelyDisplay(unicodeSentence)

    const advanceToEndOfInkUnicodeClause = computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts()
    unicodeSentence = sumTexts(unicodeSentence, advanceToEndOfInkUnicodeClause as Unicode as Unicode & Sentence)

    return collapseAdvances(unicodeSentence)
}

export {
    computeInputSentenceUnicode,
}
