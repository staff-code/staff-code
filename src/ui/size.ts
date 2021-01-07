import {Em, Multiplier} from "@sagittal/general"
import {DEFAULT_BLOCK_MODE_FONT_SIZE} from "./display"
import {setStaffCodeCookie} from "./initial"
import {Initial} from "./types"

const buildSizeSpinnerWrapper = (
    display: HTMLElement,
    {initialSize}: {initialSize: Multiplier<Em>},
): HTMLDivElement => {
    const sizeSpinnerWrapper = document.createElement("div")

    const sizeSpinnerLabel = document.createElement("label")
    sizeSpinnerLabel.innerHTML = Initial.SIZE
    sizeSpinnerLabel.setAttribute("for", Initial.SIZE)
    sizeSpinnerLabel.style.width = "5em"
    sizeSpinnerLabel.style.display = "inline-block"

    const sizeSpinner = document.createElement("input")
    sizeSpinner.type = "number"
    sizeSpinner.step = "0.1"
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
