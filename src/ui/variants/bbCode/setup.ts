import {BLANK, Em, FontName, Multiplier} from "@sagittal/general"
import {StaffCodeCallback} from "../../types"
import {setupBBCodeRoot} from "./root"

const setupBBCodeStaffCode = (): void =>
    (document.querySelectorAll(".staff-code") as NodeListOf<HTMLSpanElement>)
        .forEach((root: HTMLSpanElement): void => {
            const inline = root.getAttribute("sc-inline") === "true"
            const interactive = root.getAttribute("sc-interactive") === "true"

            const size = parseFloat(root.getAttribute("sc-initial-size") || BLANK) as Multiplier<Em> || undefined
            const line = parseFloat(root.getAttribute("sc-initial-line") || BLANK) as Multiplier<Em> || undefined

            const font = root.getAttribute("sc-font") as FontName || undefined
            const callback = (globalThis as unknown as {staffCodeCallback: StaffCodeCallback}).staffCodeCallback

            setupBBCodeRoot(
                root,
                {
                    ui: {
                        inline,
                        interactive,
                    },
                    initial: {
                        line,
                        size,
                    },
                    font,
                    callback,
                },
            )
        })

export {
    setupBBCodeStaffCode,
}
