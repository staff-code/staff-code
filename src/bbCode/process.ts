import {translateInputToDisplay} from "../translate"

const processStaffCode = (root: Element): void => {
    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    translateInputToDisplay(root)
}


export {
    processStaffCode,
}
