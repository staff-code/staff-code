import {StaffCodeCallback, StaffCodeOptions} from "../../../types"

type BuildReference = (
    root: HTMLSpanElement,
    input: HTMLTextAreaElement,
    {callback}: StaffCodeOptions,
) => HTMLDivElement

interface ReferenceOptions {
    callback?: StaffCodeCallback,
    initialReferenceOpen: boolean,
}

export {
    BuildReference,
    ReferenceOptions,
}
