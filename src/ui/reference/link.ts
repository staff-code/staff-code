import {setStaffCodeCookie} from "../initial"
import {Initial} from "../types"
import {BuildReference, ReferenceOptions} from "./types"

const buildReferenceLink = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    {callback, initialReferenceOpen}: ReferenceOptions,
): HTMLDetailsElement => {
    const referenceLink = document.createElement("details")
    referenceLink.style.width = "550px"
    referenceLink.style.overflowY = "auto"
    referenceLink.style.border = "1px solid"
    referenceLink.style.marginBottom = "10px"

    // TODO: FEATURE IMPROVE, BLOCKED: STAFF CODE TITLE AND ABOUT
    //  Somehow also include StaffCode as a title sort of thing to the right of the reference,
    //  Which upon clicking shows an about text, which links to the instructions post
    //  - Blocked on waiting for Dave's copy

    const summary = document.createElement("summary")
    summary.innerHTML = "Reference"
    summary.style.cursor = "pointer"
    referenceLink.appendChild(summary)

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
        // TODO: FEATURE IMPROVE, READY TO GO: INCLUDE A LOADING SPINNER WHILE REFERENCE IS POPULATING
        import("./reference")
            .then(({buildReference}: {buildReference: BuildReference}): void => {
                referenceLink.setAttribute("open", "open")
                const reference = buildReference(root, input, {callback})
                referenceLink.appendChild(reference)
            })
    }

    referenceLink.addEventListener("click", async (): Promise<void> => {
        if (referenceLink.hasAttribute("open")) {
            setStaffCodeCookie(Initial.REFERENCE_OPEN, "false")
        } else {
            setStaffCodeCookie(Initial.REFERENCE_OPEN, "true")
        }

        const {referenceBuilt, buildReference}: {referenceBuilt: boolean, buildReference: BuildReference} =
            await import("./reference")


        // TODO: FEATURE IMPROVE, BLOCKED: UPDATE COOKIES WITH URL PARAMS
        //  Should params not only take precedence over cookies on initial page load, but also replace them?
        //  Blocked on waiting for Dave's opinion

        if (referenceBuilt) {
            return
        }

        const reference = buildReference(root, input, {callback})
        referenceLink.appendChild(reference)
    })

    return referenceLink
}

export {
    buildReferenceLink,
}
