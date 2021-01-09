import {isUndefined} from "@sagittal/general"
import {components, staffCodeOptions} from "../globals"
import {setStaffCodeCookie} from "../initial"
import {Initial} from "../types"

const buildReferenceExpander = (): HTMLDetailsElement => {
    const {initial: {referenceOpen: initialReferenceOpen}} = staffCodeOptions

    const referenceExpander = document.createElement("details")
    referenceExpander.style.width = "550px"
    referenceExpander.style.overflowY = "auto"
    referenceExpander.style.border = "1px solid"
    referenceExpander.style.marginBottom = "10px"
    components.referenceExpander = referenceExpander

    // TODO: FEATURE IMPROVE, READY TO GO: STAFF CODE TITLE AND ABOUT
    //  Somehow also include StaffCode as a title sort of thing to the right of the reference,
    //  Which upon clicking shows an about text, which links to the instructions post
    /*
    StaffCode version XX.XX.XXX
    by Douglas Blumeyer and Dave Keenan
    Introduction to StaffCode (link: https://forum.sagittal.org/viewtopic.php?p=3192#p3192)
     */

    const summary = document.createElement("summary")
    summary.innerHTML = "Reference"
    summary.style.cursor = "pointer"
    referenceExpander.appendChild(summary)

    const topLink = document.createElement("a")
    topLink.id = "top"
    summary.appendChild(topLink)

    // TODO: CLEAN, READY TO GO: DO MORE STYLES AS A STYLESHEET, NOT EXPENSIVELY ON EACH ELEMENT INDIVIDUALLY
    //  Probably do for each cell or like, everything in the app too?
    const css = "table tr:hover{ background-color: #eeeeee } details[open]{ height: 300px }"
    const style = document.createElement("style")
    style.appendChild(document.createTextNode(css))
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

        // TODO: FEATURE IMPROVE, BLOCKED: UPDATE COOKIES WITH URL PARAMS
        //  Should params not only take precedence over cookies on initial page load, but also replace them?
        //  Blocked on waiting for Dave's opinion

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
