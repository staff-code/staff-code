import {Id, Name} from "@sagittal/general"
import {Explanation, Parenthetical, Section} from "../../../../../bin"

const buildSectionTitle = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
    parenthetical: Parenthetical,
    sectionLink: string,
    explanation: Explanation,
): HTMLDivElement => {
    const sectionTitle = document.createElement("div")
    sectionTitle.classList.add("sc-section-title")

    const sectionAnchor = document.createElement("a")
    sectionAnchor.id = sectionId
    sectionTitle.appendChild(sectionAnchor)

    const visibleSectionTitleElementsWrapper = document.createElement("div")
    sectionTitle.appendChild(visibleSectionTitleElementsWrapper)

    const sectionSmuflLink = document.createElement("a")
    sectionSmuflLink.href = sectionLink || `https://w3c.github.io/smufl/gitbook/tables/${sectionId}`
    sectionSmuflLink.target = "_blank"
    visibleSectionTitleElementsWrapper.appendChild(sectionSmuflLink)
    const sectionHeading = document.createElement("h3")
    sectionHeading.textContent = sectionName
    sectionSmuflLink.appendChild(sectionHeading)
    const sectionParenthetical = document.createElement("span")
    sectionParenthetical.textContent = parenthetical
    sectionSmuflLink.appendChild(sectionParenthetical)

    const backToTopLink = document.createElement("a") // todo: no loner workinger
    backToTopLink.href = "#top"
    backToTopLink.textContent = "↑ back to top"
    visibleSectionTitleElementsWrapper.appendChild(backToTopLink)

    const explanationDiv = document.createElement("span")
    explanationDiv.innerHTML = explanation
    sectionTitle.appendChild(explanationDiv)

    return sectionTitle
}

export {
    buildSectionTitle,
}
