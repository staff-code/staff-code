import {Id, Name} from "@sagittal/general"
import {Parenthetical, Section} from "../../../../../bin"

const buildTocItem = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
    parenthetical: Parenthetical,
): HTMLLIElement => {
    const tocItem = document.createElement("li")

    const tocLink = document.createElement("a")
    tocLink.href = `#${sectionId}`
    tocLink.textContent = parenthetical ? `${sectionName} ${parenthetical}` : sectionName
    tocLink.addEventListener("click", (): void => window.scrollTo({top: 0}))
    tocItem.appendChild(tocLink)

    return tocItem
}

export {
    buildTocItem,
}
