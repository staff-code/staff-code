import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"

const isManualLegerLineUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE022" && unicode <= "\uE024"

export {
    isManualLegerLineUnicode,
}
