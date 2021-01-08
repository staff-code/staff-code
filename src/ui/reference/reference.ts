import {BLANK, SPACE} from "@sagittal/general"
import {ReferenceRow, SectionName} from "../../../bin"
import {DEFAULT_FONT} from "../fonts"
import {transferInputToDisplay} from "../transfer"
import {StaffCodeCallback, StaffCodeOptions} from "../types"
import referenceJson from "./reference.json"

const buildRangeTable = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    sectionData: ReferenceRow[],
    callback?: StaffCodeCallback,
): HTMLTableElement => {
    const table = document.createElement("table")
    table.style.borderCollapse = "collapse"

    sectionData.forEach(([unicode, code, glyphName]: ReferenceRow): void => {
        const row = table.insertRow()
        // TODO: CLEAN, READY TO GO: ONE CLICK HANDLER FOR WHOLE THING, USE TARGET SOMEHOW TO FIGURE OUT WHICH ROW
        row.addEventListener("click", (): void => {
            const textCursorPosition = input.selectionStart

            const upToSelection = input.value.slice(0, textCursorPosition)
            const maybePrecedingSpaceBuffer = upToSelection[upToSelection.length - 1] === SPACE ? BLANK : SPACE
            const afterSelection = input.value.slice(textCursorPosition)
            const maybeSucceedingSpaceBuffer = afterSelection[0] === SPACE ? BLANK : SPACE

            input.value = `${upToSelection}${maybePrecedingSpaceBuffer}${code}${maybeSucceedingSpaceBuffer}${afterSelection}`

            transferInputToDisplay(root, {callback})
        })
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

// TODO: CLEAN, BLOCKED: BREAK REFERENCE DOWN INTO MODULES
//  - I say "blocked" because I just don't think it's mature enough yet to pre-emptively break down
//  It's still helpful for me to have pretty much everything in one big place

let referenceBuilt = false

const buildReference = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    {callback}: StaffCodeOptions,
): HTMLDivElement => {
    referenceBuilt = true

    const reference = document.createElement("div")
    reference.style.padding = "10px"

    const instructions = document.createElement("span")
    instructions.innerHTML = "Click any row to insert that code."
    reference.appendChild(instructions)

    const tocTitle = document.createElement("h2")
    tocTitle.innerHTML = "SMuFL ranges"
    reference.appendChild(tocTitle)

    const toc = document.createElement("ul")
    reference.appendChild(toc)

    const referenceSections = referenceJson as Array<[SectionName, ReferenceRow[]]>
    referenceSections.forEach(([sectionName, sectionData]: [SectionName, ReferenceRow[]]): void => {
        const rangeLink = document.createElement("a")
        rangeLink.id = sectionName
        reference.appendChild(rangeLink)

        const titleWrapper = document.createElement("div")
        reference.appendChild(titleWrapper)
        titleWrapper.style.display = "flex"
        titleWrapper.style.alignItems = "center"
        titleWrapper.style.justifyContent = "space-between"

        const title = document.createElement("h3")
        title.innerHTML = sectionName
        titleWrapper.appendChild(title)

        const backToTopLink = document.createElement("a")
        backToTopLink.href = "#top"
        backToTopLink.innerHTML = "↑ back to top"
        backToTopLink.style.minWidth = "100px"
        titleWrapper.appendChild(backToTopLink)

        const table = buildRangeTable(root, input, sectionData, callback)
        reference.appendChild(table)

        const tocItem = document.createElement("li")
        toc.appendChild(tocItem)

        const tocLink = document.createElement("a")
        tocLink.href = `#${sectionName}`
        tocLink.innerHTML = sectionName
        tocItem.appendChild(tocLink)
    })

    return reference
}

export {
    buildReference,
    referenceBuilt,
}
