import {computeKeyPath, isUndefined, Name, sort, Word} from "@sagittal/general"
// tslint:disable-next-line:no-reaching-imports
import ranges from "../../vendor/ranges.json"
import {Code, SMuFL_ABBREVIATION_ALIASES_MAP, SMuFL_MAP, Unicode} from "../translate"
import {DEFAULT_FONT} from "./fonts"
import {transferInputToDisplay} from "./transfer"
import {RangeData, StaffCodeCallback, StaffCodeOptions} from "./types"

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

const buildReference = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    {callback}: StaffCodeOptions,
): HTMLDetailsElement => {
    // TODO: CLEAN REFERENCE CODE
    //  - if you want to not load this until you click (learn how to chunk in webpack), this isn't going to work
    //  - and you shouldn't import directly from the JSON in vendor
    //  - and the RangeData type shouldn't have to have underscores in its keys
    //  - and is there any way to not have to have a click handler for every single row in each table?

    const rangeEntries = Object.entries(ranges) as Array<[string, RangeData]>

    const reference = document.createElement("details")
    reference.style.width = "550px"
    reference.style.overflowY = "auto"
    reference.style.border = "1px solid"
    reference.style.marginBottom = "10px"

    const topLink = document.createElement("a")
    topLink.id = "top"
    reference.appendChild(topLink)

    const summary = document.createElement("summary")
    summary.innerHTML = "Reference"
    reference.appendChild(summary)

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

    // TODO, CLEAN, DO MORE STYLES AS A STYLESHEET, NOT EXPENSIVELY ON EACH ELEMENT INDIVIDUALLY:
    //  Probably do for each cell or like, everything in the app too?
    const css = "table tr:hover{ background-color: #eeeeee } details[open]{ height: 300px }"
    const style = document.createElement("style")
    style.appendChild(document.createTextNode(css))
    document.getElementsByTagName("head")[0].appendChild(style)

    if (new URLSearchParams(window.location.search).get("reference") === "open") {
        reference.setAttribute("open", "open")
    }

    return reference
}

export {
    buildReference,
}
