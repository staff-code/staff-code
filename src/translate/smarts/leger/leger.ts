import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {MEDIUM_LEGER_LINE_UNICODE, NARROW_LEGER_LINE_UNICODE, WIDE_LEGER_LINE_UNICODE} from "./constants"
import {AutoLeger} from "./types"

const updateSmartLeger = (unicode: Unicode & Word): void => {
    if (unicode === NARROW_LEGER_LINE_UNICODE) smarts.leger = AutoLeger.NARROW
    if (unicode === MEDIUM_LEGER_LINE_UNICODE) smarts.leger = AutoLeger.MEDIUM
    if (unicode === WIDE_LEGER_LINE_UNICODE) smarts.leger = AutoLeger.WIDE
}

export {
    updateSmartLeger,
}
