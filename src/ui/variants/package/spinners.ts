import {lowerCaseToUpperCase} from "@sagittal/general"
import {DEFAULT_BLOCK_MODE_FONT_SIZE} from "../../display"
import {components, staffCodeOptions} from "./globals"
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
    spinnerLabel.style.fontFamily = "sans-serif"
    spinnerLabel.style.fontSize = "0.75em"

    const spinner = document.createElement("input")
    spinner.type = "number"
    spinner.step = "0.1"
    spinner.min = "0"
    // @ts-ignore
    spinner.value = `${staffCodeOptions.initial[initial]}`
    spinner.style.width = "3em"
    spinner.id = initial
    // @ts-ignore
    components[`${initial}Spinner`] = spinner

    spinner.addEventListener("change", handleSpinnerChange)

    spinnerWrapper.appendChild(spinnerLabel)
    spinnerWrapper.appendChild(spinner)

    return spinnerWrapper
}

const buildSizeSpinnerWrapper = (): HTMLSpanElement =>
    buildSpinnerWrapper(Initial.SIZE, handleSizeSpinnerChange)

const buildLineSpinnerWrapper = (): HTMLSpanElement =>
    buildSpinnerWrapper(Initial.LINE, handleLineSpinnerChange)

export {
    buildSizeSpinnerWrapper,
    buildLineSpinnerWrapper,
}
