import {Section} from "../../../../../../bin"
import {components} from "../../globals"
import {buildTocItem} from "../toc"
import {buildSectionTable} from "./table"
import {buildSectionTitle} from "./title"

const appendSection = (section: Section): void => {
    const [sectionId, sectionName, parenthetical, sectionLink, explanation, sectionData] = section
    const {reference, toc} = components

    const sectionTitle = buildSectionTitle(sectionId, sectionName, parenthetical, sectionLink, explanation)
    reference.appendChild(sectionTitle)

    const table = buildSectionTable(sectionData)
    reference.appendChild(table)

    const tocItem = buildTocItem(sectionId, sectionName, parenthetical)
    toc.appendChild(tocItem)
}

export {
    appendSection,
}