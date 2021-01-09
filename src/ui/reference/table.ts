import {ReferenceRow} from "../../../bin"
import {DEFAULT_FONT} from "../fonts"

const buildSectionTable = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    sectionData: ReferenceRow[],
): HTMLTableElement => {
    const table = document.createElement("table")
    table.style.borderCollapse = "collapse"

    sectionData.forEach(([unicode, code, glyphName]: ReferenceRow): void => {
        const row = table.insertRow()

        row.style.cursor = "pointer"

        const unicodeCell = row.insertCell()
        unicodeCell.innerHTML = unicode
        unicodeCell.style.border = "1px solid"
        unicodeCell.style.padding = "2px 5px"
        unicodeCell.style.fontFamily = DEFAULT_FONT
        unicodeCell.style.width = "3em"
        unicodeCell.style.textAlign = "center"
        row.appendChild(unicodeCell)

        const codeCell = row.insertCell()
        codeCell.innerHTML = code
        codeCell.style.border = "1px solid"
        codeCell.style.padding = "2px"
        row.appendChild(codeCell)

        const glyphNameCell = row.insertCell()
        glyphNameCell.innerHTML = glyphName
        glyphNameCell.style.border = "1px solid"
        glyphNameCell.style.padding = "2px 5px"
        row.appendChild(glyphNameCell)
    })

    return table
}

export {
    buildSectionTable,
}
