const buildDisplay = (): HTMLDivElement => {
    const display = document.createElement("div")
    display.style.fontSize = "40px"
    display.style.margin = "1em 0"
    // TODO: FEATURE ADJUST, READY TO GO: BRAVURA TEXT SC
    //  Rename the font to Bravura Text SC, "SC" for "StaffCode".
    display.style.fontFamily = "Bravura Text BB"
    display.style.whiteSpace = "pre"

    return display
}

export {
    buildDisplay,
}
