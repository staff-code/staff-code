// TODO: BUG, BLOCKED: COPY LINK DOES NOT WORK ON THE FORUM BECAUSE IT'S NOT HTTPS
//  Either make it HTTPS (which we want anyway) or remove the button from the forum version

const buildCopyLinkButton = (input: HTMLTextAreaElement): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.addEventListener("click", (): void => {
        history.pushState(undefined, "", `?codes=${encodeURIComponent(input.value)}`)
        navigator.clipboard.writeText(document.location.href)
    })

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}

// TODO: FEATURE IMPROVE, READY TO GO: STORE CODES IN COOKIE
//  So that you could come away and come back, and it would keep where you were
