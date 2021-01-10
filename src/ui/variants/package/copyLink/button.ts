import {handleCopyLinkClick} from "./handlers"

const buildCopyLinkButton = (): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.style.margin = "2px"
    copyLinkButton.style.cursor = "pointer"
    copyLinkButton.style.fontFamily = "sans-serif"
    copyLinkButton.style.fontSize = "0.75em"
    copyLinkButton.addEventListener("click", handleCopyLinkClick)

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
