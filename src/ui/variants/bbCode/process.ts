import {transferInputToDisplay} from "../../transfer"

const processStaffCode = (root: Element): void => {
    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    transferInputToDisplay(root)
}


export {
    processStaffCode,
}
