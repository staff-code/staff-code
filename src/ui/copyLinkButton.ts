import {BLANK} from "@sagittal/general"
import {WEB_APP_URL} from "./constants"
import {DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_SIZE} from "./initial"
import {Initial} from "./types"

const onWebApp = (): boolean => {
    const getUrl = window.location
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1]

    return baseUrl === WEB_APP_URL
}

// TODO: FEATURE IMPROVE, READY TO GO: READABLE CODES PARAM
//  Make the code list in the URL more nearly human readable

const handleCopyLinkClick = (
    input: HTMLTextAreaElement,
    sizeSpinner?: HTMLInputElement,
    lineSpinner?: HTMLInputElement,
): void => {
    const initialCodesParam = encodeURIComponent(input.value)

    const initialSizeParam = sizeSpinner ?
        sizeSpinner.value === `${DEFAULT_INITIAL_SIZE}` ? BLANK : `&${Initial.SIZE}=${sizeSpinner.value}` :
        BLANK

    const initialLineParam = lineSpinner ?
        lineSpinner.value === `${DEFAULT_INITIAL_LINE}` ? BLANK : `&${Initial.LINE}=${lineSpinner.value}` :
        BLANK

    const initialParams = `?${Initial.CODES}=${initialCodesParam}${initialSizeParam}${initialLineParam}`

    if (onWebApp()) {
        history.pushState(undefined, BLANK, initialParams)
    }

    navigator.clipboard.writeText(`${WEB_APP_URL}/${initialParams}`)
}


const buildCopyLinkButton = (
    input: HTMLTextAreaElement,
    sizeSpinner?: HTMLInputElement,
    lineSpinner?: HTMLInputElement,
): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.addEventListener("click", (): void => {
        handleCopyLinkClick(input, sizeSpinner, lineSpinner)
    })

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
