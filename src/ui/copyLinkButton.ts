// TODO: BUG, BLOCKED: COPY LINK DOES NOT WORK ON THE FORUM BECAUSE IT'S NOT HTTPS
//  Either make it HTTPS (which we want anyway) or remove the button from the forum version
//  Well, we've added HTTPS via CloudFlare and it's working for the main site already
//  So really, just waiting on this one. Should work w/in 24 hours

import {INITIAL_LINE_HEIGHT, INITIAL_SIZE} from "./initial"

const buildCopyLinkButton = (
    input: HTMLTextAreaElement,
    sizeSpinner?: HTMLInputElement,
    lineHeightSpinner?: HTMLInputElement,
): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.addEventListener("click", (): void => {
        const initialSizeParam = sizeSpinner ?
            sizeSpinner.value === `${INITIAL_SIZE}` ? "" : `&size=${sizeSpinner.value}` :
            ""

        console.log("whats the haps", lineHeightSpinner)
        const initialLineHeightParam = lineHeightSpinner ?
            lineHeightSpinner.value === `${INITIAL_LINE_HEIGHT}` ? "" : `&lineHeight=${lineHeightSpinner.value}` :
            ""

        history.pushState(undefined, "", `?codes=${encodeURIComponent(input.value)}${initialSizeParam}${initialLineHeightParam}`)
        navigator.clipboard.writeText(document.location.href)
    })

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
