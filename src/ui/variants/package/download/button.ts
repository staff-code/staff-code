import {downloadSvg} from "./svg"

const buildDownloadButton = (): HTMLButtonElement => {
    const downloadButton = document.createElement("button")
    downloadButton.innerHTML = `<img style="height: 1em; vertical-align: middle" src="https://raw.githubusercontent.com/Keyamoon/IcoMoon-Free/master/SVG/200-download3.svg"/> image`
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
