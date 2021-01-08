import {StaffCodeOptions} from "../types"
import {BuildReference} from "./types"

const buildReferenceLink = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    {callback}: StaffCodeOptions,
): HTMLDivElement => {
    const referenceLinkWrapper = document.createElement("div")

    const topLink = document.createElement("a")
    topLink.id = "top"
    referenceLinkWrapper.appendChild(topLink)

    const referenceLink = document.createElement("details")
    referenceLink.style.width = "550px"
    referenceLink.style.overflowY = "auto"
    referenceLink.style.border = "1px solid"
    referenceLink.style.marginBottom = "10px"
    referenceLinkWrapper.appendChild(referenceLink)

    const summary = document.createElement("summary")
    summary.innerHTML = "Reference"
    summary.style.cursor = "pointer"
    referenceLink.appendChild(summary)

    // TODO, CLEAN, DO MORE STYLES AS A STYLESHEET, NOT EXPENSIVELY ON EACH ELEMENT INDIVIDUALLY:
    //  Probably do for each cell or like, everything in the app too?
    const css = "table tr:hover{ background-color: #eeeeee } details[open]{ height: 300px }"
    const style = document.createElement("style")
    style.appendChild(document.createTextNode(css))
    document.getElementsByTagName("head")[0].appendChild(style)

    if (new URLSearchParams(window.location.search).get("reference") === "open") {
        import("./reference")
            .then(({buildReference}: {buildReference: BuildReference}): void => {
                referenceLink.setAttribute("open", "open")
                const reference = buildReference(root, input, {callback})
                referenceLink.appendChild(reference)
            })
    }

    referenceLink.addEventListener("click", async (): Promise<void> => {
        const {referenceBuilt, buildReference}: {referenceBuilt: boolean, buildReference: BuildReference} =
            await import("./reference")

        if (referenceBuilt) {
            return
        }

        const reference = buildReference(root, input, {callback})
        referenceLink.appendChild(reference)
    })

    return referenceLinkWrapper
}

export {
    buildReferenceLink,
}
