export {REFERENCE_SECTION_CSS} from "./css"
export {appendSection} from "./section"
export {handleReferenceInsert, handleReferenceInsertUndo} from "./handlers"

// TODO: SORTED SECTIONS
//  SMuFL already roughly sorts them by commonality.
//  But sure. I don't think we have to rigorously quantify popularity,
//  Because there are other factors like interrelatedness of the sections.
//  But if you just let me know your preferred order, I can add a sorting layer.
