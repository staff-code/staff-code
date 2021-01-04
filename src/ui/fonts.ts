const loadFontsThen = (fn: () => void): void => {
    let fontsLoaded = false
    const woff = new FontFace("Bravura Text BB", "url('https://sagittal.github.io/assets/fonts/BravuraTextBB.woff')")
    woff.load().then((): void => {
        document.fonts.add(woff)
        if (!fontsLoaded) {
            fn()
            fontsLoaded = true
        }
    })
    const otf = new FontFace("Bravura Text BB", "url('https://sagittal.github.io/assets/fonts/BravuraTextBB.otf')")
    otf.load().then((): void => {
        document.fonts.add(otf)
        if (!fontsLoaded) {
            fn()
            fontsLoaded = true
        }
    })
}

export {
    loadFontsThen,
}
