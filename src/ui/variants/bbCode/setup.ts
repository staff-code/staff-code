import {BLANK, FontName, Maybe} from "@sagittal/general"
import {StaffCodeCallback} from "../../types"
import {setupBBCodeRoot} from "./root"

const setupBBCodeStaffCode = (): void =>
    (document.querySelectorAll(".staff-code") as NodeListOf<HTMLSpanElement>)
        .forEach((root: HTMLSpanElement): void => {
            const inline = root.getAttribute("sc-inline") === "true"
            const interactive = root.getAttribute("sc-interactive") === "true"
            const copyLink = root.getAttribute("sc-copy-link") === "true"
            const sizeSpinner = root.getAttribute("sc-size-spinner") === "true"
            const lineHeightSpinner = root.getAttribute("sc-line-height-spinner") === "true"
            const font = root.getAttribute("sc-font") as Maybe<FontName>
            const initialSize = parseFloat(root.getAttribute("sc-initial-size") || BLANK) || undefined
            const initialLineHeight = parseFloat(root.getAttribute("sc-initial-line-height") || BLANK) || undefined
            const callback = (globalThis as unknown as {staffCodeCallback: StaffCodeCallback}).staffCodeCallback

            setupBBCodeRoot(
                root,
                {
                    interactive,
                    inline,
                    font,
                    initialLineHeight,
                    callback,
                    initialSize,
                    copyLink,
                    sizeSpinner,
                    lineHeightSpinner,
                },
            )
        })

export {
    setupBBCodeStaffCode,
}
