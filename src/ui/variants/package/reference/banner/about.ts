import {INTRO_TO_STAFF_CODE_LINK} from "../../../../../../bin"
import versionJson from "./version.json"

const VERSION = versionJson.version

// TODO: But maybe we should still have a separate link explicitly to the subforum (for SC feedback),
//  Even if the Introduction post was inside it, just to make it clear and inviting.

const STAFF_CODE_ABOUT = `
<a target="_blank" href="${INTRO_TO_STAFF_CODE_LINK}">Introduction to StaffCode</a><br>
<br>
StaffCode version ${VERSION}<br>
by Douglas Blumeyer<br>
and Dave Keenan.<br>
A product of the <a target="_blank" href="https://sagittal.org/">Sagittal</a><br>
microtonal notation project.<br>
`

const buildSiteAboutTriggeringScrim = (): HTMLDivElement => {
    const siteAboutTriggeringScrim = document.createElement("div")
    siteAboutTriggeringScrim.classList.add("sc-about-trigger")

    const siteAbout = document.createElement("span")
    siteAbout.classList.add("sc-about")
    siteAbout.innerHTML = STAFF_CODE_ABOUT
    siteAboutTriggeringScrim.appendChild(siteAbout)

    return siteAboutTriggeringScrim
}

export {
    buildSiteAboutTriggeringScrim,
}
