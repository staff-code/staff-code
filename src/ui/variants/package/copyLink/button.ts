import {handleCopyLinkClick} from "./handlers"

const buildCopyLinkButton = (): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.classList.add("sc-copy-link")
    copyLinkButton.addEventListener("click", handleCopyLinkClick)

    const copyLinkMessage = document.createElement("div")
    copyLinkMessage.textContent = "Link copied!"
    copyLinkButton.appendChild(copyLinkMessage)

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
