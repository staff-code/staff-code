import {lowerCaseToUpperCase} from "@sagittal/general"
import {components, staffCodeOptions} from "../globals"
import {Initial} from "../types"

const buildSpinnerWrapper = (initial: Initial, handleSpinnerChange: (event: Event) => void): HTMLSpanElement => {
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

export {
    buildSpinnerWrapper,
}
