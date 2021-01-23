import {BLANK} from "@sagittal/general"
import {components} from "../../globals"
import {CODE_RUNNING_IN_WEB_APP} from "./constants"

const buildCopyLinkMessage = (): HTMLDivElement => {
    const copyLinkMessage = document.createElement("div")
    copyLinkMessage.classList.add("sc-copy-link-message")
    copyLinkMessage.innerHTML = `Link copied to clipboard${CODE_RUNNING_IN_WEB_APP ? "<br>Browser URL updated" : BLANK}`
    components.copyLinkMessage = copyLinkMessage

    return copyLinkMessage
}

export {
    buildCopyLinkMessage,
}
