const LINE_HEIGHT = 2

const buildDisplay = (): HTMLDivElement => {
    const display = document.createElement("div")
    display.style.fontSize = "40px"
    display.style.lineHeight = `${LINE_HEIGHT}em`
    display.style.margin = "1em 0"
    // TODO: FEATURE ADJUST, READY TO GO: BRAVURA TEXT SC
    //  Rename the font to Bravura Text SC, "SC" for "StaffCode".
    //  But you'll have to run it through the https://onlinefontconverter.com/]online font converter afterwards,
    //  To make it work on the web, and to generate the .woff.
    //  Old stuff here too: http://forum.sagittal.org/viewtopic.php?p=2811#p2811
    //  - And update the names (Just change "BB" to "SC" wherever you find it.)
    display.style.fontFamily = "Bravura Text BB"
    display.style.whiteSpace = "pre"

    return display
}

export {
    LINE_HEIGHT,
    buildDisplay,
}
