import {BLANK, Io, Sentence} from "@sagittal/general"
import {DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_SIZE} from "../constants"
import {prepareCodesToBeHumanReadableAsEncodedQueryParams} from "./human"
import {Initial} from "./types"

const WEB_APP_URL = "https://staffcode.sagittal.org/"

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
    // TODO: CLEAN, READY TO GO: UI GLOBALS
    //  Would it be better if we just stored these things in a central state rather than tried to figure it out
    //  By reaching into all these UI components?
    //  - You'd also include references to ui components so you wouldn't have to pass them around so much etc
    //  - And it might be the case that they are only relevant to the package variant

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
    copyLinkButton.textContent = "Copy link"
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
