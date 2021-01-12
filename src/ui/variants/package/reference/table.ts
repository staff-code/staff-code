import {BLANK} from "@sagittal/general"
import {ReferenceRow} from "../../../../../bin"
import {setupCodeCell} from "./code"
import {EXCLUDED_CODES} from "./exceptions"

const buildSectionTable = (sectionData: ReferenceRow[]): HTMLTableElement => {
    const table = document.createElement("table")

    sectionData.forEach(([unicode, code, mnemonic]: ReferenceRow): void => {
        if (EXCLUDED_CODES[code]) return

        const row = table.insertRow()

        const unicodeCell = row.insertCell()
        unicodeCell.textContent = unicode
        row.appendChild(unicodeCell)

        const codeCell = row.insertCell()
        setupCodeCell(codeCell, unicode, code)
        if (code === BLANK) row.classList.add("no-code")
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
