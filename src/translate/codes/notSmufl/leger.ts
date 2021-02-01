import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"

// TODO: BUG, READY TO GO: LEGER LINES DON'T HAVE CSP LIGATURES YET
//  Temporarily revert leger lines until font actually supports these?
//  Keep the reference as it is, though

const NOT_SMUFL_LEGER_LINES_SUPPLEMENT_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+F3C0*/"lgln1": "",
    /*U+F3C1*/"lgln2": "",
    /*U+F3C2*/"lgln3": "",
    /*U+F3C3*/"lgln4": "",
    /*U+F3C4*/"lgln5": "",
    /*U+F3C5*/"lgln6": "",
    /*U+F3C6*/"lgln7": "",
    /*U+F3C7*/"lgln8": "",
    /*U+F3C8*/"lgln9": "",
    /*U+F3C9*/"lgln10": "",
    /*U+F3CA*/"lgln11": "",
    /*U+F3CB*/"lgln12": "",
    /*U+F3CC*/"lgln13": "",
    /*U+F3CD*/"lgln14": "",
    /*U+F3CE*/"lgln15": "",
    /*U+F3CF*/"lgln16": "",
    /*U+F3D0*/"lgln17": "",
    /*U+F3D1*/"lgln18": "",
    /*U+F3D2*/"lgln19": "",
    /*U+F3D3*/"lgln20": "",
    /*U+F3D4*/"lgln21": "",
    /*U+F3D5*/"lgln22": "",
    /*U+F3D6*/"lgln23": "",
    /*U+F3D7*/"lgln24": "",
    /*U+F3D8*/"lgln25": "",
    /*U+F3D9*/"lgln26": "",
    /*U+F3DA*/"lgln27": "",
    /*U+F3DB*/"lgln28": "",
    /*U+F3DC*/"lgln29": "",
    /*U+F3DD*/"lgln30": "",
    /*U+F3DE*/"lgln31": "",
    /*U+F3DF*/"lgln32": "",
    /*U+F3E0*/"lgln33": "",
    /*U+F3E1*/"lgln34": "",
    /*U+F3E2*/"lgln35": "",
    /*U+F3E3*/"lgln36": "",
    /*U+F3E4*/"lgln37": "",
    /*U+F3E5*/"lgln38": "",
    /*U+F3E6*/"lgln39": "",
    /*U+F3E7*/"lgln40": "",
    /*U+F3E8*/"lgln41": "",
    /*U+F3E9*/"lgln42": "",
    /*U+F3EA*/"lgln43": "",
    /*U+F3EB*/"lgln44": "",
    /*U+F3EC*/"lgln45": "",
    /*U+F3ED*/"lgln46": "",
    /*U+F3EE*/"lgln47": "",
    /*U+F3EF*/"lgln48": "",
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMUFL_LEGER_LINES_SUPPLEMENT_MAP,
}
