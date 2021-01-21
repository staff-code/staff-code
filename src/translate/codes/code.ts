import {joinWords, Sentence, Word} from "@sagittal/general"
import {ACCIDENTAL_ALIASES_MAP, LINE_BREAK_ALIASES_MAP} from "./aliases"
import {BASE_GLYPH_MAP} from "./codes"
import {Code, Unicode} from "./types"
import {computeUnicodeForCode} from "./unicode"

const DEBUGGING_ONLY_ALIASES_MAP = {
    "sp": " ",
    "st8": computeUnicodeForCode("st5lnnr" as Code & Word),
    "st16": computeUnicodeForCode("st5ln" as Code & Word),
    "st24": computeUnicodeForCode("st5lnwd" as Code & Word),
    "up15": computeUnicodeForCode("stpsrs15" as Code & Word),
    "up14": computeUnicodeForCode("stpsrs14" as Code & Word),
    "up13": computeUnicodeForCode("stpsrs13" as Code & Word),
    "up12": computeUnicodeForCode("stpsrs12" as Code & Word),
    "up11": computeUnicodeForCode("stpsrs11" as Code & Word),
    "up10": computeUnicodeForCode("stpsrs10" as Code & Word),
    "up9": computeUnicodeForCode("stpsrs9" as Code & Word),
    "up8": computeUnicodeForCode("stpsrs8" as Code & Word),
    "up7": computeUnicodeForCode("stpsrs7" as Code & Word),
    "up6": computeUnicodeForCode("stpsrs6" as Code & Word),
    "up5": computeUnicodeForCode("stpsrs5" as Code & Word),
    "up4": computeUnicodeForCode("stpsrs4" as Code & Word),
    "up3": computeUnicodeForCode("stpsrs3" as Code & Word),
    "up2": computeUnicodeForCode("stpsrs2" as Code & Word),
    "up1": computeUnicodeForCode("stpsrs1" as Code & Word),
    "up0": computeUnicodeForCode("stpsrs0" as Code & Word),
    "dn1": computeUnicodeForCode("stpslr1" as Code & Word),
    "dn2": computeUnicodeForCode("stpslr2" as Code & Word),
    "dn3": computeUnicodeForCode("stpslr3" as Code & Word),
    "dn4": computeUnicodeForCode("stpslr4" as Code & Word),
    "dn5": computeUnicodeForCode("stpslr5" as Code & Word),
    "dn6": computeUnicodeForCode("stpslr6" as Code & Word),
    "dn7": computeUnicodeForCode("stpslr7" as Code & Word),
    "dn8": computeUnicodeForCode("stpslr8" as Code & Word),
    "dn9": computeUnicodeForCode("stpslr9" as Code & Word),
    "dn10": computeUnicodeForCode("stpslr10" as Code & Word),
    "dn11": computeUnicodeForCode("stpslr11" as Code & Word),
    "dn12": computeUnicodeForCode("stpslr12" as Code & Word),
    "dn13": computeUnicodeForCode("stpslr13" as Code & Word),
    "dn14": computeUnicodeForCode("stpslr14" as Code & Word),
    "dn15": computeUnicodeForCode("stpslr15" as Code & Word),
}

const BASE_GLYPH_MAP_WITH_PREFERRED_ALIASES_FOR_DEBUGGING = {
    ...DEBUGGING_ONLY_ALIASES_MAP,
    ...ACCIDENTAL_ALIASES_MAP,
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
