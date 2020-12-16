import {downloadSvg} from "../svg"

const downloadButton = document.createElement("button")
downloadButton.textContent = "Download image"
downloadButton.addEventListener("click", downloadSvg)

export {
    downloadButton,
}
