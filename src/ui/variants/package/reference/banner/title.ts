import {INTRO_TO_STAFF_CODE_LINK} from "../../../../../../bin"
import pkg from "../../../../../../package.json"

const STAFF_CODE_ABOUT = `
StaffCode version ${pkg.version}<br>
by Douglas Blumeyer<br>
and Dave Keenan<br>
<a target="_blank" href='${INTRO_TO_STAFF_CODE_LINK}'>Intro to StaffCode</a>
`

const buildSiteTitle = (): HTMLSpanElement => {
    const siteTitle = document.createElement("span")
    siteTitle.classList.add("sc-title")
    siteTitle.textContent = "StaffCode"

    const siteAbout = document.createElement("div")
    siteAbout.classList.add("sc-about")
    siteAbout.innerHTML = STAFF_CODE_ABOUT
    siteTitle.appendChild(siteAbout)

    return siteTitle
}

export {
    buildSiteTitle,
}
