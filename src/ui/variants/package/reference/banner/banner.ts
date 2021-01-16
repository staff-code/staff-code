import {components} from "../../globals"
import {buildReferenceExpander} from "./expander"
import {buildSiteTitle} from "./title"

const buildReferenceBanner = (): HTMLDivElement => {
    const referenceBanner = document.createElement("div")
    referenceBanner.classList.add("sc-reference-banner")
    components.referenceBanner = referenceBanner

    const referenceExpander = buildReferenceExpander()
    components.referenceExpander = referenceExpander
    referenceBanner.appendChild(referenceExpander)

    const backToTopLink = document.createElement("a")
    backToTopLink.classList.add("sc-back-to-top")
    backToTopLink.href = "#top"
    backToTopLink.textContent = "Back to top"
    referenceBanner.appendChild(backToTopLink)

    const siteTitle = buildSiteTitle()
    referenceBanner.appendChild(siteTitle)

    return referenceBanner
}

export {
    buildReferenceBanner,
}
