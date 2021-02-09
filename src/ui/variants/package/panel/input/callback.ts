import {Io, Maybe, Sentence} from "@sagittal/general"
import {Unicode} from "../../../../../translate"
import {StaffCodeCallback} from "../../../../types"
import {setStaffCodeCookie} from "../../initial"
import {Initial} from "../../types"

const buildStaffCodeCallback = (callback: Maybe<StaffCodeCallback>): StaffCodeCallback => {
    return (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence): void => {
        setStaffCodeCookie(Initial.CODES, inputSentence)
        callback && callback(inputSentence, unicodeSentence)
    }
}

export {
    buildStaffCodeCallback,
}
