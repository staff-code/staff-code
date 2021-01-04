import {Abbreviation, BLANK, isUndefined, Name, Word} from "@sagittal/general"
import {Unicode} from "../../src"
import {EXCEPTION_WORD_ENTRIES} from "./exceptions"

const removeVowelsAndVowelSoundCharSequencesBesidesFirstChar = (
    lowercasedWord: Name<Unicode> & Word
): Name<Unicode> & Word => {
    const firstLetterOfLowercasedWord = lowercasedWord[0]
    const remainingPartOfLowercasedWordWithVowelsRemoved = lowercasedWord
        .slice(1)
        .replace(/igh/g, BLANK)         // 100x right, 3x tight, 2x eight, 6x high, 3x higher, 2x highest
        .replace(/[aeiou]/g, BLANK)

    return `${firstLetterOfLowercasedWord}${remainingPartOfLowercasedWordWithVowelsRemoved}` as Name<Unicode> & Word
}

const computeGlyphNameWordAbbreviation = (word: Name<Unicode> & Word): Abbreviation<Unicode> & Word => {
    const lowercasedWord = word.toLowerCase() as Name<Unicode> & Word

    if (lowercasedWord.length === 1) return lowercasedWord.toUpperCase() as Abbreviation<Unicode> & Word

    const maybeExceptionWord = EXCEPTION_WORD_ENTRIES.find(
        ([exception, _]: [Name<Unicode> & Word, Abbreviation<Unicode> & Word]): boolean => lowercasedWord === exception,
    )
    if (!isUndefined(maybeExceptionWord)) return maybeExceptionWord[1] as Abbreviation<Unicode> & Word

    const removedVowelsWord = removeVowelsAndVowelSoundCharSequencesBesidesFirstChar(lowercasedWord)
    if (removedVowelsWord.length < 2) return lowercasedWord.slice(0, 2) as Abbreviation<Unicode> & Word

    return removedVowelsWord.slice(0, 2) as Abbreviation<Unicode> & Word
}

export {
    computeGlyphNameWordAbbreviation,
}
