import {BLANK, isUndefined, Name, Word} from "@sagittal/general"
import {Unicode} from "../../src"
import {EXCEPTION_WORD_ENTRIES} from "./exceptions"

const removeVowelsAndVowelSoundCharSequencesBesidesFirstChar = (string: string): string => {
    const replaced = string
        .slice(1)
        .replace(/igh/g, BLANK)         // 100x right, 3x tight, 2x eight, 6x high, 3x higher, 2x highest
        .replace(/[aeiou]/g, BLANK)

    return `${string[0]}${replaced}`
}

const computeGlyphNameWordAbbreviation = (word: Name<Unicode> & Word): Name<Unicode> & Word => {
    const lowercasedWord = word.toLowerCase()

    // 1st possibility: word is already one letter; make it uppercase, to improve readability
    if (lowercasedWord.length === 1) return lowercasedWord.toUpperCase() as Name<Unicode> & Word

    // 2nd possibility: word is already two letters; done
    if (lowercasedWord.length === 2) return lowercasedWord as Name<Unicode> & Word

    // 3rd possibility: word is one of the exceptional cases; return its exceptional replacement
    const maybeException = EXCEPTION_WORD_ENTRIES.find(
        ([exception, _]: [Name<Unicode> & Word, Name<Unicode> & Word]): boolean => lowercasedWord === exception,
    )
    if (!isUndefined(maybeException)) return maybeException[1] as Name<Unicode> & Word

    // 4th possibility: after removing vowels, the word would be less than 2 chars, so you should instead just return
    //  Its first 2 chars, vowel or not
    const removedVowelsWord = removeVowelsAndVowelSoundCharSequencesBesidesFirstChar(lowercasedWord)
    if (removedVowelsWord.length < 2) return lowercasedWord.slice(0, 2) as Name<Unicode> & Word

    // 5th possibility (most likely): after removing vowels, return the first 2 remaining chars
    return removedVowelsWord.slice(0, 2) as Name<Unicode> & Word
}

export {
    computeGlyphNameWordAbbreviation,
}
