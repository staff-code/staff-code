
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
