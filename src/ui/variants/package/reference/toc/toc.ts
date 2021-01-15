import {isBrowserMobile} from "@sagittal/general"
import {components} from "../../globals"

const buildTocWrapper = (): HTMLDivElement => {
    const tocWrapper = document.createElement("div")

    const tocTitle = document.createElement("h3")
    tocTitle.innerHTML = "SMuFL sections"
    tocWrapper.appendChild(tocTitle)

    const instructions = document.createElement("span")
    instructions.textContent = `(${isBrowserMobile() ? "Tap" : "Click"} to insert code)`
    tocWrapper.appendChild(instructions)

    const toc = document.createElement("ul")
    tocWrapper.appendChild(toc)
    components.toc = toc

    return tocWrapper
}

export {
    buildTocWrapper,
}
