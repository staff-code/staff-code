import {handleCopyLinkClick} from "./handlers"
import {buildCopyLinkMessage} from "./message"

const buildCopyLinkButton = (): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.classList.add("sc-copy-link")
    copyLinkButton.addEventListener("click", handleCopyLinkClick)

    const copyLinkMessage = buildCopyLinkMessage()
    copyLinkButton.appendChild(copyLinkMessage)

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
