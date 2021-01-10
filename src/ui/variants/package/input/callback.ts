import {Io, Sentence} from "@sagittal/general"
import {Unicode} from "../../../../translate"
import {StaffCodeCallback} from "../../../types"
import {prepareCodesToBeHumanReadableAsEncodedQueryParams} from "../human"
import {setStaffCodeCookie} from "../initial"
import {Initial} from "../types"

const buildStaffCodeCallback = (callback: StaffCodeCallback): StaffCodeCallback => {
    return (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence): void => {
        setStaffCodeCookie(Initial.CODES, prepareCodesToBeHumanReadableAsEncodedQueryParams(inputSentence))
        callback && callback(inputSentence, unicodeSentence)
    }
}

export {
    buildStaffCodeCallback,
}
