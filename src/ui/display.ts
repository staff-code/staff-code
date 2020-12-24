// TODO: Adjustable line height
// tslint:disable:max-line-length
/*
Had the thort that if we give users control of the vertical spacing between staves, and hence (after adding some constant) the height of the output field when it consists of a single staff, then the units should be staff-spaces, not octels. The minimum would normally be 2 spaces. That's enough room for one leger line between the staves. You currently have 6 spaces between staves — enough for 5 leger lines. That seems like the most anyone should want. But I suppose we could allow from 1 to 8. The codes could be of the form "stsp<n>".

But then I thort maybe the space above the staff should be settable independently of the space below. Sometimes you may want more leger lines for one than the other. Each of those could be adjustable from 0 to 7 spaces. "spup<n>" and "spdn<n>".

Just thortz. No need to do or say anything about them.
 */
const LINE_HEIGHT = 2

const buildDisplay = (): HTMLDivElement => {
    const display = document.createElement("div")
    display.style.fontSize = "40px"
    display.style.lineHeight = `${LINE_HEIGHT}em`
    display.style.margin = "1em 0"
    // TODO: FEATURE IMPROVE, BLOCKED: BRAVURA TEXT SC
    //  Rename the font to Bravura Text SC, "SC" for "StaffCode".
    //  But you'll have to run it through the https://onlinefontconverter.com/]online font converter afterwards,
    //  To make it work on the web, and to generate the .woff.
    //  Old stuff here too: http://forum.sagittal.org/viewtopic.php?p=2811#p2811
    //  - And update the names (Just change "BB" to "SC" wherever you find it.)
    //  - I think I want to wait on this until I figure out the other changes I need to make, like clef ligatures
    display.style.fontFamily = "Bravura Text BB"
    display.style.whiteSpace = "pre"

    return display
}

export {
    LINE_HEIGHT,
    buildDisplay,
}
