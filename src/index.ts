export {
    transferInputToDisplay, setupPackageRoot, loadFontsThen, downloadSvg, StaffCodeOptions, StaffCodeCallback,
} from "./ui"
export {
    computeUnicodeLiteral,
    Octals,
    Code,
    SMuFL_MAP,
    Unicode,
    computeInputSentenceUnicode,
    UnicodeLiteral,
    computeUnicodeFromUnicodeLiteral,
} from "./translate"

// TODO: NEW FEATURE, BLOCKED: SYMBOL BROWSER REFERENCE
//  - An expandable section (no separate page version)
//  - there's either a click-to-copy-and-insert button, or two separate buttons
//  - there's maybe a way to make it auto-expand via a query param
//  - do you want it below, or to the side?
//  - then remove the full glyphNames from the codes that it processes
//  - could chunk things so that the reference code only loads upon expanding

// TODO: NEW FEATURE, BLOCKED: SHARE STAFF CODES VIA LINKS
//  This reminds me of a potential feature which had occurred to me but I don't think I ever suggested,
//  Which is the ability to share a link to the StaffCode web app with query params in the URL
//  Such that you'd visit the link and some particular code sentence would already be in the input and display
//  There'd have to be a share button on the page you'd click to get the link
//  But is that insufficiently valuable, when you can instead just share the code sentence and have someone paste it in?
