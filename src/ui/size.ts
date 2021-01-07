import {DEFAULT_BLOCK_MODE_FONT_SIZE} from "./display"
import {computeInitialSize, setStaffCodeCookie} from "./initial"
import {StaffCodeOptions} from "./types"

const buildSizeSpinnerWrapper = (
    display: HTMLElement,
    {initialSize = computeInitialSize()}: StaffCodeOptions,
): HTMLDivElement => {
    const sizeSpinnerWrapper = document.createElement("div")

    const sizeSpinnerLabel = document.createElement("label")
    sizeSpinnerLabel.innerHTML = "size"
    sizeSpinnerLabel.setAttribute("for", "size")
    sizeSpinnerLabel.style.width = "5em"
    sizeSpinnerLabel.style.display = "inline-block"

    const sizeSpinner = document.createElement("input")
    sizeSpinner.type = "number"
    sizeSpinner.step = "0.1"
    sizeSpinner.value = `${initialSize}`
    sizeSpinner.style.width = "3em"
    sizeSpinner.id = "size"
    sizeSpinner.addEventListener("change", (event: Event): void => {
        const target = event.target! as HTMLInputElement
        const size = parseFloat(target.value)
        display.style.fontSize = `${size * DEFAULT_BLOCK_MODE_FONT_SIZE}em`
        setStaffCodeCookie("size", `${size}`)
    })

    sizeSpinnerWrapper.appendChild(sizeSpinnerLabel)
    sizeSpinnerWrapper.appendChild(sizeSpinner)

    return sizeSpinnerWrapper
}

export {
    buildSizeSpinnerWrapper,
}
