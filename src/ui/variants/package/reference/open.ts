import {components} from "../globals"

const isReferenceOpen = (): boolean =>
    components.referenceWrapper.classList.contains("open")

const openReference = (): void =>
    components.referenceWrapper.classList.add("open")

const closeReference = (): void =>
    components.referenceWrapper.classList.remove("open")

export {
    isReferenceOpen,
    openReference,
    closeReference,
}
