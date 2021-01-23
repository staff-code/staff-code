import {
    BLANK,
    Clause,
    extendSentence,
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
import {
    collapseAdvances,
    computeAdvanceUnicode,
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
    INITIAL_SMARTS,
    smarts,
} from "./smarts"
import {computeInputUnicodeClause} from "./word"

const collapseAllWhitespacesToSingleSpaces = (inputSentence: Io & Sentence): Io & Sentence =>
    inputSentence
        .replace(/<br>/g, SPACE)
        .replace(/\s+/g, SPACE)
        .trim() as Io & Sentence

const ensureLineBreaksImmediatelyDisplay = (unicodeSentence: Unicode & Sentence): Unicode & Sentence =>
    finalChar(unicodeSentence) === NEWLINE ?
        extendSentence(unicodeSentence, computeAdvanceUnicode(1 as Octals)) as Unicode & Sentence :
        unicodeSentence

const computeInputSentenceUnicode = (inputSentence: Io & Sentence): Unicode & Sentence => {
    // tslint:disable-next-line
    // console.warn("NEW SENTENCE ------------------", inputSentence)

    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})

    const inputs = collapseAllWhitespacesToSingleSpaces(inputSentence).split(SPACE) as Array<Io & Word>

    const unicodeClauses: Array<Unicode & Clause> = inputs.map(computeInputUnicodeClause)
    let unicodeSentence = unicodeClauses.join(BLANK) as Unicode & Sentence
    unicodeSentence = ensureLineBreaksImmediatelyDisplay(unicodeSentence)

    const endOfLineUnicodeClause = computeEndOfLineUnicodeClauseAndUpdateSmarts()
    unicodeSentence = sumTexts(unicodeSentence, endOfLineUnicodeClause as Unicode as Unicode & Sentence)

    return collapseAdvances(unicodeSentence)
}

export {
    computeInputSentenceUnicode,
}
