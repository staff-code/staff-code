import {Em, Multiplier} from "@sagittal/general"
import {setStaffCodeCookie} from "./initial"
import {Initial} from "./types"

const buildLineSpinnerWrapper = (
    display: HTMLElement,
    {initialLine}: {initialLine: Multiplier<Em>},
): HTMLDivElement => {
    const lineSpinnerWrapper = document.createElement("div")

    const lineSpinnerLabel = document.createElement("label")
    lineSpinnerLabel.innerHTML = Initial.LINE
    lineSpinnerLabel.setAttribute("for", Initial.LINE)
    lineSpinnerLabel.style.width = "5em"
    lineSpinnerLabel.style.display = "inline-block"

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
