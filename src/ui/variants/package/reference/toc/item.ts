import {Id, Name} from "@sagittal/general"
import {Section} from "../../../../../../bin"
import {computeParenthetical} from "../section"

const computeTocAnchorText = (sectionId: Id<Section>, sectionName: Name<Section>): string => {
    const parenthetical = computeParenthetical(sectionId)

    return parenthetical ? `${sectionName} ${parenthetical}` : sectionName
}

const buildTocItem = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
): HTMLLIElement => {
    const tocItem = document.createElement("li")

    const tocAnchor = document.createElement("a")
    tocAnchor.href = `#${sectionId}`
    tocAnchor.textContent = computeTocAnchorText(sectionId, sectionName)
    tocItem.appendChild(tocAnchor)

    return tocItem
}

export {
    buildTocItem,
}
