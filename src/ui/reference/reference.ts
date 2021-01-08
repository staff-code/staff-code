import {computeKeyPath, isUndefined, Name, sort, Word} from "@sagittal/general"
import {Code, SMuFL_ABBREVIATION_ALIASES_MAP, SMuFL_MAP, Unicode} from "../../translate"
import {DEFAULT_FONT} from "../fonts"
import {transferInputToDisplay} from "../transfer"
import {StaffCodeCallback, StaffCodeOptions} from "../types"
import ranges from "./ranges.json"
import {RangeData} from "./types"

const SMuFL_ABBREVIATION_ALIASES_ENTRIES =
    Object.entries(SMuFL_ABBREVIATION_ALIASES_MAP) as Array<[Code & Word, Unicode & Word]>

const getAbbreviation = (unicode: Unicode & Word): Code & Word => {
    const abbreviationEntry = SMuFL_ABBREVIATION_ALIASES_ENTRIES
        .find(([abbreviationCode, abbreviationUnicode]: [Code & Word, Unicode & Word]): boolean => {
            return abbreviationUnicode === unicode
        })

    if (isUndefined(abbreviationEntry)) throw new Error(`Did not find abbreviation code for ${unicode}.`)

    const [abbreviationCode, abbreviationUnicode] = abbreviationEntry

    return abbreviationCode
}

const buildRangeTable = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    rangeData: RangeData,
    callback?: StaffCodeCallback,
): HTMLTableElement => {
    const {glyphs} = rangeData

    const table = document.createElement("table")
    table.style.borderCollapse = "collapse"

    glyphs.forEach((glyph: Name<Unicode>): void => {
        const unicode = SMuFL_MAP[glyph]
        const code = getAbbreviation(unicode)

        const row = table.insertRow()
        row.addEventListener("click", (): void => {
            input.value = input.value.match(/\s$/) ?
                `${input.value}${code}` :
                `${input.value} ${code}`
            transferInputToDisplay(root, {callback})
        })
        row.style.cursor = "pointer"

        const symbolCell = row.insertCell()
        symbolCell.innerHTML = unicode
        symbolCell.style.border = "1px solid"
        symbolCell.style.padding = "2px 5px"
        symbolCell.style.fontFamily = DEFAULT_FONT
        symbolCell.style.width = "3em"
        symbolCell.style.textAlign = "center"
        row.appendChild(symbolCell)

        const codeCell = row.insertCell()
        codeCell.innerHTML = code
        codeCell.style.border = "1px solid"
        codeCell.style.padding = "2px"
        row.appendChild(codeCell)

        const fullGlyphNameCell = row.insertCell()
        fullGlyphNameCell.innerHTML = glyph
        fullGlyphNameCell.style.border = "1px solid"
        fullGlyphNameCell.style.padding = "2px 5px"
        row.appendChild(fullGlyphNameCell)
    })

    return table
}

let referenceBuilt = false

const buildReference = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    {callback}: StaffCodeOptions,
): HTMLDivElement => {
    referenceBuilt = true

    // TODO: CLEAN REFERENCE CODE
    //  - if you want to not load this until you click (learn how to chunk in webpack), this isn't going to work
    //  - and the RangeData type no have to have underscores in its keys (maybe can go down to only range_start & end?)
    //  - and is there any way to not have to have a click handler for every single row in each table?
    //  - also it doesn't seem to insert where your cursor is, only at the end

    const reference = document.createElement("div")

    const rangeEntries = Object.entries(ranges) as Array<[string, RangeData]>

    const instructions = document.createElement("span")
    instructions.innerHTML = "Click any row to insert that code."
    reference.appendChild(instructions)

    const tocTitle = document.createElement("h2")
    tocTitle.innerHTML = "SMuFL ranges"
    reference.appendChild(tocTitle)

    const toc = document.createElement("ul")
    reference.appendChild(toc)

    sort(rangeEntries, {by: computeKeyPath(1, "range_start")})

    rangeEntries.forEach(([rangeKey, rangeData]: [string, RangeData]): void => {
        const rangeLink = document.createElement("a")
        rangeLink.id = rangeKey
        reference.appendChild(rangeLink)

        const title = document.createElement("h3")
        title.innerHTML = rangeData.description
        title.style.display = "inline-block"
        reference.appendChild(title)

        const backToTopLink = document.createElement("a")
        backToTopLink.href = "#top"
        backToTopLink.innerHTML = "↑ back to top"
        backToTopLink.style.display = "inline-block"
        backToTopLink.style.paddingLeft = "30px"
        reference.appendChild(backToTopLink)

        const table = buildRangeTable(root, input, rangeData, callback)
        reference.appendChild(table)

        const tocItem = document.createElement("li")
        toc.appendChild(tocItem)

        const tocLink = document.createElement("a")
        tocLink.href = `#${rangeKey}`
        tocLink.innerHTML = rangeData.description
        tocItem.appendChild(tocLink)
    })

    return reference
}

export {
    buildReference,
    referenceBuilt,
}
