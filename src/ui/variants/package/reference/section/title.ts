import {BLANK, Id, Name} from "@sagittal/general"
import {Section} from "../../../../../../bin"
import {computeExplanation} from "./explanations"
import {computeSectionInfoLinkAndTextContent} from "./infoLinks"
import {computeParenthetical} from "./parentheticals"

const buildSectionInfoAnchor = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
): HTMLAnchorElement => {
    const sectionInfoAnchor = document.createElement("a")

    const {text, link} = computeSectionInfoLinkAndTextContent(sectionId, sectionName)
    sectionInfoAnchor.textContent = text
    sectionInfoAnchor.href = link
    sectionInfoAnchor.target = "_blank"

    return sectionInfoAnchor
}

const buildSectionIntro = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
): HTMLDivElement => {
    const sectionIntro = document.createElement("div")
    sectionIntro.classList.add("sc-section-intro")

    const sectionHeading = document.createElement("h3")
    sectionHeading.textContent = sectionName
    sectionIntro.appendChild(sectionHeading)

    const parenthetical = computeParenthetical(sectionId)
    if (parenthetical !== BLANK) {
        const sectionParenthetical = document.createElement("span")
        sectionParenthetical.textContent = parenthetical
        sectionIntro.appendChild(sectionParenthetical)
    }

    const sectionInfoAnchor = buildSectionInfoAnchor(sectionId, sectionName)
    sectionIntro.appendChild(sectionInfoAnchor)

    return sectionIntro
}

const buildSectionTitle = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
): HTMLDivElement => {
    const sectionTitle = document.createElement("div")
    sectionTitle.classList.add("sc-section-title")

    const sectionAnchor = document.createElement("a")
    sectionAnchor.classList.add("sc-section-anchor")
    sectionAnchor.id = sectionId
    sectionTitle.appendChild(sectionAnchor)

    const sectionIntro = buildSectionIntro(sectionId, sectionName)
    sectionTitle.appendChild(sectionIntro)

    const explanation = computeExplanation(sectionId)
    if (explanation !== BLANK) {
        const explanationDiv = document.createElement("div")
        explanationDiv.classList.add("sc-section-explanation")
        explanationDiv.innerHTML = explanation
        sectionTitle.appendChild(explanationDiv)
    }

    return sectionTitle
}

export {
    buildSectionTitle,
    computeSectionInfoLinkAndTextContent,
}
