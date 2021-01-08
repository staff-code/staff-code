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

    const summary = document.createElement("summary")
    summary.innerHTML = "Reference"
    summary.style.cursor = "pointer"
    referenceLink.appendChild(summary)

    const topLink = document.createElement("a")
    topLink.id = "top"
    summary.appendChild(topLink)

    // TODO, CLEAN, DO MORE STYLES AS A STYLESHEET, NOT EXPENSIVELY ON EACH ELEMENT INDIVIDUALLY:
    //  Probably do for each cell or like, everything in the app too?
    const css = "table tr:hover{ background-color: #eeeeee } details[open]{ height: 300px }"
    const style = document.createElement("style")
    style.appendChild(document.createTextNode(css))
    document.getElementsByTagName("head")[0].appendChild(style)

    if (initialReferenceOpen) {
        // TODO: FEATURE IMPROVE, INCLUDE SPINNER
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


        // todo should URL put stuff into cookies upon load?
        //  and like this also set stuff in URL bar? like everywhere we do stuff like this, should do both?
        //  no wait you only do the URL params when you click copy link, d'uh
        //  but i still think a question remains about whether from the URL stuff should set cookies. maybe yes.

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
