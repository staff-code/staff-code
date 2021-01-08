import {Em, lowerCaseToUpperCase, Multiplier} from "@sagittal/general"
import {DEFAULT_BLOCK_MODE_FONT_SIZE} from "./display"
import {setStaffCodeCookie} from "./initial"
import {Initial} from "./types"

const buildSizeSpinnerWrapper = (
    display: HTMLElement,
    {initialSize}: {initialSize: Multiplier<Em>},
): HTMLSpanElement => {
    const sizeSpinnerWrapper = document.createElement("span")
    sizeSpinnerWrapper.style.display = "inline-block"
    sizeSpinnerWrapper.style.marginRight = "2px"

    const sizeSpinnerLabel = document.createElement("label")
    sizeSpinnerLabel.innerHTML = lowerCaseToUpperCase(Initial.SIZE)
    sizeSpinnerLabel.setAttribute("for", Initial.SIZE)
    sizeSpinnerLabel.style.width = "2em"
    sizeSpinnerLabel.style.display = "inline-block"

    const sizeSpinner = document.createElement("input")
    sizeSpinner.type = "number"
    sizeSpinner.step = "0.1"
    sizeSpinner.min = "0"
    sizeSpinner.value = `${initialSize}`
    sizeSpinner.style.width = "3em"
    sizeSpinner.id = Initial.SIZE
    sizeSpinner.addEventListener("change", (event: Event): void => {
        const target = event.target! as HTMLInputElement
        const size = parseFloat(target.value)
        display.style.fontSize = `${size * DEFAULT_BLOCK_MODE_FONT_SIZE}em`
        setStaffCodeCookie(Initial.SIZE, `${size}`)
    })

    sizeSpinnerWrapper.appendChild(sizeSpinnerLabel)
    sizeSpinnerWrapper.appendChild(sizeSpinner)

    return sizeSpinnerWrapper
}

export {
    buildSizeSpinnerWrapper,
}
