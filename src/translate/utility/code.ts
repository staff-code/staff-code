import {BLANK, joinWords, Sentence, Word} from "@sagittal/general"
import {
    ACCIDENTAL_ALIASES_MAP,
    BASE_SYMBOL_MAP,
    Code,
    GENERIC_POSITION_ALIASES_MAP,
    LINE_BREAK_ALIASES_MAP,
    MANUAL_STAVE_ALIASES_MAP,
    Symbol,
    Unicode,
} from "../codes"

const BASE_SYMBOL_MAP_WITH_PREFERRED_ALIASES_FOR_DEBUGGING = {
    ...ACCIDENTAL_ALIASES_MAP,
    ...GENERIC_POSITION_ALIASES_MAP,
    ...LINE_BREAK_ALIASES_MAP,
    ...MANUAL_STAVE_ALIASES_MAP,
    ...BASE_SYMBOL_MAP,
}
const BASE_SYMBOL_MAP_WITH_PREFERRED_ALIASES_FOR_DEBUGGING_ENTRIES = Object.entries(
    BASE_SYMBOL_MAP_WITH_PREFERRED_ALIASES_FOR_DEBUGGING,
) as Array<[unknown, Symbol]> as Array<[Code & Word, Symbol]>

const computeDebugCodeFromUnicode = (unicode: Unicode & Word): Code & Word => {
    const codeEntry = BASE_SYMBOL_MAP_WITH_PREFERRED_ALIASES_FOR_DEBUGGING_ENTRIES
        .find((codeEntry: [Code & Word, Symbol]): boolean => {
            const [_, symbol] = codeEntry
            const {unicode: symbolUnicode} = symbol

            return symbolUnicode === unicode
        })

    if (!codeEntry) return "??" as Code & Word

    const [code, _] = codeEntry

    return code
}

const sumAdvancesForDebugging = (codeSentence: Code & Sentence): Code & Sentence => {
    return codeSentence
        .replace(/24; 6; 1;/g, "31;")
        .replace(/24; 6;/g, "30;")
        .replace(/24; 4; 1;/g, "29;")
        .replace(/24; 4;/g, "28;")
        .replace(/24; 2; 1;/g, "27;")
        .replace(/24; 2;/g, "26;")
        .replace(/24; 1;/g, "25;")
        .replace(/16; 8;/g, "24;")
        .replace(/16; 6; 1;/g, "23;")
        .replace(/16; 6;/g, "22;")
        .replace(/16; 4; 1;/g, "21;")
        .replace(/16; 4;/g, "20;")
        .replace(/16; 2; 1;/g, "19;")
        .replace(/16; 2;/g, "18;")
        .replace(/16; 1;/g, "17;")
        .replace(/12; 2; 1;/g, "15;")
        .replace(/12; 2;/g, "14;")
        .replace(/12; 1;/g, "13;")
        .replace(/10; 1;/g, "11;")
        .replace(/8; 1;/g, "9;")
        .replace(/6; 1;/g, "7;")
        .replace(/4; 1;/g, "5;")
        .replace(/2; 1;/g, "3;") as Code & Sentence
}

const computeCodeSentenceFromUnicodeSentence = (unicodeSentence: Unicode & Sentence): Code & Sentence => {
    const unicodeWords = unicodeSentence.split(BLANK) as Array<Unicode & Word>

    const codeWords: Array<Code & Word> = unicodeWords.map(computeDebugCodeFromUnicode)
    const codeSentence = joinWords(...codeWords)

    return sumAdvancesForDebugging(codeSentence)
}

export {
    computeCodeSentenceFromUnicodeSentence,
}
