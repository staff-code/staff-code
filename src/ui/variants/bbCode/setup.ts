import {BLANK, FontName, Maybe} from "@sagittal/general"
import {StaffCodeCallback} from "../../types"
import {setupBBCodeRoot} from "./root"

const setupBBCodeStaffCode = (): void =>
    (document.querySelectorAll(".staff-code") as NodeListOf<HTMLSpanElement>)
        .forEach((root: HTMLSpanElement): void => {
            const inline = root.getAttribute("sc-inline") === "true"
            const interactive = root.getAttribute("sc-interactive") === "true"
            const font = root.getAttribute("sc-font") as Maybe<FontName>
            const lineHeight = parseFloat(root.getAttribute("sc-line-height") || BLANK) || undefined
            console.log("what is happening to the line height?", root.getAttribute("sc-line-height"), root.getAttribute("sc-line-height") || BLANK, parseFloat(root.getAttribute("sc-line-height") || BLANK))
            const callback = (globalThis as unknown as {staffCodeCallback: StaffCodeCallback}).staffCodeCallback

            setupBBCodeRoot(root, {interactive, inline, font, lineHeight, callback})
        })

export {
    setupBBCodeStaffCode,
}
