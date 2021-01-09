import {Section} from "../../../bin"
import {buildSectionTable} from "./table"
import {buildSectionTitle} from "./title"
import {buildTocItem} from "./tocItem"

const appendSection = (
    [sectionName, sectionData]: Section,
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    reference: HTMLDivElement,
    toc: HTMLUListElement,
): void => {
    const sectionTitle = buildSectionTitle(sectionName)
    reference.appendChild(sectionTitle)

    const table = buildSectionTable(root, input, sectionData)
    reference.appendChild(table)

    const tocItem = buildTocItem(sectionName)
    toc.appendChild(tocItem)
}

export {
    appendSection,
}
