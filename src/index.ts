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
//  - TOC set of links per section of codes (pull in new SMufL JSON file w the data, and frontend UI library now?)
//  - then remove the full glyphNames from the codes that it processes
//  - chunk things so that the reference code only loads upon expanding (Dave wants this)

// TODO: NEW FEATURE, READY TO GO: SHARE STAFF CODES VIA LINKS
//  This reminds me of a potential feature which had occurred to me but I don't think I ever suggested,
//  Which is the ability to share a link to the StaffCode web app with query params in the URL
//  Such that you'd visit the link and some particular code sentence would already be in the input and display
//  There'd have to be a share button on the page you'd click to get the link
//  But is that insufficiently valuable, when you can instead just share the code sentence and have someone paste it in?
//  Dave says it's a good idea

