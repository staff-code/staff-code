const loadGoogleFont = (): void => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://fonts.googleapis.com/css?family=Roboto+Mono"
    document.getElementsByTagName("head")[0].appendChild(link)
}

export {
    loadGoogleFont,
}
