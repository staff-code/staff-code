import {
    BLANK,
    Clause,
    finalChar,
    finalElement,
    Io,
    NEWLINE,
    Sentence,
    setAllPropertiesOfObjectOnAnother,
    SPACE,
    Word,
} from "@sagittal/general"
import {Unicode} from "./codes"
import {INITIAL_SMARTS, smarts} from "./smarts"
import {computeInputUnicodeClause} from "./word"

const collapseAllWhitespacesToSingleSpaces = (inputSentence: Io & Sentence): Io & Sentence =>
    inputSentence
        .replace(/<br>/g, SPACE)
        .replace(/\s+/g, SPACE)
        .trim() as Io & Sentence

const ensureLineBreaksImmediatelyDisplay = (unicodeSentence: Unicode & Sentence): Unicode & Sentence =>
    finalChar(unicodeSentence) === NEWLINE ?
        `${unicodeSentence} ` as Unicode & Sentence :
        unicodeSentence

const ensureFinalSymbolHasStaveUnderneathIfSmartStaveIsOn = (inputs: Array<Io & Word>): void => {
    if (finalElement(inputs) !== ";") {
        inputs.push(";" as Io & Word)
    }
}

const computeInputSentenceUnicode = (inputSentence: Io & Sentence): Unicode & Sentence => {
    // tslint:disable-next-line
    // console.warn("NEW SENTENCE ------------------", inputSentence)

    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})

    const inputs = collapseAllWhitespacesToSingleSpaces(inputSentence).split(SPACE) as Array<Io & Word>
    ensureFinalSymbolHasStaveUnderneathIfSmartStaveIsOn(inputs)

    const unicodeClauses: Array<Unicode & Clause> = inputs.map(computeInputUnicodeClause)
    let unicodeSentence = unicodeClauses.join(BLANK) as Unicode & Sentence
    unicodeSentence = ensureLineBreaksImmediatelyDisplay(unicodeSentence)

    return unicodeSentence
}

export {
    computeInputSentenceUnicode,
}
