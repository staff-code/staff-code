import {BLANK, Html, Word} from "@sagittal/general"
import {ReferenceRow} from "../../../../../bin"
import {computeUnicodeLiteral, Unicode} from "../../../../translate"
import {setupCodeCell} from "./code"
import {EMPTY_CODE} from "./constants"
import {EXCLUDED_CODES} from "./exceptions"

const suppressEmoji = (unicode: Unicode & Word): Html =>
    `&#x${computeUnicodeLiteral(unicode).replace(/U\+/, BLANK).toLowerCase()};&#xfe0e;` as Html

const buildSectionTable = (sectionData: ReferenceRow[]): HTMLTableElement => {
    const table = document.createElement("table")

    sectionData.forEach(([unicode, code, mnemonic]: ReferenceRow): void => {
        if (EXCLUDED_CODES[code]) return

        const row = table.insertRow()

        const unicodeCell = row.insertCell()
        unicodeCell.innerHTML = suppressEmoji(unicode)
        row.appendChild(unicodeCell)

        const codeCell = row.insertCell()
        setupCodeCell(codeCell, unicode, code)
        if (code === EMPTY_CODE) row.classList.add("no-code")
        row.appendChild(codeCell)

        const mnemonicCell = row.insertCell()
        mnemonicCell.innerHTML = mnemonic
        row.appendChild(mnemonicCell)
    })

    return table
}

export {
    buildSectionTable,
}
