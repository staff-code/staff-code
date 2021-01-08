import {Em, lowerCaseToUpperCase, Multiplier} from "@sagittal/general"
import {DEFAULT_BLOCK_MODE_FONT_SIZE} from "./display"
import {setStaffCodeCookie} from "./initial"
import {Initial} from "./types"

const handleSizeSpinnerChange = (event: Event, display: HTMLElement): void => {
    const target = event.target! as HTMLInputElement
    const size = parseFloat(target.value)
    display.style.fontSize = `${size * DEFAULT_BLOCK_MODE_FONT_SIZE}em`
    setStaffCodeCookie(Initial.SIZE, `${size}`)
}

const handleLineSpinnerChange = (event: Event, display: HTMLElement): void => {
    const target = event.target! as HTMLInputElement
    const line = target.value
    display.style.lineHeight = line
    setStaffCodeCookie(Initial.LINE, line)
}

const buildSpinnerWrapper = (
    display: HTMLElement,
    initial: Initial,
    initialValue: Multiplier<Em>,
    handleSpinnerChange: (event: Event, display: HTMLElement) => void,
): HTMLSpanElement => {
    const spinnerWrapper = document.createElement("span")
    spinnerWrapper.style.display = "inline-block"
    spinnerWrapper.style.marginRight = "2px"

    const spinnerLabel = document.createElement("label")
    spinnerLabel.innerHTML = lowerCaseToUpperCase(initial)
    spinnerLabel.setAttribute("for", initial)
    spinnerLabel.style.width = "2em"
    spinnerLabel.style.display = "inline-block"

    const spinner = document.createElement("input")
    spinner.type = "number"
    spinner.step = "0.1"
    spinner.min = "0"
    spinner.value = `${initialValue}`
    spinner.style.width = "3em"
    spinner.id = initial

    spinner.addEventListener("change", (event: Event): void => handleSpinnerChange(event, display))

    spinnerWrapper.appendChild(spinnerLabel)
    spinnerWrapper.appendChild(spinner)

    return spinnerWrapper
}

const buildSizeSpinnerWrapper = (
    display: HTMLElement,
    {initialSize}: {initialSize: Multiplier<Em>},
): HTMLSpanElement =>
    buildSpinnerWrapper(display, Initial.SIZE, initialSize, handleSizeSpinnerChange)


const buildLineSpinnerWrapper = (
    display: HTMLElement,
    {initialLine}: {initialLine: Multiplier<Em>},
): HTMLSpanElement =>
    buildSpinnerWrapper(display, Initial.SIZE, initialLine, handleLineSpinnerChange)

export {
    buildSizeSpinnerWrapper,
    buildLineSpinnerWrapper,
}
