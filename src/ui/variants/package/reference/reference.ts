import {Section} from "../../../../../bin"
import {components} from "../globals"
import {handleReferenceTableClick, handleReferenceTableUndo} from "./handlers"
import referenceJson from "./reference.json"
import {appendSection} from "./section"

// TODO: if this works, extract to general/browser
const isBrowserMobile = (): boolean => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
    ]

    return toMatch.some((toMatchItem: RegExp): boolean => !!navigator.userAgent.match(toMatchItem))
}

const buildReference = (): HTMLDivElement => {
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
    instructions.textContent = `(${isBrowserMobile() ? "Tap" : "Click"} to insert code)`
    tocTitleWrapper.appendChild(instructions)

    const toc = document.createElement("ul")
    reference.appendChild(toc)
    components.toc = toc

    const sections = referenceJson as Section[]
    sections.forEach(appendSection)

    reference.addEventListener("click", handleReferenceTableClick)
    document.addEventListener("keydown", handleReferenceTableUndo)

    return reference
}

export {
    buildReference,
}
