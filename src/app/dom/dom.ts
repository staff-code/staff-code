import {display} from "./display"
import {downloadButton} from "./downloadButton"
import {input} from "./input"
import {root} from "./root"

const buildStaffCode = (): HTMLDivElement => {
    root.appendChild(input)
    root.appendChild(display)
    root.appendChild(downloadButton)

    return root
}

export {
    buildStaffCode,
}
