import {BLANK, Io, Sentence} from "@sagittal/general"
import {DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_REFERENCE_OPEN, DEFAULT_INITIAL_SIZE} from "../../constants"
import {components} from "../../globals"
import {prepareCodesToBeHumanReadableAsEncodedQueryParams} from "./human"
import {Initial} from "./types"

const WEB_APP_URL = "https://staffcode.sagittal.org/"

const codeRunningInStaffCodeWebApp = (): boolean => {
    const getUrl = window.location
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1]

    return baseUrl === WEB_APP_URL
}

const computeInitialCodesParam = (): string => {
    const encodedCodes = encodeURIComponent(
        prepareCodesToBeHumanReadableAsEncodedQueryParams(components.input.value as Io & Sentence),
    )

    return `&${Initial.CODES}=${encodedCodes}`
}

const computeInitialSizeParam = (): string =>
    !components.sizeSpinner || components.sizeSpinner.value === `${DEFAULT_INITIAL_SIZE}` ?
        BLANK :
        `&${Initial.SIZE}=${components.sizeSpinner.value}`

const computeInitialLineParam = (): string =>
    !components.lineSpinner || components.lineSpinner.value === `${DEFAULT_INITIAL_LINE}` ?
        BLANK :
        `&${Initial.LINE}=${components.lineSpinner.value}`

const computeInitialReferenceOpenParam = (): string =>
    !components.referenceLink || !components.referenceLink.hasAttribute("open") ?
        BLANK :
        `&${Initial.REFERENCE_OPEN}=true`

const computeInitialParams = (): string => {
    const initialCodesParam = computeInitialCodesParam()
    const initialSizeParam = computeInitialSizeParam()
    const initialLineParam = computeInitialLineParam()
    const initialReferenceOpenParam = computeInitialReferenceOpenParam()

    return `?${initialSizeParam}${initialLineParam}${initialReferenceOpenParam}${initialCodesParam}`
}

const handleCopyLinkClick = (): void => {
    const initialParams = computeInitialParams()

    if (codeRunningInStaffCodeWebApp()) {
        history.pushState(undefined, BLANK, initialParams)
    }

    navigator.clipboard.writeText(`${WEB_APP_URL}${initialParams}`)
}

const buildCopyLinkButton = (): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.style.margin = "2px"
    copyLinkButton.style.cursor = "pointer"
    copyLinkButton.addEventListener("click", handleCopyLinkClick)

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
