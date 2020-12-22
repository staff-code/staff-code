const LINE_HEIGHT = 2

const buildDisplay = (): HTMLDivElement => {
    const display = document.createElement("div")
    display.style.fontSize = "40px"
    display.style.lineHeight = `${LINE_HEIGHT}em`
    display.style.margin = "1em 0"
    // TODO: FEATURE ADJUST, READY TO GO: BRAVURA TEXT SC
    //  Rename the font to Bravura Text SC, "SC" for "StaffCode".
    display.style.fontFamily = "Bravura Text BB"
    display.style.whiteSpace = "pre"

    return display
}

export {
    LINE_HEIGHT,
    buildDisplay,
}
