import {BLANK, Em, Io, Maybe, Multiplier, Sentence} from "@sagittal/general"
import {undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams} from "./human"
import {EncodedCode, Initial} from "./types"

const DEFAULT_INITIAL_CODES = "ston Gcl ; " as Io & Sentence
const DEFAULT_INITIAL_LINE = 2 as Multiplier<Em>
const DEFAULT_INITIAL_SIZE = 1 as Multiplier<Em>

const setStaffCodeCookie = (name: Initial, value: string): void => {
    const date = new Date()
    date.setDate(date.getDate() + 7)

    document.cookie = `staffcode_${name}=${(encodeURIComponent(value) || BLANK)}; expires=${date.toUTCString()}; path=/`
}

const getStaffCodeCookie = (name: Initial): Maybe<string> => {
    const cookieName = `staffcode_${name}=`
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

const computeInitialCodes = (): Io & Sentence =>
    undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams((new URLSearchParams(window.location.search).get(Initial.CODES) || BLANK) as EncodedCode & Sentence)
    || undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams((getStaffCodeCookie(Initial.CODES) || BLANK) as EncodedCode & Sentence)
    || DEFAULT_INITIAL_CODES

const computeInitialLine = (): Multiplier<Em> =>
    parseFloat(new URLSearchParams(window.location.search).get(Initial.LINE) || BLANK) as Multiplier<Em>
    || parseFloat(getStaffCodeCookie(Initial.LINE) || BLANK) as Multiplier<Em>
    || DEFAULT_INITIAL_LINE


const computeInitialSize = (): Multiplier<Em> =>
    parseFloat(new URLSearchParams(window.location.search).get(Initial.SIZE) || BLANK) as Multiplier<Em>
    || parseFloat(getStaffCodeCookie(Initial.SIZE) || BLANK) as Multiplier<Em>
    || DEFAULT_INITIAL_SIZE


export {
    computeInitialCodes,
    setStaffCodeCookie,
    computeInitialLine,
    computeInitialSize,
    DEFAULT_INITIAL_CODES,
    DEFAULT_INITIAL_LINE,
    DEFAULT_INITIAL_SIZE,
}
