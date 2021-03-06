import {downloadImage} from "./handlers"

const buildDownloadButton = (): HTMLButtonElement => {
    const downloadButton = document.createElement("button")
    downloadButton.innerHTML = `Download image`
    downloadButton.classList.add("sc-download")
    downloadButton.addEventListener("click", (): void => {
        downloadImage().then()
    })

    return downloadButton
}

export {
    buildDownloadButton,
}
