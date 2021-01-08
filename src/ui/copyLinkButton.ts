import {BLANK, Io, Sentence} from "@sagittal/general"
import {WEB_APP_URL} from "./constants"
import {prepareCodesToBeHumanReadableAsEncodedQueryParams} from "./human"
import {DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_SIZE} from "./initial"
import {Initial} from "./types"

const onWebApp = (): boolean => {
    const getUrl = window.location
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1]

    return baseUrl === WEB_APP_URL
}

const handleCopyLinkClick = (
    input: HTMLTextAreaElement,
    sizeSpinner?: HTMLInputElement,
    lineSpinner?: HTMLInputElement,
    referenceLink?: HTMLDetailsElement,
): void => {
    // todo: would it be better if we just stored these things in a central state rather than tried to figure it out
    //  by reaching into all these UI components?

    const encodedCodes = encodeURIComponent(
        prepareCodesToBeHumanReadableAsEncodedQueryParams(input.value as Io & Sentence),
    )
    const initialCodesParam = `&${Initial.CODES}=${encodedCodes}`

    const initialSizeParam = sizeSpinner ?
        sizeSpinner.value === `${DEFAULT_INITIAL_SIZE}` ? BLANK : `&${Initial.SIZE}=${sizeSpinner.value}` :
        BLANK

    const initialLineParam = lineSpinner ?
        lineSpinner.value === `${DEFAULT_INITIAL_LINE}` ? BLANK : `&${Initial.LINE}=${lineSpinner.value}` :
        BLANK

    const initialReferenceOpenParam = referenceLink ?
        referenceLink.hasAttribute("open") ? `&${Initial.REFERENCE_OPEN}=true` : BLANK :
        BLANK

    const initialParams = `?${initialSizeParam}${initialLineParam}${initialReferenceOpenParam}${initialCodesParam}`

    if (onWebApp()) {
        history.pushState(undefined, BLANK, initialParams)
    }

    navigator.clipboard.writeText(`${WEB_APP_URL}${initialParams}`)
}


const buildCopyLinkButton = (
    input: HTMLTextAreaElement,
    sizeSpinner?: HTMLInputElement,
    lineSpinner?: HTMLInputElement,
    referenceLink?: HTMLDetailsElement,
): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy Link"
    copyLinkButton.style.margin = "2px"
    copyLinkButton.style.cursor = "pointer"
    copyLinkButton.addEventListener("click", (): void => {
        handleCopyLinkClick(input, sizeSpinner, lineSpinner, referenceLink)
    })

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
