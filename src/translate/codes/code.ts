import {BLANK, joinWords, Sentence, Word} from "@sagittal/general"
import {ACCIDENTAL_ALIASES_MAP, GENERIC_POSITION_ALIASES_MAP, LINE_BREAK_ALIASES_MAP} from "./aliases"
import {BASE_GLYPH_MAP} from "./codes"
import {Code, Unicode} from "./types"
import {computeUnicodeForCode} from "./unicode"

const DEBUGGING_ONLY_ALIASES_MAP = {
    "sp": " ",
    "st8": computeUnicodeForCode("st5lnnr" as Code & Word),
    "st16": computeUnicodeForCode("st5ln" as Code & Word),
    "st24": computeUnicodeForCode("st5lnwd" as Code & Word),
}

const BASE_GLYPH_MAP_WITH_PREFERRED_ALIASES_FOR_DEBUGGING = {
    ...DEBUGGING_ONLY_ALIASES_MAP,
    ...ACCIDENTAL_ALIASES_MAP,
    ...GENERIC_POSITION_ALIASES_MAP,
    ...LINE_BREAK_ALIASES_MAP,
    ...BASE_GLYPH_MAP,
}
const BASE_GLYPH_MAP_WITH_PREFERRED_ALIASES_FOR_DEBUGGING_ENTRIES = Object.entries(
    BASE_GLYPH_MAP_WITH_PREFERRED_ALIASES_FOR_DEBUGGING,
) as Array<[unknown, Unicode & Word]> as Array<[Code & Word, Unicode & Word]>

const debugCode = (unicode: Unicode & Word): Code & Word => {
    const codeEntry = BASE_GLYPH_MAP_WITH_PREFERRED_ALIASES_FOR_DEBUGGING_ENTRIES
        .find((codeEntry: [Code & Word, Unicode & Word]): boolean => {
            const [_, entryUnicode] = codeEntry

            return entryUnicode === unicode
        })

    if (!codeEntry) return "??" as Code & Word

    const [code, _] = codeEntry

    return code
}

const collapseAdvancesForDebugging = (codes: Array<Code & Word>): Array<Code & Word> => {
    const codesWithAdvancesCollapsed = [] as Array<Code & Word>

    let currentAdvance = 0
    codes.forEach((code: Code & Word): void => {
        const advanceMatch = code.match(/(\d+);/)
        if (advanceMatch) {
            currentAdvance = currentAdvance + parseInt(advanceMatch[1])
        } else if (currentAdvance > 0) {
            codesWithAdvancesCollapsed.push(`${currentAdvance};` as Code & Word)
            currentAdvance = 0
            codesWithAdvancesCollapsed.push(code)
        } else {
            codesWithAdvancesCollapsed.push(code)
        }
    })
    if (currentAdvance > 0) {
        codesWithAdvancesCollapsed.push(`${currentAdvance};` as Code & Word)
    }

    return codesWithAdvancesCollapsed
}

const debugCodeSentence = (unicodeSentence: Unicode & Sentence): Code & Sentence => {
    const unicodeWords = Array.from(unicodeSentence) as Array<Unicode & Word>

    const codes: Array<Code & Word> = unicodeWords.map(debugCode)
    const codesWithAdvancesCollapsed = collapseAdvancesForDebugging(codes)

    return joinWords(...codesWithAdvancesCollapsed)
}

export {
    debugCode,
    debugCodeSentence,
}
