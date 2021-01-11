import {FontName} from "@sagittal/general"
import {Section} from "../../../../../bin"
import {components} from "../globals"
import {loadGoogleFont} from "./fonts"
import {handleReferenceClick} from "./handlers"
import referenceJson from "./reference.json"
import {appendSection} from "./section"

const buildReference = (): HTMLDivElement => {
    loadGoogleFont("Roboto Mono" as FontName)
    loadGoogleFont("Roboto" as FontName)

    const reference = document.createElement("div")
    reference.style.padding = "10px"
    components.reference = reference

    const instructions = document.createElement("span")
    instructions.textContent = "Click any row to insert that code."
    reference.appendChild(instructions)

    const tocTitle = document.createElement("h2")
    tocTitle.textContent = "SMuFL sections"
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
