import {Section} from "../../../bin"
import {uiState} from "../globals"
import {StaffCodeOptions} from "../types"
import {handleReferenceClick} from "./click"
import referenceJson from "./reference.json"
import {appendSection} from "./section"

const buildReference = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    {callback}: StaffCodeOptions,
): HTMLDivElement => {
    uiState.referenceBuilt = true

    const reference = document.createElement("div")
    reference.style.padding = "10px"

    const instructions = document.createElement("span")
    instructions.innerHTML = "Click any row to insert that code."
    reference.appendChild(instructions)

    const tocTitle = document.createElement("h2")
    tocTitle.innerHTML = "SMuFL sections"
    reference.appendChild(tocTitle)

    const toc = document.createElement("ul")
    reference.appendChild(toc)

    const sections = referenceJson as Section[]
    sections.forEach((section: Section): void => {
        appendSection(section, root, input, reference, toc)
    })

    reference.addEventListener("click", (event: MouseEvent): void => {
        handleReferenceClick(event, root, input, {callback})
    })

    return reference
}

export {
    buildReference,
}
