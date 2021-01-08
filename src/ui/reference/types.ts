import {Name} from "@sagittal/general"
import {Unicode, UnicodeLiteral} from "../../translate"
import {StaffCodeOptions} from "../types"

interface RangeData {
    description: string,
    glyphs: Array<Name<Unicode>>,
    range_end: UnicodeLiteral,
    range_start: UnicodeLiteral,
}

type BuildReference = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    {callback}: StaffCodeOptions,
) => HTMLDivElement

export {
    RangeData,
    BuildReference,
}
