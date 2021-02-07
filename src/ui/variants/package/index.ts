export {setupPackageRoot} from "./root"
export {downloadImage} from "./panel"

// TODO: CLEAN, READY TO GO: TEST MORE GUI HELPER METHODS
//  You should just go through everything that looks unit testable and backfill them
//  `panel/input`, `panel/spinners`, and `reference/*` is what remains to be done

// TODO: replace all Gcl with trcl, but the problem with the sticky stpsrs vs up
//  Dave is suggesting maybe just have all clefs reset position to 0 to delete all those tests and fancy
//  Code about smart pitch vs smart position?

// TODO: "14" instead of "14;". fix manual advances

// TODO: CLEAN, READY TO GO: REFINE RELATIONSHIP BETWEEN BIN/ & SRC/ W/R/T EXCEPTIONS, PARENTHETICALS, LINKS
//  Perhaps these should also include their text, to spare from that one exception for the commands?
//  - And there's definitely some clean-up that could be done here with the explanations in two places,
//  - And so much wasted "" space ending up in the final SMuFL reference,
//  - And so much stuff that doesn't depend on smufl/bravura updates, yet need to remember to run script to regenerate
//  - Note: generate-smufl-reference (emp. on smufl) is a bit of a misnomer ATM, but shouldn't be when we're done here
//  - Also, the ASCII widths don't need to be in there, with the bravura widths
