import {INTRO_TO_STAFF_CODE_LINK} from "../../../../../../bin"
import versionJson from "./version.json"

// @ts-ignore
const VERSION = versionJson.version

const STAFF_CODE_ABOUT = `
StaffCode version ${VERSION}<br>
by Douglas Blumeyer<br>
and Dave Keenan.<br>
A product of the <a target="_blank" href="https://sagittal.org/">Sagittal</a><br>
microtonal notation project.<br>
<a target="_blank" href="${INTRO_TO_STAFF_CODE_LINK}">Introduction to StaffCode</a>
`

const buildSiteTitle = (): HTMLSpanElement => {
    const siteTitle = document.createElement("span")
    siteTitle.classList.add("sc-title")
    siteTitle.textContent = "StaffCode"

    const siteAboutTriggeringScrim = document.createElement("div")
    siteAboutTriggeringScrim.classList.add("sc-about-trigger")
    siteTitle.appendChild(siteAboutTriggeringScrim)

    const siteAbout = document.createElement("span")
    siteAbout.classList.add("sc-about")
    siteAbout.innerHTML = STAFF_CODE_ABOUT
    siteAboutTriggeringScrim.appendChild(siteAbout)

    return siteTitle
}

export {
    buildSiteTitle,
}
