import {StaffCodeCallback, StaffCodeOptions} from "../../../types"

type BuildReference = ({callback}: StaffCodeOptions) => HTMLDivElement

interface ReferenceOptions {
    callback?: StaffCodeCallback,
    initialReferenceOpen: boolean,
}

export {
    BuildReference,
    ReferenceOptions,
}
