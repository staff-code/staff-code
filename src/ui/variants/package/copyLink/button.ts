import {components} from "../globals"
import {handleCopyLinkClick} from "./handlers"

const buildCopyLinkButton = (): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.classList.add("sc-copy-link")
    copyLinkButton.addEventListener("click", handleCopyLinkClick)

    const copyLinkMessage = document.createElement("div")
    copyLinkMessage.classList.add("sc-copy-link-message")
    copyLinkMessage.innerHTML = "Link copied to clipboard<br>Browser URL updated"
    components.copyLinkMessage = copyLinkMessage
    copyLinkButton.appendChild(copyLinkMessage)

    return copyLinkButton
}

export {
    buildCopyLinkButton,
}
