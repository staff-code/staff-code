import {add, BLANK, RecordKey, Sentence, Unicode, Word} from "@sagittal/general"
import {
    ADVANCE_10_OCTALS,
    ADVANCE_11_OCTALS,
    ADVANCE_12_OCTALS,
    ADVANCE_13_OCTALS,
    ADVANCE_14_OCTALS,
    ADVANCE_15_OCTALS,
    ADVANCE_16_OCTALS,
    ADVANCE_1_OCTAL,
    ADVANCE_3_OCTALS,
    ADVANCE_5_OCTALS,
    ADVANCE_7_OCTALS,
    ADVANCE_9_OCTALS,
} from "../../codes"
import {Octals} from "./types"
import {computeAdvanceUnicode} from "./unicode"

const PRIMITIVE_ADVANCE_UNICODES_TO_OCTALS: Record<RecordKey<Unicode & Word>, Octals> = {
    [ADVANCE_1_OCTAL]: 1 as Octals,
    [ADVANCE_3_OCTALS]: 3 as Octals,
    [ADVANCE_5_OCTALS]: 5 as Octals,
    [ADVANCE_7_OCTALS]: 7 as Octals,
    [ADVANCE_9_OCTALS]: 9 as Octals,
    [ADVANCE_10_OCTALS]: 10 as Octals,
    [ADVANCE_11_OCTALS]: 11 as Octals,
    [ADVANCE_12_OCTALS]: 12 as Octals,
    [ADVANCE_13_OCTALS]: 13 as Octals,
    [ADVANCE_14_OCTALS]: 14 as Octals,
    [ADVANCE_15_OCTALS]: 15 as Octals,
    [ADVANCE_16_OCTALS]: 16 as Octals,
}

const collapseAdvances = (unicodeSentence: Unicode & Sentence): Unicode & Sentence => {
    const unicodesWithAdvancesCollapsed = [] as Array<Unicode & Word>

    const unicodes = Array.from(unicodeSentence) as Array<Unicode & Word>

    let currentAdvance = 0 as Octals
    unicodes.forEach((unicode: Unicode & Word): void => {
        const advanceMatch = PRIMITIVE_ADVANCE_UNICODES_TO_OCTALS[unicode]
        if (advanceMatch) {
            currentAdvance = add(currentAdvance, advanceMatch)
        } else if (currentAdvance > 0) {
            unicodesWithAdvancesCollapsed.push(computeAdvanceUnicode(currentAdvance) as Unicode as Unicode & Word)
            currentAdvance = 0 as Octals
            unicodesWithAdvancesCollapsed.push(unicode)
        } else {
            unicodesWithAdvancesCollapsed.push(unicode)
        }
    })
    if (currentAdvance > 0) {
        unicodesWithAdvancesCollapsed.push(computeAdvanceUnicode(currentAdvance) as Unicode as Unicode & Word)
    }

    return unicodesWithAdvancesCollapsed.join(BLANK) as Unicode & Sentence
}

export {
    collapseAdvances,
}
