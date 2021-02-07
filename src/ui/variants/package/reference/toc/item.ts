import {Id, Name} from "@sagittal/general"
import {Parenthetical, Section} from "../../../../../../bin"

const buildTocItem = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
    parenthetical: Parenthetical,
): HTMLLIElement => {
    const tocItem = document.createElement("li")

    const tocAnchor = document.createElement("a")
    tocAnchor.href = `#${sectionId}`
    tocAnchor.textContent = parenthetical ? `${sectionName} ${parenthetical}` : sectionName
    tocItem.appendChild(tocAnchor)

    return tocItem
}

export {
    buildTocItem,
}
