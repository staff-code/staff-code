import {buildControls} from "./controls"
import {buildPackageInput} from "./input"

const buildPanel = (): HTMLSpanElement => {
    const panel = document.createElement("span")
    panel.classList.add("sc-panel")

    const input = buildPackageInput()
    panel.appendChild(input)

    const controls = buildControls()
    panel.appendChild(controls)

    return panel
}

export {
    buildPanel,
}
