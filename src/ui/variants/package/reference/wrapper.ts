import {components, staffCodeConfig} from "../globals"
import {buildReferenceBanner, openReference} from "./banner"

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
                referenceBanner.style.borderBottom = "none"
            })
    }

    return referenceWrapper
}

export {
    buildReferenceWrapper,
}
