import {Io, Maybe, Sentence} from "@sagittal/general"

const INITIAL_STAFF_CODE_INPUT_VALUE = "ston Gcl ; " as Io & Sentence
const INITIAL_LINE_HEIGHT = 2
const INITIAL_SIZE = 1

const setStaffCodeCookie = (name: string, value: string): void => {
    const date = new Date()
    date.setDate(date.getDate() + 7)

    document.cookie = `staff-code-${name}=${(encodeURIComponent(value) || "")}; expires=${date.toUTCString()}; path=/`
}

const getStaffCodeCookie = (name: string): Maybe<Io & Sentence> => {
    const cookieName = `staff-code-${name}=`
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
    || getStaffCodeCookie("initial-text")
    || INITIAL_STAFF_CODE_INPUT_VALUE

const computeInitialLineHeight = (): number =>
    parseFloat(new URLSearchParams(window.location.search).get("lineHeight") || "")
    || parseFloat(getStaffCodeCookie("line-height") || "")
    || INITIAL_LINE_HEIGHT


const computeInitialSize = (): number =>
    parseFloat(new URLSearchParams(window.location.search).get("size") || "")
    || parseFloat(getStaffCodeCookie("size") || "")
    || INITIAL_SIZE


export {
    computeInitialText,
    setStaffCodeCookie,
    computeInitialLineHeight,
    computeInitialSize,
    INITIAL_LINE_HEIGHT,
    INITIAL_SIZE, // todo so there's a difference between font size which is in em and "size" which is a multiplier theroef... make sure you realize that consistently
}
