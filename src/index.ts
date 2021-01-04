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
//  Blocked because we're still discussing whether it should be an expandable section or a separate page

// TODO: FEATURE ADJUST, READY TO GO: REMOTE HOSTING
//  So we could use SC anywhere (e.g. in GitBook)
//  And forum admins don't have to install fonts or JS (update README.txt accordingly)
