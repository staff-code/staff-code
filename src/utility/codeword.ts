import {BLANK} from "@sagittal/general"
import {Code, Codeword, CODE_MAP, Symbol, Unicode} from "../symbols"

const CODE_MAP_ENTRIES = Object.entries(CODE_MAP) as Array<[unknown, Symbol]> as Array<[Code, Symbol]>

const computeCodewordFromCode = (code: Code): Codeword =>
    Code[code] as Codeword

const computeCodewordFromUnicode = (unicodeWord: Unicode): Codeword => {
    const codeEntry = CODE_MAP_ENTRIES.find((codeEntry: [Code, Symbol]): boolean => {
        const [_, symbol] = codeEntry
        const {unicode} = symbol

        return unicode === unicodeWord
    })

    if (!codeEntry) return "(unknown)" as Codeword

    const [code, _] = codeEntry

    return computeCodewordFromCode(code)
}

const computeCodewordsFromUnicode = (unicodeSentence: Unicode): Codeword[] => {
    const unicodeWords = unicodeSentence.split(BLANK) as Unicode[]

    return unicodeWords.map(computeCodewordFromUnicode)
}

export {
    computeCodewordFromCode,
    computeCodewordsFromUnicode,
}
