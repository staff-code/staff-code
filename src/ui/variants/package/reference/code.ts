import {computeKeyPath, isUndefined, RecordKey, sort, Word} from "@sagittal/general"
import {ALIASES_MAP, Code, Unicode} from "../../../../translate"

const ALIASES_ENTRIES = Object.entries(ALIASES_MAP) as Array<[Code & Word, Unicode & Word]>

const UNICODE_ALIASES = ALIASES_ENTRIES.reduce(
    (
        unicodeAliases: Record<RecordKey<Unicode & Word>, Array<Code & Word>>,
        [code, unicode]: [Code & Word, Unicode & Word],
    ): Record<RecordKey<Unicode & Word>, Array<Code & Word>> => {
        if (isUndefined(unicodeAliases[unicode])) {
            unicodeAliases[unicode] = [] as Array<Code & Word>
        }

        unicodeAliases[unicode].push(code)
        sort(unicodeAliases[unicode], {by: computeKeyPath("length")})

        return unicodeAliases
    },
    {} as Record<RecordKey<Unicode & Word>, Array<Code & Word>>,
) as Record<RecordKey<Unicode & Word>, Array<Code & Word>>

const CODE_ALIASES: Record<RecordKey<Code & Word>, Array<Code & Word>> = {
    "nt4": ["nt", "nt4"] as Array<Code & Word>,
}

// TODO: Give only one Sagispeak code per symbol.
//  The shortest one, or if they are the same length, the one most likely to be pronounceable by English-speakers.
//  "sl" rather than "sr", "ch" rather than "kh". You might reorder them as required in your original source, so that
//  StaffCode can just use the first one.
//  - I think I've already got a primary Sagispeak map and a secondary one,
//  So I could exclude the secondary map from the reference code cell aliases.

// TODO: I think /||\ and \!!/ should be the click-to-insert (ungreyed) codes, despite being longer than shr and flt.
//  Likewise @. and l., not i and o.
//  Can't argue with that. I'll try to figure out the least obnoxious way to realize that.

const setupCodeCell = (codeCell: HTMLTableCellElement, unicode: Unicode & Word, code: Code & Word): void => {
    const aliases = UNICODE_ALIASES[unicode] || CODE_ALIASES[code]
    if (isUndefined(aliases)) {
        codeCell.textContent = code
        codeCell.setAttribute("sc-code", code)
    } else {
        aliases.forEach((alias: Code & Word, index: number): void => {
            const aliasSpan = document.createElement("span")
            aliasSpan.textContent = alias
            if (index !== 0) {
                aliasSpan.style.paddingLeft = "1em"
                aliasSpan.style.color = "#888888"
            }
            codeCell.appendChild(aliasSpan)
        })
        codeCell.setAttribute("sc-code", aliases[0])
    }
}

export {
    setupCodeCell,
}
