import {INTRO_TO_STAFF_CODE_LINK} from "../../../../../../bin"
import pkg from "../../../../../../package.json"

const STAFF_CODE_ABOUT = `
StaffCode version ${pkg.version}<br>
by Douglas Blumeyer<br>
and Dave Keenan<br>
<a target="_blank" href='${INTRO_TO_STAFF_CODE_LINK}'>Intro to StaffCode</a>
`

// TODO: Fat-fingers here, finds that it's easy to accidentally go to the Intro to StaffCode just by tapping the word
//  StaffCode to bring up the tooltip. A blank line at the end of the tooltip would fix that.
//  I also think the link should now use the full text "Introduction to StaffCode" in both places
//  (tooltip and Reference), now that it doesn't have to compete for space with a "Back to to top" link.
//  - And, in the tooltip, I think "StaffCode version 1.0.XXX" should be either (a) all on one line or
//  (b) have the line-break between "StaffCode" and "version 1.0.XXX".

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
