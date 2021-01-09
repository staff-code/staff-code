import {Em, lowerCaseToUpperCase, Multiplier} from "@sagittal/general"
import {DEFAULT_BLOCK_MODE_FONT_SIZE} from "../../display"
import {components} from "../../globals"
import {setStaffCodeCookie} from "./initial"
import {Initial} from "./types"

const handleSizeSpinnerChange = (event: Event): void => {
    const target = event.target! as HTMLInputElement
    const size = parseFloat(target.value)
    components.display.style.fontSize = `${size * DEFAULT_BLOCK_MODE_FONT_SIZE}em`
    setStaffCodeCookie(Initial.SIZE, `${size}`)
}

const handleLineSpinnerChange = (event: Event): void => {
    const target = event.target! as HTMLInputElement
    const line = target.value
    components.display.style.lineHeight = line
    setStaffCodeCookie(Initial.LINE, line)
}

const buildSpinnerWrapper = (
    initial: Initial,
    initialValue: Multiplier<Em>,
    handleSpinnerChange: (event: Event) => void,
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
    // @ts-ignore
    components[`${initial}Spinner`] = spinner

    spinner.addEventListener("change", handleSpinnerChange)

    spinnerWrapper.appendChild(spinnerLabel)
    spinnerWrapper.appendChild(spinner)

    return spinnerWrapper
}

const buildSizeSpinnerWrapper = (
    {initialSize}: {initialSize: Multiplier<Em>},
): HTMLSpanElement =>
    buildSpinnerWrapper(Initial.SIZE, initialSize, handleSizeSpinnerChange)

const buildLineSpinnerWrapper = (
    {initialLine}: {initialLine: Multiplier<Em>},
): HTMLSpanElement =>
    buildSpinnerWrapper(Initial.LINE, initialLine, handleLineSpinnerChange)

export {
    buildSizeSpinnerWrapper,
    buildLineSpinnerWrapper,
}
