import {Octals} from "../codes"
import {SmartStave} from "./horizontal"
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

    I suggest, instead of the trailing left curly, we use a character that a user simply can't use in any code,
    because they can't even type it, i.e. \x07 = \u0007, the old BEL character,
    intended to ring a physical bell on a teletype.
    It has an even shorter escape code in C, namely \a where the "a" stands for "alarm"
    because "b" is used for "backspace". But I see that Javascript has (quite reasonably) dropped that escape code.

    <n>; -> <n>\x07
    en;  -> en\x07
    nl;  -> nl\x07
    ;    -> ␣;␣
    nl\x07  -> nl;
    en\x07  -> en;
    <n>\x07 -> <n>;

    All the patterns above, except the semicolon, must be surrounded by whitespace.

    Might as well do the same for rt; and cn; while you're at it — ready for when they get implemented.
    */

    /* vertical */

    clef: Clef,
    pitch: Pitch,
    position: Position,
    pitchOrPosition: PitchOrPosition,
}

export {
    Smarts,
}
