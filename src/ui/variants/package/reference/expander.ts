import {isUndefined} from "@sagittal/general"
import {INTRODUCTION_TO_STAFF_CODE_LINK} from "../../../../../bin"
import pkg from "../../../../../package.json"
import {components, staffCodeConfig} from "../globals"
import {setStaffCodeCookie} from "../initial"
import {Initial} from "../types"

const STAFF_CODE_ABOUT_TOOLTIP_TEXT = `
StaffCode version ${pkg.version}<br>
by Douglas Blumeyer and Dave Keenan<br>
<a target="_blank" href='${INTRODUCTION_TO_STAFF_CODE_LINK}'>Introduction to StaffCode</a>
`

const STAFF_CODE_ABOUT_TOOLTIP = `<div class="sc-tooltip">${STAFF_CODE_ABOUT_TOOLTIP_TEXT}</div>`

const STAFF_CODE_ABOUT = `<span class="sc-about">StaffCode${STAFF_CODE_ABOUT_TOOLTIP}</span>`

const buildReferenceExpander = (): HTMLDetailsElement => {
    const {initial: {referenceOpen: initialReferenceOpen}} = staffCodeConfig

    const referenceExpander = document.createElement("details")
    components.referenceExpander = referenceExpander

    const summary = document.createElement("summary")
    summary.innerHTML = `Reference${STAFF_CODE_ABOUT}`
    referenceExpander.appendChild(summary)

    const topLink = document.createElement("a")
    topLink.id = "top"
    summary.appendChild(topLink)

    if (initialReferenceOpen) {
        import("./reference")
            .then(({buildReference}: {buildReference: () => HTMLDivElement}): void => {
                referenceExpander.setAttribute("open", "open")
                const reference = buildReference()
                referenceExpander.appendChild(reference)
            })
    }

    referenceExpander.addEventListener("click", async (): Promise<void> => {
        if (referenceExpander.hasAttribute("open")) {
            setStaffCodeCookie(Initial.REFERENCE_OPEN, "false")
        } else {
            setStaffCodeCookie(Initial.REFERENCE_OPEN, "true")
            referenceExpander.style.cursor = "progress"
            summary.style.cursor = "progress"
        }

        const {buildReference}: {buildReference: () => HTMLDivElement} =
            await import("./reference")

        if (!isUndefined(components.reference)) {
            referenceExpander.style.cursor = "auto"
            summary.style.cursor = "pointer"
            return
        }

        const reference = buildReference()
        referenceExpander.appendChild(reference)

        referenceExpander.style.cursor = "auto"
        summary.style.cursor = "pointer"
    })

    return referenceExpander
}

export {
    buildReferenceExpander,
}
