import {BLANK, Io, Sentence} from "@sagittal/general"
import {
    DEFAULT_INITIAL_CODES,
    DEFAULT_INITIAL_LINE,
    DEFAULT_INITIAL_REFERENCE_OPEN,
    DEFAULT_INITIAL_SIZE,
} from "../../../../constants"
import {components} from "../../globals"
import {prepareCodesToBeHumanReadableAsEncodedQueryParams} from "../../human"
import {isReferenceOpen} from "../../reference"
import {Initial} from "../../types"
import {getLine, getSize} from "../spinners"

const DEFAULT_CODES_AS_PARAM = encodeURIComponent(
    prepareCodesToBeHumanReadableAsEncodedQueryParams(DEFAULT_INITIAL_CODES),
)

const SINGLE_SPACE_IN_QUERY_PARAMS = "%20"

const computeInitialCodesParam = (): string => {
    let encodedCodes = encodeURIComponent(
        prepareCodesToBeHumanReadableAsEncodedQueryParams(components.input.value as Io & Sentence),
    )

    if (encodedCodes === BLANK) encodedCodes = SINGLE_SPACE_IN_QUERY_PARAMS

    return encodedCodes === DEFAULT_CODES_AS_PARAM ?
        BLANK :
        `&${Initial.CODES}=${encodedCodes}`
}

const computeInitialSizeParam = (): string => {
    const size = getSize()

    return size === DEFAULT_INITIAL_SIZE ?
        BLANK :
        `&${Initial.SIZE}=${size}`
}

const computeInitialLineParam = (): string => {
    const line = getLine()

    return line === DEFAULT_INITIAL_LINE ?
        BLANK :
        `&${Initial.LINE}=${line}`
}

const computeInitialReferenceOpenParam = (): string =>
    (
        !components.referenceWrapper
        || isReferenceOpen() === DEFAULT_INITIAL_REFERENCE_OPEN
    ) ?
        BLANK :
        `&${Initial.REFERENCE_OPEN}=true`

const computeInitialParams = (): string => {
    const initialCodesParam = computeInitialCodesParam()
    const initialSizeParam = computeInitialSizeParam()
    const initialLineParam = computeInitialLineParam()
    const initialReferenceOpenParam = computeInitialReferenceOpenParam()

    return (
        initialSizeParam === BLANK
        && initialLineParam === BLANK
        && initialReferenceOpenParam === BLANK
        && initialCodesParam === BLANK
    ) ?
        BLANK :
        `?${initialSizeParam}${initialLineParam}${initialReferenceOpenParam}${initialCodesParam}`.replace("&", BLANK)
}

export {
    computeInitialParams,
}
