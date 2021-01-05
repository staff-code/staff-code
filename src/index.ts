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

// TODO: NEW FEATURE, READY TO GO: SYMBOL BROWSER REFERENCE
//  - An expandable section (no separate page version)
//  - each row hover background change and cursor: pointer and clicking anywhere inserts it to the input
//  - there's maybe a way to make it auto-expand via a query param, Dave says do it if not much work (shouldn't be)
//  - position below, and on mobile take up about as much space as the pop-up keyboard
//  - TOC (https://github.com/w3c/smufl/tree/gh-pages/metadata)
//  How about making the Reference be just one long scrollable text,
//  But putting an anchor at the start of every section,
//  And having a Contents section at the start, with a bunch of links to those anchors,
//  And every section has a link back to the Contents section.
//  - then remove the full glyphNames from the codes that it processes
//  - chunk things so that the reference code only loads upon expanding (Dave wants this)
//  - line of explainer text up top saying what to do

// TODO: NEW FEATURE, READY TO GO: SHARE STAFF CODES VIA LINKS
//  This reminds me of a potential feature which had occurred to me but I don't think I ever suggested,
//  Which is the ability to share a link to the StaffCode web app with query params in the URL
//  Such that you'd visit the link and some particular code sentence would already be in the input and display
//  There'd have to be a share button on the page you'd click to get the link
//  But is that insufficiently valuable, when you can instead just share the code sentence and have someone paste it in?
//  Dave says it's a good idea

