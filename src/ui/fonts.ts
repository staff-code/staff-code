// tslint:disable no-reaching-imports

import {BRAVURA_TEXT_SC, BRAVURA_TEXT_SC_OTF, BRAVURA_TEXT_SC_WOFF, WEB_APP_URL} from "./constants"

const loadFonts = (): Promise<void> => {
    return new Promise(async (resolve: () => void, reject: () => void): Promise<void> => {
        // @ts-ignore
        const localWoffUrl = await import(`../../assets/fonts/BravuraTextSC.woff`)
        const localWoff = new FontFace(BRAVURA_TEXT_SC, `url('${localWoffUrl.default}`)
        localWoff.load().then((): void => {
            document.fonts.add(localWoff)
            resolve()
        }).catch((): void => {
            const remoteWoff = new FontFace(BRAVURA_TEXT_SC, `url('${WEB_APP_URL}/${BRAVURA_TEXT_SC_WOFF}')`)
            remoteWoff.load().then((): void => {
                document.fonts.add(remoteWoff)
                resolve()
            }).catch((): void => {
                reject()
            })
        })

        // @ts-ignore
        const localOtfUrl = await import(`../../assets/fonts/BravuraTextSC.otf`)
        const localOtf = new FontFace(BRAVURA_TEXT_SC, `url('${localOtfUrl.default}`)
        localOtf.load().then((): void => {
            document.fonts.add(localOtf)
            resolve()
        }).catch((): void => {
            const remoteOtf = new FontFace(BRAVURA_TEXT_SC, `url('${WEB_APP_URL}/${BRAVURA_TEXT_SC_OTF}')`)
            remoteOtf.load().then((): void => {
                document.fonts.add(remoteOtf)
                resolve()
            }).catch((): void => {
                reject()
            })
        })
    })
}

export {
    loadFonts,
}
