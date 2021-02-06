import {Octals} from "../codes"
import {AltAdvance, SmartStave} from "./horizontal"
import {Clef, Pitch, PitchOrPosition, Position} from "./vertical"

interface Smarts {
    commenting: boolean,

    /* horizontal */

    advanceWidth: Octals,
    manualAdvance: Octals,
    advanceToEnd: boolean,
    staveWidth: Octals,
    spacing: Octals,
    staveOn: boolean,
    stave: SmartStave,
    // TODO: I think we should go back to how it was before, when <n>; en; nl; were single codes
    //  And you couldn't put a space in the middle of them.
    //  I realise now, that instead of having <n> en nl set state that semicolon acts on, we can just hide <n>; en; nl;
    //  From the pass that replaces " ; " with "<space>;<space>"
    //  By temporarily replacing their semicolons with something that makes them into words
    //  That are very unlikely to be future codes or macro names or words that are parts of comments or string literals.
    //  All the patterns above, except the semicolon, must be surrounded by whitespace. e.g.
    /*
    [pre]<n>; -> <n>{
    en;  -> en{
    nl;  -> nl{
    ;    -> ␣;␣
    nl{  -> nl;
    en{  -> en;
    <n>{ -> <n>;[/pre]
    */
    //  What if we just did the pass where we replace all the ";" with " ; "
    //  And then make a pass where we replace all " nl ; " with " nl; ", etc.
    //  Maybe that would be more straightforward?
    altAdvance: AltAdvance,

    /* vertical */

    clef: Clef,
    pitch: Pitch,
    position: Position,
    pitchOrPosition: PitchOrPosition,
}

export {
    Smarts,
}
