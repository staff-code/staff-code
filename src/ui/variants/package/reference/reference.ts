import {Section} from "../../../../../bin"
import {components} from "../globals"
import {handleReferenceInsert, handleReferenceInsertUndo} from "./section"
import referenceJson from "./reference.json"
import {appendSection} from "./section"
import {buildTocWrapper} from "./toc"

const buildReference = (): HTMLDivElement => {
    const referenceBorderWrapper = document.createElement("div")
    referenceBorderWrapper.classList.add("sc-reference-border-wrapper")

    const reference = document.createElement("div")
    reference.classList.add("sc-reference")
    referenceBorderWrapper.appendChild(reference)
    components.reference = reference

    const topLink = document.createElement("a")
    topLink.id = "top"
    reference.appendChild(topLink)

    const tocTitleWrapper = buildTocWrapper()
    reference.appendChild(tocTitleWrapper)

    const sections = referenceJson as Section[]
    sections.forEach(appendSection)

    reference.addEventListener("click", handleReferenceInsert)
    document.addEventListener("keydown", handleReferenceInsertUndo)

    return referenceBorderWrapper
}

export {
    buildReference,
}
