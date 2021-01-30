import {handleReferenceExpanderClick} from "./handlers"

// TODO: Make intro tell about clicking in the reference.
//  I could also add a tooltip to the reference, letting you know you can open it to get insertable codes.

const buildReferenceExpander = (): HTMLSpanElement => {
    const referenceExpander = document.createElement("span")
    referenceExpander.classList.add("sc-reference-expander")
    referenceExpander.addEventListener("click", handleReferenceExpanderClick)

    const referenceExpanderIcon = document.createElement("span")
    referenceExpanderIcon.classList.add("sc-reference-expander-icon")
    referenceExpander.appendChild(referenceExpanderIcon)

    const referenceExpanderText = document.createElement("span")
    referenceExpanderText.textContent = "Reference"
    referenceExpander.appendChild(referenceExpanderText)

    return referenceExpander
}

export {
    buildReferenceExpander,
}
