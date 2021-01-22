import {isUndefined} from "@sagittal/general"
import {STANDARD_BORDER} from "../../constants"
import {components} from "../../globals"
import {setStaffCodeCookie} from "../../initial"
import {Initial} from "../../types"
import {closeReference, isReferenceOpen, openReference} from "./open"

const handleReferenceExpanderClick = async (): Promise<void> => {
    const {referenceWrapper, referenceExpander, referenceBanner} = components

    let shouldRemoveBannerBorderAfterReferenceLoads = false
    if (isReferenceOpen()) {
        closeReference()
        setStaffCodeCookie(Initial.REFERENCE_OPEN, "false")
        referenceBanner!.style.borderBottom = STANDARD_BORDER
    } else {
        openReference()
        setStaffCodeCookie(Initial.REFERENCE_OPEN, "true")
        referenceWrapper!.style.cursor = "progress"
        referenceExpander!.style.cursor = "progress"
        shouldRemoveBannerBorderAfterReferenceLoads = true
    }

    const {buildReference}: {buildReference: () => HTMLDivElement} =
        await import("../reference")

    if (shouldRemoveBannerBorderAfterReferenceLoads) {
        referenceBanner!.style.borderBottom = "none"
    }

    if (!isUndefined(components.reference)) {
        referenceWrapper!.style.cursor = "auto"
        referenceExpander!.style.cursor = "pointer"

        return
    }

    const reference = buildReference()
    referenceWrapper!.appendChild(reference)

    referenceWrapper!.style.cursor = "auto"
    referenceExpander!.style.cursor = "pointer"
}

export {
    handleReferenceExpanderClick,
}
