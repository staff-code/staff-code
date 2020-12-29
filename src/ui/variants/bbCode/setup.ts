import {BLANK, FontName, Maybe} from "@sagittal/general"
import {StaffCodeCallback} from "../../types"
import {setupBBCodeRoot} from "./root"

const setupBBCodeStaffCode = (): void =>
    (document.querySelectorAll(".staff-code") as NodeListOf<HTMLSpanElement>)
        .forEach((root: HTMLSpanElement): void => {
            const inline = root.hasAttribute("sc-inline")
            const download = root.hasAttribute("sc-download")
            const interactive = root.hasAttribute("sc-interactive")
            const font = root.getAttribute("sc-font") as Maybe<FontName>
            const lineHeight = parseFloat(root.getAttribute("sc-line-height") || BLANK) || undefined
            const callback = (global as unknown as {staffCodeCallback: StaffCodeCallback}).staffCodeCallback

            setupBBCodeRoot(root, {interactive, download, inline, font, lineHeight, callback})
        })

export {
    setupBBCodeStaffCode,
}
