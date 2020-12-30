import {downloadSvg} from "./download"

const buildDownloadButton = (display: HTMLElement): HTMLButtonElement => {
    const downloadButton = document.createElement("button")
    downloadButton.textContent = "Download image"
    downloadButton.addEventListener("click", (): void => downloadSvg(display))

    return downloadButton
}

export {
    buildDownloadButton,
}
