import {Id, Name} from "@sagittal/general"
import {Explanation, Parenthetical, Section} from "../../../../../bin"

const buildSectionIntroLeftHalf = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
    parenthetical: Parenthetical,
    sectionLink: string,
): HTMLDivElement => {
    const sectionIntroLeftHalf = document.createElement("div")

    const sectionHeading = document.createElement("h3")
    sectionHeading.textContent = sectionName
    sectionIntroLeftHalf.appendChild(sectionHeading)

    const sectionParenthetical = document.createElement("span")
    sectionParenthetical.textContent = parenthetical
    sectionIntroLeftHalf.appendChild(sectionParenthetical)

    const sectionSmuflLink = document.createElement("a")
    sectionSmuflLink.textContent = "SMuFL reference"
    sectionSmuflLink.href = sectionLink || `https://w3c.github.io/smufl/gitbook/tables/${sectionId}`
    sectionSmuflLink.target = "_blank"
    sectionIntroLeftHalf.appendChild(sectionSmuflLink)

    return sectionIntroLeftHalf
}

const buildSectionIntro = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
    parenthetical: Parenthetical,
    sectionLink: string,
): HTMLDivElement => {
    const sectionIntro = document.createElement("div")
    sectionIntro.classList.add("sc-section-intro")

    const sectionIntroLeftHalf = buildSectionIntroLeftHalf(sectionId, sectionName, parenthetical, sectionLink)
    sectionIntro.appendChild(sectionIntroLeftHalf)

    const backToTopLink = document.createElement("a")
    backToTopLink.href = "#top"
    backToTopLink.textContent = "↑ back to top"
    sectionIntro.appendChild(backToTopLink)

    return sectionIntro
}

const buildSectionTitle = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
    parenthetical: Parenthetical,
    sectionLink: string,
    explanation: Explanation,
): HTMLDivElement => {
    const sectionTitle = document.createElement("div")

    const sectionAnchor = document.createElement("a")
    sectionAnchor.id = sectionId
    sectionTitle.appendChild(sectionAnchor)

    const sectionIntro = buildSectionIntro(sectionId, sectionName, parenthetical, sectionLink)
    sectionTitle.appendChild(sectionIntro)

    const explanationDiv = document.createElement("div")
    explanationDiv.classList.add("sc-section-explanation")
    explanationDiv.innerHTML = explanation
    sectionTitle.appendChild(explanationDiv)

    return sectionTitle
}

export {
    buildSectionTitle,
}
