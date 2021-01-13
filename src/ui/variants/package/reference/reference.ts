import {FontName} from "@sagittal/general"
import {Section} from "../../../../../bin"
import {loadGoogleFont} from "../fonts"
import {components} from "../globals"
import {handleReferenceTableClick} from "./insert"
import referenceJson from "./reference.json"
import {appendSection} from "./section"

const buildReference = (): HTMLDivElement => {
    loadGoogleFont("Roboto Mono" as FontName)
    loadGoogleFont("Lucida Sans" as FontName)

    const reference = document.createElement("div")
    reference.classList.add("sc-reference")
    components.reference = reference

    const topLink = document.createElement("a")
    topLink.id = "top"
    reference.appendChild(topLink)

    const tocTitleWrapper = document.createElement("div")
    reference.appendChild(tocTitleWrapper)

    const tocTitle = document.createElement("h3")
    tocTitle.innerHTML = "SMuFL sections"
    tocTitleWrapper.appendChild(tocTitle)

    const instructions = document.createElement("span")
    instructions.textContent = "(Click to insert code)"
    tocTitleWrapper.appendChild(instructions)

    const toc = document.createElement("ul")
    reference.appendChild(toc)
    components.toc = toc

    const sections = referenceJson as Section[]
    sections.forEach(appendSection)

    reference.addEventListener("click", handleReferenceTableClick)

    return reference
}

export {
    buildReference,
}
