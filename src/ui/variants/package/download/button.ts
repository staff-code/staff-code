import {downloadSvg} from "./svg"

const buildDownloadButton = (): HTMLButtonElement => {
    const downloadButton = document.createElement("button")
    downloadButton.innerHTML = `<img src="https://raw.githubusercontent.com/Keyamoon/IcoMoon-Free/master/SVG/200-download3.svg"/> image`
    downloadButton.classList.add("sc-download")
    downloadButton.addEventListener("click", downloadSvg)

    return downloadButton
}

export {
    buildDownloadButton,
}
