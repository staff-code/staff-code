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

    const backToTopAnchor = document.createElement("a")
    backToTopAnchor.classList.add("sc-back-to-top")
    backToTopAnchor.href = "#top"
    backToTopAnchor.textContent = "Back to top"
    referenceBanner.appendChild(backToTopAnchor)

    const siteTitle = buildSiteTitle()
    referenceBanner.appendChild(siteTitle)

    return referenceBanner
}

export {
    buildReferenceBanner,
}
