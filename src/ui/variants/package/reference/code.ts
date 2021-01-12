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

const setupCodeCell = (codeCell: HTMLTableCellElement, unicode: Unicode & Word, code: Code & Word): void => {
    const aliases = UNICODE_ALIASES[unicode]
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
