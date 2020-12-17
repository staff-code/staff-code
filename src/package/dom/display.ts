const display = document.createElement("div")
display.style.fontSize = "40px"
display.style.margin = "1em 0"
display.style.fontFamily = "Bravura Text BB"
display.style.whiteSpace = "pre"

// TODO: BBCODE VS PACKAGE, STYLES:
//  How can export a styled element in npm?
//  So that I don't need to use JavaScript to add the styles to the display div?
//  That and maybe it's just hopeless to have bbCode and package share styles, since bbCode needs to not load the font
//  Or should I just be using some form of CSS-in-JS to solve the problem?
//  - And this may be intertwined with the to-do about allowing users to configure which font it uses
//  - And I think that the sideEffects: false is now causing the styles not to get bundled with the bbCode,
//  So there's a redundancy between the HTML replacement file and here and the SCSS file
//  Try to just clean this whole situation up, and maybe simplify loaders in the process, yeah?
//  - Yeah, both webpacks are ignoring urls right now, so I don't think we're even using the SCSS...

export {
    display,
}
