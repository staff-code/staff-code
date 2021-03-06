import {components} from "../globals"
import {appendSections, handleReferenceInsert, handleReferenceInsertUndo} from "./section"
import {buildTocWrapper} from "./toc"

const buildReference = (): HTMLDivElement => {
    const referenceBorderWrapper = document.createElement("div")
    referenceBorderWrapper.classList.add("sc-reference-border-wrapper")

    const reference = document.createElement("div")
    reference.classList.add("sc-reference")
    components.reference = reference
    referenceBorderWrapper.appendChild(reference)

    const topAnchor = document.createElement("a")
    topAnchor.id = "top"
    reference.appendChild(topAnchor)

    const tocTitleWrapper = buildTocWrapper()
    reference.appendChild(tocTitleWrapper)

    appendSections()

    reference.addEventListener("click", handleReferenceInsert)
    document.addEventListener("keydown", handleReferenceInsertUndo)

    return referenceBorderWrapper
}

export {
    buildReference,
}
