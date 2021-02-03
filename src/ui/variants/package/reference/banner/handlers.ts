import {components} from "../../globals"
import {closeReference, isReferenceOpen, openReference} from "./open"

const handleReferenceExpanderClick = (): void => {
    if (isReferenceOpen()) {
        closeReference()
    } else {
        components.referenceWrapper!.style.cursor = "progress"
        components.referenceExpander!.style.cursor = "progress"
        openReference().then((): void => {
            components.referenceWrapper!.style.cursor = "auto"
            components.referenceExpander!.style.cursor = "pointer"
        })
    }
}

export {
    handleReferenceExpanderClick,
}
