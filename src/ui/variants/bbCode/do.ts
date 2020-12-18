import {setupRoot} from "./setupRoot"

const doBBCode = (): void => {
    document.querySelectorAll(".staff-code").forEach(setupRoot)
}

export {
    doBBCode,
}
