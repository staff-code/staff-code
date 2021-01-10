import {lowerCaseToUpperCase} from "@sagittal/general"
import {components, staffCodeConfig} from "../globals"
import {Initial} from "../types"

const buildSpinnerWrapper = (initial: Initial, handleSpinnerChange: (event: Event) => void): HTMLSpanElement => {
    const spinnerWrapper = document.createElement("span")
    spinnerWrapper.classList.add("sc-spinner")

    const spinnerLabel = document.createElement("label")
    spinnerLabel.textContent = lowerCaseToUpperCase(initial)
    spinnerLabel.setAttribute("for", initial)

    const spinner = document.createElement("input")
    spinner.type = "number"
    spinner.step = "0.1"
    spinner.min = "0"
    // @ts-ignore
    spinner.value = `${staffCodeConfig.initial[initial]}`
    spinner.id = initial
    // @ts-ignore
    components[`${initial}Spinner`] = spinner

    spinner.addEventListener("change", handleSpinnerChange)

    spinnerWrapper.appendChild(spinnerLabel)
    spinnerWrapper.appendChild(spinner)

    return spinnerWrapper
}

export {
    buildSpinnerWrapper,
}
