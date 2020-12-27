import {downloadSvg} from "./download"

const buildDownloadButton = (display: HTMLElement, svg: SVGElement): HTMLButtonElement => {
    const downloadButton = document.createElement("button")
    downloadButton.textContent = "Download image"
    downloadButton.addEventListener("click", (): void => downloadSvg(display, svg))

    return downloadButton
}

export {
    buildDownloadButton,
}
