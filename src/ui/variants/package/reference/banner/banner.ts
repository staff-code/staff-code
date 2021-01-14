import {components} from "../../globals"
import {handleReferenceExpanderClick} from "./handlers"
import {buildSiteTitle} from "./title"

const buildReferenceBanner = (): HTMLDivElement => {
    const referenceBanner = document.createElement("div")
    referenceBanner.classList.add("sc-reference-banner")

    const referenceExpander = document.createElement("span")
    components.referenceExpander = referenceExpander
    referenceExpander.classList.add("sc-reference-expander")
    referenceExpander.innerHTML = `<img src="https://raw.githubusercontent.com/Keyamoon/IcoMoon-Free/master/SVG/285-play3.svg"/>Reference`
    referenceExpander.addEventListener("click", handleReferenceExpanderClick)
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
