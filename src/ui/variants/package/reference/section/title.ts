import {BLANK, Id, Link, Name, sentenceCaseToKebabCase} from "@sagittal/general"
import {
    BASICS_SECTION_ID,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID,
    Explanation,
    LEGER_LINES_SUPPLEMENT_SECTION_ID,
    Parenthetical,
    Section,
} from "../../../../../../bin"

const replaceDiacriticizedCharsWithUndiacriticizedCounterparts = (str: string): string =>
    str.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")

const computeSectionInfoLink = (sectionInfoLink: Link, sectionName: Name<Section>): Link => {
    if (sectionInfoLink) return sectionInfoLink

    const processedSectionName = replaceDiacriticizedCharsWithUndiacriticizedCounterparts(
        sentenceCaseToKebabCase(sectionName),
    )
        .replace(/[()]/g, "")

    return `https://w3c.github.io/smufl/latest/tables/${processedSectionName}` as Link
}

const buildSectionInfoAnchor = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
    parenthetical: Parenthetical,
    sectionInfoLink: Link,
): HTMLAnchorElement => {
    const sectionInfoAnchor = document.createElement("a")
    sectionInfoAnchor.textContent = sectionId === BASICS_SECTION_ID ?
        "Introduction to StaffCode" :
        (
            sectionId === LEGER_LINES_SUPPLEMENT_SECTION_ID
            || sectionId === COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID
        ) ?
            "" :
            "SMuFL reference"
    sectionInfoAnchor.href = computeSectionInfoLink(sectionInfoLink, sectionName)
    sectionInfoAnchor.target = "_blank"

    return sectionInfoAnchor
}

const buildSectionIntro = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
    parenthetical: Parenthetical,
    sectionInfoLink: Link,
): HTMLDivElement => {
    const sectionIntro = document.createElement("div")
    sectionIntro.classList.add("sc-section-intro")

    const sectionHeading = document.createElement("h3")
    sectionHeading.textContent = sectionName
    sectionIntro.appendChild(sectionHeading)

    if (parenthetical !== BLANK) {
        const sectionParenthetical = document.createElement("span")
        sectionParenthetical.textContent = parenthetical
        sectionIntro.appendChild(sectionParenthetical)
    }

    const sectionInfoAnchor = buildSectionInfoAnchor(sectionId, sectionName, parenthetical, sectionInfoLink)
    sectionIntro.appendChild(sectionInfoAnchor)

    return sectionIntro
}

const buildSectionTitle = (
    sectionId: Id<Section>,
    sectionName: Name<Section>,
    parenthetical: Parenthetical,
    sectionInfoLink: Link,
    explanation: Explanation,
): HTMLDivElement => {
    const sectionTitle = document.createElement("div")
    sectionTitle.classList.add("sc-section-title")

    const sectionAnchor = document.createElement("a")
    sectionAnchor.classList.add("sc-section-anchor")
    sectionAnchor.id = sectionId
    sectionTitle.appendChild(sectionAnchor)

    const sectionIntro = buildSectionIntro(sectionId, sectionName, parenthetical, sectionInfoLink)
    sectionTitle.appendChild(sectionIntro)

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
    computeSectionInfoLink,
}
