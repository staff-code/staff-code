import {downloadSvg} from "./svg"

const buildDownloadButton = (): HTMLButtonElement => {
    const downloadButton = document.createElement("button")
    downloadButton.textContent = "\u21e9 image" // TODO: we should try the FontAwesome: fas fa-download &#xf019;.
    downloadButton.style.margin = "2px"
    downloadButton.style.cursor = "pointer"
    downloadButton.style.fontFamily = "sans-serif"
    downloadButton.style.fontSize = "0.75em"
    downloadButton.addEventListener("click", downloadSvg)

    return downloadButton
}

export {
    buildDownloadButton,
}
