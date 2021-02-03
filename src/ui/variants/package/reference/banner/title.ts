import {buildSiteAboutTriggeringScrim} from "./about"

const buildSiteTitle = (): HTMLSpanElement => {
    const siteTitle = document.createElement("span")
    siteTitle.classList.add("sc-title")
    siteTitle.textContent = "StaffCode"

    const siteAboutTriggeringScrim = buildSiteAboutTriggeringScrim()
    siteTitle.appendChild(siteAboutTriggeringScrim)

    return siteTitle
}

export {
    buildSiteTitle,
}
