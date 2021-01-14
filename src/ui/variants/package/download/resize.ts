import {Px} from "@sagittal/general"

// TODO: CLEAN, READY TO GO: TEST MORE UI HELPER METHODS
//  You should just go through everything that looks unit testable and backfill them

const cropSVGToFitContents = (svg: SVGGraphicsElement): void => {
    const bbox = svg.getBBox()

    svg.setAttribute("width", `${bbox.x + bbox.width + bbox.x}`)
    // todo I think irrelevant but helpful to read quickly
    svg.setAttribute("height", `${bbox.y + bbox.height + bbox.y}`)
}

const getDummyHeight = (svg: SVGGraphicsElement): Px => {
    const bbox = svg.getBBox()

    return bbox.y + bbox.height + bbox.y as Px
}

export {
    cropSVGToFitContents,
    getDummyHeight,
}
