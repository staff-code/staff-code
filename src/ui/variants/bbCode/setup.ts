import {setupBBCodeRoot} from "./root"

const setupBBCodeStaffCode = (): void => {
    document.querySelectorAll(".staff-code").forEach(setupBBCodeRoot)
}

export {
    setupBBCodeStaffCode,
}
