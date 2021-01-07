import {BLANK, Em, FontName, Maybe, Multiplier} from "@sagittal/general"
import {StaffCodeCallback} from "../../types"
import {setupBBCodeRoot} from "./root"

const setupBBCodeStaffCode = (): void =>
    (document.querySelectorAll(".staff-code") as NodeListOf<HTMLSpanElement>)
        .forEach((root: HTMLSpanElement): void => {
            const inline = root.getAttribute("sc-inline") === "true"
            const interactive = root.getAttribute("sc-interactive") === "true"
            const copyLinkButton = root.getAttribute("sc-copy-link-button") === "true"
            const sizeSpinner = root.getAttribute("sc-size-spinner") === "true"
            const lineSpinner = root.getAttribute("sc-line-spinner") === "true"

            const size = parseFloat(root.getAttribute("sc-initial-size") || BLANK) as Multiplier<Em> || undefined
            const line = parseFloat(root.getAttribute("sc-initial-line") || BLANK) as Multiplier<Em> || undefined

            const font = root.getAttribute("sc-font") as Maybe<FontName>
            const callback = (globalThis as unknown as {staffCodeCallback: StaffCodeCallback}).staffCodeCallback

            setupBBCodeRoot(
                root,
                {
                    ui: {
                        inline,
                        interactive,
                        copyLinkButton,
                        sizeSpinner,
                        lineSpinner,
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
