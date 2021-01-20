import {buildDisplay} from "../../../display"
import {DisplayOptions} from "../../../types"
import {components} from "../globals"

const buildPackageDisplayWrapper = (options: DisplayOptions): HTMLDivElement => {
    const displayWrapper = document.createElement("div")
    displayWrapper.style.flexShrink = "0"

    const display = buildDisplay(options)

    displayWrapper.appendChild(display)
    components.display = display

    return displayWrapper
}

export {
    buildPackageDisplayWrapper,
}
