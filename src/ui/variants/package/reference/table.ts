import {ReferenceRow} from "../../../../../bin"
import {EXCLUDED_GLYPH_NAMES} from "./exceptions"

const buildSectionTable = (sectionData: ReferenceRow[]): HTMLTableElement => {
    const table = document.createElement("table")

    sectionData.forEach(([unicode, code, glyphName]: ReferenceRow): void => {
        if (EXCLUDED_GLYPH_NAMES[glyphName]) return

        const row = table.insertRow()

        row.style.cursor = "pointer"

        const unicodeCell = row.insertCell()
        unicodeCell.textContent = unicode
        row.appendChild(unicodeCell)

        const codeCell = row.insertCell()
        codeCell.textContent = code
        row.appendChild(codeCell)

        const glyphNameCell = row.insertCell()
        glyphNameCell.textContent = glyphName
        row.appendChild(glyphNameCell)
    })

    return table
}

export {
    buildSectionTable,
}
