// TODO: BUG, BLOCKED: COPY LINK DOES NOT WORK ON THE FORUM BECAUSE IT'S NOT HTTPS
//  Either make it HTTPS (which we want anyway) or remove the button from the forum version

const buildCopyLinkButton = (input: HTMLTextAreaElement): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.addEventListener("click", (): void => {
        navigator.clipboard.writeText(`https://sagittal.github.io?codes=${encodeURIComponent(input.value)}`)
    })

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
