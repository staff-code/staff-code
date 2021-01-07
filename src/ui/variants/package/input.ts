import {Io, Maybe, Sentence} from "@sagittal/general"
import {Unicode} from "../../../translate"
import {setupInput} from "../../input"
import {StaffCodeOptions} from "../../types"

const INITIAL_STAFF_CODE_INPUT_VALUE = "ston Gcl ; " as Io & Sentence

const setStaffCodeCookie = (inputSentence: Io & Sentence): void => {
    const date = new Date()
    date.setDate(date.getDate() + 7)

    document.cookie = `staffCode=${(encodeURIComponent(inputSentence) || "")}; expires=${date.toUTCString()}; path=/`
}

const getStaffCodeCookie = (): Maybe<Io & Sentence> => {
    const cookieName = "staffCode="
    const cookies = document.cookie.split(";")

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i]
        while (cookie.charAt(0) === " ") cookie = cookie.substring(1, cookie.length)
        if (cookie.indexOf(cookieName) === 0) {
            return decodeURIComponent(cookie.substring(cookieName.length, cookie.length)) as Io & Sentence
        }
    }

    return undefined
}

const computeInitialText = (): Io & Sentence =>
    new URLSearchParams(window.location.search).get("codes") as Io & Sentence
    || getStaffCodeCookie()
    || INITIAL_STAFF_CODE_INPUT_VALUE


const buildPackageInput = (root: HTMLSpanElement, options: StaffCodeOptions): HTMLTextAreaElement => {
    const {
        interactive,
        initialText = computeInitialText(),
        callback,
    } = options

    const input = document.createElement("textarea")

    const callbackPlusCookie = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence): void => {
        setStaffCodeCookie(inputSentence)
        callback && callback(inputSentence, unicodeSentence)
    }

    setupInput(input, root, {interactive, initialText, callback: callbackPlusCookie})

    return input
}

export {
    buildPackageInput,
}
