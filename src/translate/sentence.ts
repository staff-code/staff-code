import {BLANK, finalChar, finalElement, Io, NEWLINE, setAllPropertiesOfObjectOnAnother, SPACE} from "@sagittal/general"
import {INITIAL_SMARTS, smarts} from "./smarts"
import {Code, Unicode} from "./codes"
import {computeInputWordUnicode} from "./word"

const collapseAllWhitespacesToSingleSpaces = (inputSentence: Io): Io =>
    inputSentence
        .replace(/<br>/g, SPACE)
        .replace(/\n/g, SPACE)
        .replace(/\t/g, SPACE)
        .trim()

const ensureLineBreaksImmediatelyDisplay = (unicodeSentence: Unicode): Unicode =>
    finalChar(unicodeSentence) === NEWLINE ?
        `${unicodeSentence} ` as Unicode :
        unicodeSentence

const ensureFinalSymbolHasStaveUnderneathIfSmartStaveIsOn = (inputWords: Io[]): void => {
    if (finalElement(inputWords) !== Code[Code[`;`]]) {
        inputWords.push(Code[Code[`;`]])
    }
}

const computeInputSentenceUnicode = (inputSentence: Io): Unicode => {
    // tslint:disable-next-line
    // console.log("NEW SENTENCE ------------------", inputSentence)

    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})

    const inputWords = collapseAllWhitespacesToSingleSpaces(inputSentence).split(SPACE)
    ensureFinalSymbolHasStaveUnderneathIfSmartStaveIsOn(inputWords)

    let unicodeSentence = inputWords
        .map(computeInputWordUnicode)
        .join(BLANK) as Unicode
    unicodeSentence = ensureLineBreaksImmediatelyDisplay(unicodeSentence)

    return unicodeSentence
}

export {
    computeInputSentenceUnicode,
}
