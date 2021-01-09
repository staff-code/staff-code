import {Name} from "@sagittal/general"
import {Section} from "../../../bin"

const buildTocItem = (sectionName: Name<Section>): HTMLLIElement => {
    const tocItem = document.createElement("li")

    const tocLink = document.createElement("a")
    tocLink.href = `#${sectionName}`
    tocLink.innerHTML = sectionName
    tocItem.appendChild(tocLink)

    return tocItem
}

export {
    buildTocItem,
}
