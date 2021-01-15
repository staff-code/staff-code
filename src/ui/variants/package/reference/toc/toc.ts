import {isBrowserMobile} from "@sagittal/general"
import {components} from "../../globals"

// TODO: For all the Section-name links in the ToC of the Reference, would you please do
// text-indent: -1em; padding: 0 1em;
// or equivalent. i.e. Outdent them so we can see where each new link starts, when they are word-wrapped on a phone.

// TODO: I only mention the following idea on the off-chance that it actually makes things easier to code and maintain, not because I have a great longing for it.
//
// When I saw what you could do with the controls below the input field, I dragged the input field right, to make it the same width as the open reference on my desktop machine, and I thought it looked good. And so I thought: Why not make this the initial state, whenever there is sufficient window width?
//
// But then I closed the reference, and of course the word "StaffCode" moved back to the left and shattered the illusion, and so I then thought: Why not keep the word "StaffCode" right-aligned with the input field in the same way that the "Download image" button is. And then: Why not do the same with the open reference?
//
// And then: Wait a minute. Why do we need to be able to manually change the width of the input field at all? Why don't we just make the whole app (with input field, "Download image" button, "StaffCode", and Reference, always right-aligned) fit itself to the width of the window/screen, as the reference already does, when on a narrow screen or window, and have a maximum width equal to the current maximum width of the open reference, when in a wide window?
//
// We only need to be able to manually change the height of the input field.


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
