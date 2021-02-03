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
        openReference().then()
    }

    return referenceWrapper
}

export {
    buildReferenceWrapper,
}
