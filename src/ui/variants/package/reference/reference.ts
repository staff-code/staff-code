import {Section} from "../../../../../bin"
import {components} from "../globals"
import {handleReferenceClick} from "./click"
import referenceJson from "./reference.json"
import {appendSection} from "./section"

const buildReference = (): HTMLDivElement => {
    const reference = document.createElement("div")
    reference.style.padding = "10px"
    components.reference = reference

    const instructions = document.createElement("span")
    instructions.innerHTML = "Click any row to insert that code."
    reference.appendChild(instructions)

    const tocTitle = document.createElement("h2")
    tocTitle.innerHTML = "SMuFL sections"
    reference.appendChild(tocTitle)

    const toc = document.createElement("ul")
    reference.appendChild(toc)
    components.toc = toc

    const sections = referenceJson as Section[]
    sections.forEach(appendSection)

    reference.addEventListener("click", handleReferenceClick)

    return reference
}

export {
    buildReference,
}
