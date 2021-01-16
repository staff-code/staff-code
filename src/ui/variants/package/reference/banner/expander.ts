import {handleReferenceExpanderClick} from "./handlers"

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
