import {isUndefined} from "@sagittal/general"
import {version} from "../../../../../package.json"
import {components, staffCodeOptions} from "../globals"
import {setStaffCodeCookie} from "../initial"
import {Initial} from "../types"

const CSS = `
table tr:hover { 
    background-color: #eeeeee;
}

details[open] { 
    height: 300px;
}

.sc-about {
    float: right; 
    font-weight: bold;
    position: relative;
}

.sc-about .sc-tooltip {
    display: none;
    background: white;
    border: solid 1px;
    font-weight: normal;
    font-size: 0.75em;
    padding: 0.5em;
    position: absolute;
    right: 0;
    width: 200px;
    text-align: right;
}

details[open] .sc-about:hover .sc-tooltip {
    display: block;
}
`

const STAFF_CODE_ABOUT_TOOLTIP_TEXT = `
StaffCode version ${version}<br>
by Douglas Blumeyer and Dave Keenan<br>
<a target="_blank" href='https://forum.sagittal.org/viewtopic.php?p=3192#p3192'>Introduction to StaffCode</a>
`

const STAFF_CODE_ABOUT_TOOLTIP = `<div class="sc-tooltip">${STAFF_CODE_ABOUT_TOOLTIP_TEXT}</div>`

const STAFF_CODE_ABOUT = `<span class="sc-about">StaffCode${STAFF_CODE_ABOUT_TOOLTIP}</span>`

const buildReferenceExpander = (): HTMLDetailsElement => {
    const {initial: {referenceOpen: initialReferenceOpen}} = staffCodeOptions

    const referenceExpander = document.createElement("details")
    referenceExpander.style.width = "550px"
    referenceExpander.style.overflowY = "auto"
    referenceExpander.style.borderTop = "1px solid"
    referenceExpander.style.marginBottom = "10px"
    components.referenceExpander = referenceExpander

    const summary = document.createElement("summary")
    summary.innerHTML = `Reference${STAFF_CODE_ABOUT}`
    summary.style.cursor = "pointer"
    referenceExpander.appendChild(summary)

    const topLink = document.createElement("a")
    topLink.id = "top"
    summary.appendChild(topLink)

    // TODO: CLEAN, READY TO GO: DO MORE STYLES AS A STYLESHEET, NOT EXPENSIVELY ON EACH ELEMENT INDIVIDUALLY
    //  Probably do for each cell or like, everything in the app too?
    const style = document.createElement("style")
    style.appendChild(document.createTextNode(CSS))
    document.getElementsByTagName("head")[0].appendChild(style)

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
