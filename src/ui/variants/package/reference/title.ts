import {Id, Name} from "@sagittal/general"
import {Section} from "../../../../../bin"

const buildSectionTitle = (sectionId: Id<Section>, sectionName: Name<Section>): HTMLDivElement => {
    const sectionTitle = document.createElement("div")
    sectionTitle.classList.add("sc-section-title")

    const sectionAnchor = document.createElement("a")
    sectionAnchor.id = sectionName
    sectionTitle.appendChild(sectionAnchor)

    const visibleSectionTitleElementsWrapper = document.createElement("div")
    sectionTitle.appendChild(visibleSectionTitleElementsWrapper)

    const sectionSmuflLink = document.createElement("a")
    sectionSmuflLink.href = `http://www.smufl.org/version/latest/range/${sectionId}`
    sectionSmuflLink.target = "_blank"
    visibleSectionTitleElementsWrapper.appendChild(sectionSmuflLink)
    const sectionHeading = document.createElement("h3")
    sectionHeading.textContent = sectionName
    sectionSmuflLink.appendChild(sectionHeading)

    const backToTopLink = document.createElement("a")
    backToTopLink.href = "#top"
    backToTopLink.textContent = "↑ back to top"
    backToTopLink.style.minWidth = "100px"
    visibleSectionTitleElementsWrapper.appendChild(backToTopLink)

    return sectionTitle
}

export {
    buildSectionTitle,
}
