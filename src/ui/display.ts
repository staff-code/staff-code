import {Em, Multiplier} from "@sagittal/general"

const FONT_SIZE = 2.5 as Em
const INLINE_FONT_SIZE = 1 as Em
const LINE_HEIGHT_MULTIPLIER = 2 as Multiplier<Em>
const MARGIN_SIZE = 1 as Em

// TODO: NEW FEATURE, READY TO GO: ADJUSTABLE LINE HEIGHT
// tslint:disable:max-line-length
/*
Had the thort that if we give users control of the vertical spacing between staves, and hence (after adding some constant) the height of the output field when it consists of a single staff, then the units should be staff-spaces, not octels. The minimum would normally be 2 spaces. That's enough room for one leger line between the staves. You currently have 6 spaces between staves — enough for 5 leger lines. That seems like the most anyone should want. But I suppose we could allow from 1 to 8. The codes could be of the form "stsp<n>".

But then I thort maybe the space above the staff should be settable independently of the space below. Sometimes you may want more leger lines for one than the other. Each of those could be adjustable from 0 to 7 spaces. "spup<n>" and "spdn<n>".

Just thortz. No need to do or say anything about them.
 */

const buildDisplay = (inline: boolean = false): HTMLElement => {
    const display = document.createElement(inline ? "span" : "div")
    display.style.fontSize = `${inline ? INLINE_FONT_SIZE : FONT_SIZE}em`
    display.style.lineHeight = `${LINE_HEIGHT_MULTIPLIER}`
    display.style.margin = `${MARGIN_SIZE}em 0`
    // TODO: FEATURE IMPROVE, BLOCKED: BRAVURA TEXT SC
    //  Rename the font to Bravura Text SC, "SC" for "StaffCode".
    //  But you'll have to run it through the https://onlinefontconverter.com/]online font converter afterwards,
    //  To make it work on the web, and to generate the .woff.
    //  Old stuff here too: http://forum.sagittal.org/viewtopic.php?p=2811#p2811
    //  - And update the names (Just change "BB" to "SC" wherever you find it.)
    //  - I think I want to wait on this until I figure out the other changes I need to make, like clef ligatures
    //  As well as ligatures for all the supplemental positions (which have otherwise been implemented here)
    display.style.fontFamily = "Bravura Text BB"
    display.style.whiteSpace = "pre"
    display.classList.add("display")

    return display
}

export {
    LINE_HEIGHT_MULTIPLIER,
    buildDisplay,
}
