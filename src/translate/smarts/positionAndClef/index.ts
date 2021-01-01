export {computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts} from "./introClause"
export {canBePositioned} from "./canBePositioned"
export {updateSmartClef} from "./clef"
export {updateSmartPosition} from "./position"
export {getUnicodeGivenClef} from "./unicode"
export {isPositionUnicode} from "./isUnicode"
export {POSITION_UNICODES} from "./constants"
export {Clef, Position} from "./types"

// TODO: NEW FEATURE, NEAT BARLINE STAVE ENDINGS (en;)
// tslint:disable max-line-length
/*
I'd appreciate it if you could implement "en;" which is the auto-advance that advances by the remaining staff width minus the width of the next character (or minus zero if there is no next character). If the remaining staff width is less than the width of the next character, you will need to add more staff before advancing. "en;" doesn't need to cater for characters wider than 16 octals. (The widest barline in the font now, is 12 octals). You can treat characters wider than 16 in whatever way is most convenient to code. You don't need to check if the next character is a barline. It should work with any character.

I'd like it before I start on the EDO Notations, so I don't have to change their codes later when you do implement it. It doesn't sound too difficult (compared to "rt;" and "[ ... ]" which are quite scary and can wait).
 */
