import {components, staffCodeConfig} from "../globals"
import {buildReferenceBanner} from "./banner"
import {openReference} from "./open"

const buildReferenceWrapper = (): HTMLDivElement => {
    const {initial: {referenceOpen: initialReferenceOpen}} = staffCodeConfig

    const referenceWrapper = document.createElement("div")
    referenceWrapper.classList.add("sc-reference-wrapper")
    components.referenceWrapper = referenceWrapper

    const referenceBanner = buildReferenceBanner()
    referenceWrapper.appendChild(referenceBanner)

    if (initialReferenceOpen) {
        import("./reference")
            .then(({buildReference}: {buildReference: () => HTMLDivElement}): void => {
                openReference()
                const reference = buildReference()
                referenceWrapper.appendChild(reference)
            })
    }

    return referenceWrapper
}

export {
    buildReferenceWrapper,
}
