export {REFERENCE_SECTION_CSS} from "./css"
export {appendSection} from "./section"
export {handleReferenceInsert, handleReferenceInsertUndo} from "./handlers"

// TODO: FEATURE IMPROVE, READY TO GO: SORTED SECTIONS BY IMPORTANCE
//  SMuFL already roughly sorts them by commonality.
//  But sure. I don't think we have to rigorously quantify popularity,
//  Because there are other factors like interrelatedness of the sections.
//  But if you just let me know your preferred order, I can add a sorting layer.
//  - They should start out in this order:
//  Staff brackets and dividers -to- Slash noteheads
//  Note clusters
//  Individual notes -to- Standard accidentals
//  Articulation -to- Dynamics
//  Common ornaments -to- Plucked techniques
//  Keyboard techniques
//  Followed by all remaining sections in the order they were previously (also SMuFL order).
//  See: https://forum.sagittal.org/viewtopic.php?p=3742#p3742
