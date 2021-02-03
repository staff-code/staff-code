import {isUndefined} from "@sagittal/general"
import {BASICS_SECTION_ID} from "../../../../../../bin"
import {STANDARD_BORDER} from "../../constants"
import {components} from "../../globals"
import {setStaffCodeCookie} from "../../initial"
import {Initial} from "../../types"

const isReferenceOpen = (): boolean =>
    !!components.referenceWrapper && components.referenceWrapper.classList.contains("open")

const openReference = async (): Promise<void> => {
    components.referenceWrapper && components.referenceWrapper.classList.add("open")
    setStaffCodeCookie(Initial.REFERENCE_OPEN, "true")

    const {buildReference}: {buildReference: () => HTMLDivElement} =
        await import("../reference")

    if (isUndefined(components.reference)) {
        const reference = buildReference()
        components.referenceWrapper!.appendChild(reference)
    }

    components.referenceBanner!.style.borderBottom = "none"
    window.location.href = `#${BASICS_SECTION_ID}`
}

const closeReference = (): void => {
    components.referenceWrapper && components.referenceWrapper.classList.remove("open")
    setStaffCodeCookie(Initial.REFERENCE_OPEN, "false")

    components.referenceBanner!.style.borderBottom = STANDARD_BORDER
}

export {
    isReferenceOpen,
    openReference,
    closeReference,
}
