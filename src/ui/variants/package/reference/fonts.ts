import {FontName} from "@sagittal/general"

const loadGoogleFont = (font: FontName): void => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = `https://fonts.googleapis.com/css?family=${font.replace(/ /g, "+")}`
    document.getElementsByTagName("head")[0].appendChild(link)
}

export {
    loadGoogleFont,
}
