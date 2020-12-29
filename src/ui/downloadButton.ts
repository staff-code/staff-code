import {downloadSvg} from "./download"
import {buildSvg} from "./svg"

const buildDownloadButton = (display: HTMLElement): HTMLButtonElement => {
    const svg = buildSvg()

    const downloadButton = document.createElement("button")
    downloadButton.textContent = "Download image"
    downloadButton.addEventListener("click", (): void => downloadSvg(display, svg))

    return downloadButton
}

export {
    buildDownloadButton,
}
