import {ReferenceRow} from "../../../../../bin"
import {setupCodeCell} from "./code"
import {EMPTY_CODE} from "./constants"
import {EXCLUDED_CODES} from "./exceptions"

const buildSectionTable = (sectionData: ReferenceRow[]): HTMLTableElement => {
    const table = document.createElement("table")

    sectionData.forEach(([unicode, code, mnemonic]: ReferenceRow): void => {
        if (EXCLUDED_CODES[code]) return

        const row = table.insertRow()

        const unicodeCell = row.insertCell()
        // TODO: BUG, BLOCKED: WEIRD FLOATERS IN GLYPH CELLS
        //  I think this is making some weird thing show up
        //  But blocked on Dave's feedback
        //  When done, make this easier to find by helper constant or something at least referencing Emoji
        unicodeCell.innerHTML = `${unicode}&#xfe0e`
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
