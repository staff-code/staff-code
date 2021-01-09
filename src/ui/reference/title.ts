import {Name} from "@sagittal/general"
import {Section} from "../../../bin"

const buildSectionTitle = (sectionName: Name<Section>): HTMLDivElement => {
    const sectionTitle = document.createElement("div")

    const sectionLink = document.createElement("a")
    sectionLink.id = sectionName
    sectionTitle.appendChild(sectionLink)

    const visibleSectionTitleElementsWrapper = document.createElement("div")
    visibleSectionTitleElementsWrapper.style.display = "flex"
    visibleSectionTitleElementsWrapper.style.alignItems = "center"
    visibleSectionTitleElementsWrapper.style.justifyContent = "space-between"
    sectionTitle.appendChild(visibleSectionTitleElementsWrapper)

    const sectionHeading = document.createElement("h3")
    sectionHeading.innerHTML = sectionName
    visibleSectionTitleElementsWrapper.appendChild(sectionHeading)

    const backToTopLink = document.createElement("a")
    backToTopLink.href = "#top"
    backToTopLink.innerHTML = "↑ back to top"
    backToTopLink.style.minWidth = "100px"
    visibleSectionTitleElementsWrapper.appendChild(backToTopLink)

    return sectionTitle
}

export {
    buildSectionTitle,
}
