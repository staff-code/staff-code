import {handleReferenceExpanderClick} from "./handlers"

const REFERENCE_EXPANDER_TOOLTIP = `
Open for a list of all<br>
available musical symbols<br>
which you can click to insert.
`

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

    const referenceExpanderTooltip = document.createElement("span")
    referenceExpanderTooltip.classList.add("sc-expander-tooltip")
    referenceExpanderTooltip.innerHTML = REFERENCE_EXPANDER_TOOLTIP
    referenceExpander.appendChild(referenceExpanderTooltip)

    return referenceExpander
}

export {
    buildReferenceExpander,
}
