import {components} from "../../globals"

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
