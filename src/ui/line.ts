import {Em, lowerCaseToUpperCase, Multiplier} from "@sagittal/general"
import {setStaffCodeCookie} from "./initial"
import {Initial} from "./types"

const buildLineSpinnerWrapper = (
    display: HTMLElement,
    {initialLine}: {initialLine: Multiplier<Em>},
): HTMLSpanElement => {
    const lineSpinnerWrapper = document.createElement("span")
    lineSpinnerWrapper.style.display = "inline-block"
    lineSpinnerWrapper.style.margin = "2px"

    const lineSpinnerLabel = document.createElement("label")
    lineSpinnerLabel.innerHTML = lowerCaseToUpperCase(Initial.LINE)
    lineSpinnerLabel.setAttribute("for", Initial.LINE)
    lineSpinnerLabel.style.width = "2em"
    lineSpinnerLabel.style.display = "inline-block"
    lineSpinnerLabel.style.textAlign = "right"
    lineSpinnerLabel.style.marginRight = "2px"

    const lineSpinner = document.createElement("input")
    lineSpinner.type = "number"
    lineSpinner.step = "0.1"
    lineSpinner.value = `${initialLine}`
    lineSpinner.style.width = "3em"
    lineSpinner.id = Initial.LINE
    lineSpinner.addEventListener("change", (event: Event): void => {
        const target = event.target! as HTMLInputElement
        const line = target.value
        display.style.lineHeight = line
        setStaffCodeCookie(Initial.LINE, line)
    })

    lineSpinnerWrapper.appendChild(lineSpinnerLabel)
    lineSpinnerWrapper.appendChild(lineSpinner)

    return lineSpinnerWrapper
}

export {
    buildLineSpinnerWrapper,
}
