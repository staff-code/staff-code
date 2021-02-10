import {INTRODUCTION_TO_STAFF_CODE_LINK} from "../section"
import versionJson from "./version.json"

const VERSION = versionJson.version

const STAFF_CODE_ABOUT = `
<a target="_blank" href="${INTRODUCTION_TO_STAFF_CODE_LINK}">Introduction to StaffCode</a><br>
<br>
StaffCode version ${VERSION}<br>
by Douglas Blumeyer<br>
and Dave Keenan.<br>
A product of the <a target="_blank" href="https://sagittal.org/">Sagittal</a><br>
microtonal notation project.<br>
<a target="_blank" href="https://forum.sagittal.org/viewforum.php?f=22">Questions or feedback?</a>
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
