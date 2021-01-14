import {INTRO_TO_STAFF_CODE_LINK} from "../../../../../bin"
import pkg from "../../../../../package.json"
import {components} from "../globals"
import {handleReferenceExpanderClick} from "./expand"

const STAFF_CODE_ABOUT = `
StaffCode version ${pkg.version}<br>
by Douglas Blumeyer and Dave Keenan<br>
<a target="_blank" href='${INTRO_TO_STAFF_CODE_LINK}'>Intro to StaffCode</a>
`

const buildReferenceBanner = (): HTMLDivElement => {
    const referenceBanner = document.createElement("div")
    referenceBanner.classList.add("sc-reference-banner")

    const referenceExpander = document.createElement("span")
    components.referenceExpander = referenceExpander
    referenceExpander.classList.add("sc-reference-expander")
    referenceExpander.innerHTML = `<img src="https://raw.githubusercontent.com/Keyamoon/IcoMoon-Free/master/SVG/285-play3.svg"/>Reference`
    referenceExpander.addEventListener("click", handleReferenceExpanderClick)
    referenceBanner.appendChild(referenceExpander)

    const siteTitle = document.createElement("span")
    siteTitle.classList.add("sc-title")
    siteTitle.textContent = "StaffCode"
    referenceBanner.appendChild(siteTitle)

    const siteAbout = document.createElement("div")
    siteAbout.classList.add("sc-about")
    siteAbout.innerHTML = STAFF_CODE_ABOUT
    siteTitle.appendChild(siteAbout)

    return referenceBanner
}

export {
    buildReferenceBanner,
}
