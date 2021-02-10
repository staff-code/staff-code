import {Section} from "../../../../../../bin"
import {components} from "../../globals"
import {buildTocItem} from "../toc"
import {buildSectionTable} from "./table"
import {buildSectionTitle} from "./title"

const appendSection = (section: Section): void => {
    const [sectionId, sectionName, sectionData] = section
    const {reference, referenceToc} = components

    const sectionTitle = buildSectionTitle(sectionId, sectionName)
    reference!.appendChild(sectionTitle)

    const table = buildSectionTable(sectionData)
    reference!.appendChild(table)

    const tocItem = buildTocItem(sectionId, sectionName)
    referenceToc!.appendChild(tocItem)
}

export {
    appendSection,
}
