import {BLANK, join, SPACE} from "@sagittal/general"
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

const BASE_SYMBOL_WITH_PREFERRED_ALIASES_FOR_DEBUGGING_MAP = {
    ...ACCIDENTAL_ALIASES_MAP,
    ...GENERIC_POSITION_ALIASES_MAP,
    ...LINE_BREAK_ALIASES_MAP,
    ...MANUAL_STAVE_ALIASES_MAP,
    ...BASE_SYMBOL_MAP,
}
const BASE_SYMBOL_WITH_PREFERRED_ALIASES_FOR_DEBUGGING_MAP_ENTRIES = Object.entries(
    BASE_SYMBOL_WITH_PREFERRED_ALIASES_FOR_DEBUGGING_MAP,
) as Array<[unknown, Symbol]> as Array<[Code, Symbol]>

const computeCodeFromUnicode = (unicodeWord: Unicode): Code => {
    const codeEntry = BASE_SYMBOL_WITH_PREFERRED_ALIASES_FOR_DEBUGGING_MAP_ENTRIES
        .find((codeEntry: [Code, Symbol]): boolean => {
            const [_, symbol] = codeEntry
            const {unicode} = symbol

            return unicode === unicodeWord
        })

    if (!codeEntry) return "??" as Code

    const [code, _] = codeEntry

    return code
}

const sumAdvancesForDebugging = (codeSentence: Code): Code => {
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
        .replace(/2; 1;/g, "3;") as Code
}

const computeCodesFromUnicode = (unicodeSentence: Unicode): Code => {
    const unicodeWords = unicodeSentence.split(BLANK) as Unicode[]

    // TODO: CODE, YEAH SEE, WE'VE GOT CODE WORDS. CODE SHOULD JUST BE THE ASPECT. WORD IS THE UNIT.
    const codeWords = unicodeWords.map(computeCodeFromUnicode)
    const codeSentence = join(codeWords, SPACE)

    return sumAdvancesForDebugging(codeSentence)
}

export {
    computeCodesFromUnicode,
}
