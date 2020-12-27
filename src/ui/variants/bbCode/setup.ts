import {setupBBCodeRoot} from "./root"

const setupBBCodeStaffCode = (): void =>
    (document.querySelectorAll(".staff-code") as NodeListOf<HTMLSpanElement>)
        .forEach(setupBBCodeRoot)

export {
    setupBBCodeStaffCode,
}
