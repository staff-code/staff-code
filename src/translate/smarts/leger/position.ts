import {Word} from "@sagittal/general"
import {Code, computeUnicodeForCode, Unicode} from "../../codes"
import {MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE, Position} from "../positionAndClef"

const POSITION_UNICODES = [
    computeUnicodeForCode("stpsrs15" as Code & Word),
    computeUnicodeForCode("stpsrs14" as Code & Word),
    computeUnicodeForCode("stpsrs13" as Code & Word),
    computeUnicodeForCode("stpsrs12" as Code & Word),
    computeUnicodeForCode("stpsrs11" as Code & Word),
    computeUnicodeForCode("stpsrs10" as Code & Word),
    computeUnicodeForCode("stpsrs9" as Code & Word),
    computeUnicodeForCode("stpsrs8" as Code & Word),
    computeUnicodeForCode("stpsrs7" as Code & Word),
    computeUnicodeForCode("stpsrs6" as Code & Word),
    computeUnicodeForCode("stpsrs5" as Code & Word),
    computeUnicodeForCode("stpsrs4" as Code & Word),
    computeUnicodeForCode("stpsrs3" as Code & Word),
    computeUnicodeForCode("stpsrs2" as Code & Word),
    computeUnicodeForCode("stpsrs1" as Code & Word),
    computeUnicodeForCode("stpsrs0" as Code & Word),
    computeUnicodeForCode("stpslr1" as Code & Word),
    computeUnicodeForCode("stpslr2" as Code & Word),
    computeUnicodeForCode("stpslr3" as Code & Word),
    computeUnicodeForCode("stpslr4" as Code & Word),
    computeUnicodeForCode("stpslr5" as Code & Word),
    computeUnicodeForCode("stpslr6" as Code & Word),
    computeUnicodeForCode("stpslr7" as Code & Word),
    computeUnicodeForCode("stpslr8" as Code & Word),
    computeUnicodeForCode("stpslr9" as Code & Word),
    computeUnicodeForCode("stpslr10" as Code & Word),
    computeUnicodeForCode("stpslr11" as Code & Word),
    computeUnicodeForCode("stpslr12" as Code & Word),
    computeUnicodeForCode("stpslr13" as Code & Word),
    computeUnicodeForCode("stpslr14" as Code & Word),
    computeUnicodeForCode("stpslr15" as Code & Word),
]

const computePositionUnicode = (position: Position): Unicode & Word =>
    POSITION_UNICODES[MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE - position]

export {
    computePositionUnicode,
}
