import {isBrowserMobile} from "@sagittal/general"
import {components} from "../../globals"

const buildTocWrapper = (): HTMLDivElement => {
    const tocWrapper = document.createElement("div")

    const tocTitle = document.createElement("h3")
    // TODO: I like "Symbol categories" (instead of SMuFL sections")
    //  Keep the (not SMuFL) parentheticals, and the "SMuFL" in the reference links, though?
    //  I'm worried because if it opens right onto the commands,
    //  Then there's still going to be the word "SMuFL" on the page the first thing you open the reference.
    tocTitle.innerHTML = "SMuFL sections"
    tocWrapper.appendChild(tocTitle)

    const instructions = document.createElement("span")
    instructions.textContent = `(${isBrowserMobile() ? "Tap" : "Click"} to insert code)`
    tocWrapper.appendChild(instructions)

    const toc = document.createElement("ul")
    tocWrapper.appendChild(toc)
    components.referenceToc = toc

    return tocWrapper
}

export {
    buildTocWrapper,
}
