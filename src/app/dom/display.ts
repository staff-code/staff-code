const display = document.createElement("div")
display.style.fontSize = "40px"
display.style.margin = "1em 0"
display.style.fontFamily = "Bravura Text BB"
display.style.whiteSpace = "pre"

// TODO: REPO ORGANIZATION: how can export a styled element in npm?
//  So that I don't need to use JavaScript to add the styles to the display div?
//  That and maybe it's just hopeless to have bbCode and app share styles, since bbCode needs to not load the font
//  Or should I just be using some form of CSS-in-JS to solve the problem?
//  - And this may be intertwined with the to-do about allowing users to configure which font it uses

export {
    display,
}
