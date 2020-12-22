const buildSvg = (): SVGElement => {
    const svg = document.createElement("svg") as Element as SVGElement
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink")

    return svg
}

export {
    buildSvg,
}
