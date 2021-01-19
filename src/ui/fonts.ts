import {BRAVURA_TEXT_BB_OTF, BRAVURA_TEXT_BB_WOFF, WEB_APP_URL} from "./constants"

const loadFontsThen = (fn: () => void): void => {
    let fontsLoaded = false
    const woff = new FontFace("Bravura Text BB", `url('${BRAVURA_TEXT_BB_WOFF}'), url('${WEB_APP_URL}/${BRAVURA_TEXT_BB_WOFF}')`)
    woff.load().then((): void => {
        document.fonts.add(woff)
        if (!fontsLoaded) {
            fn()
            fontsLoaded = true
        }
    })
    const otf = new FontFace("Bravura Text BB", `url('${BRAVURA_TEXT_BB_OTF}'), url('${WEB_APP_URL}/${BRAVURA_TEXT_BB_OTF}')`)
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
