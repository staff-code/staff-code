import {computeInitialLineHeight, setStaffCodeCookie} from "./initial"
import {StaffCodeOptions} from "./types"

const buildLineHeightSpinnerWrapper = (
    display: HTMLElement,
    {initialLineHeight = computeInitialLineHeight()}: StaffCodeOptions,
): HTMLDivElement => {
    const lineHeightSpinnerWrapper = document.createElement("div")

    const lineHeightSpinnerLabel = document.createElement("label")
    lineHeightSpinnerLabel.innerHTML = "line height"
    lineHeightSpinnerLabel.setAttribute("for", "line-height")
    lineHeightSpinnerLabel.style.width = "5em"
    lineHeightSpinnerLabel.style.display = "inline-block"

    const lineHeightSpinner = document.createElement("input")
    lineHeightSpinner.type = "number"
    lineHeightSpinner.step = "0.1"
    lineHeightSpinner.value = `${initialLineHeight}`
    lineHeightSpinner.style.width = "3em"
    lineHeightSpinner.id = "line-height"
    lineHeightSpinner.addEventListener("change", (event: Event): void => {
        const target = event.target! as HTMLInputElement
        const lineHeight = target.value
        display.style.lineHeight = lineHeight
        setStaffCodeCookie("line-height", lineHeight)
    })

    lineHeightSpinnerWrapper.appendChild(lineHeightSpinnerLabel)
    lineHeightSpinnerWrapper.appendChild(lineHeightSpinner)

    return lineHeightSpinnerWrapper
}

export {
    buildLineHeightSpinnerWrapper,
}
