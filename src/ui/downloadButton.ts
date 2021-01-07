import {downloadSvg} from "./download"

const buildDownloadButton = (display: HTMLElement): HTMLButtonElement => {
    const downloadButton = document.createElement("button")
    downloadButton.textContent = "\u{1f4be}\ufe0e Image"
    downloadButton.style.margin = "2px"
    downloadButton.style.cursor = "pointer"
    downloadButton.addEventListener("click", (): void => downloadSvg(display))

    return downloadButton
}

export {
    buildDownloadButton,
}
