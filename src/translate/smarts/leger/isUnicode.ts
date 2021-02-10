import {Unicode, Word} from "@sagittal/general"

const isManualLegerLineUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE022" && unicode <= "\uE024"

export {
    isManualLegerLineUnicode,
}
