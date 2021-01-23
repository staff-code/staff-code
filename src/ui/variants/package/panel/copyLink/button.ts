import {components} from "../../globals"
import {handleCopyLinkClick} from "./handlers"

const buildCopyLinkButton = (): HTMLButtonElement => {
    const copyLinkButton = document.createElement("button")
    copyLinkButton.textContent = "Copy link"
    copyLinkButton.classList.add("sc-copy-link")
    copyLinkButton.addEventListener("click", handleCopyLinkClick)

    // TODO: FEATURE IMPROVE, READY TO GO: COPY LINK MESSAGE SUBTLETY
    //  Don't say browser URL updated if outside web app
    //  (Also, I would expect to have found this material in a dedicated module called "message.ts"; extract this)
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
