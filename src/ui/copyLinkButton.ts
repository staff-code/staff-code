// TODO: BUG, BLOCKED: COPY LINK DOES NOT WORK ON THE FORUM BECAUSE IT'S NOT HTTPS
//  Either make it HTTPS (which we want anyway) or remove the button from the forum version

const buildCopyLinkButton = (input: HTMLTextAreaElement): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.addEventListener("click", (): void => {
        const codesAsQueryParams = `?codes=${encodeURIComponent(input.value)}`
        navigator.clipboard.writeText(`https://sagittal.github.io${codesAsQueryParams}`)
        history.pushState(undefined, "", codesAsQueryParams)
    })

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
