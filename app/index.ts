import {loadFonts, setupPackageRoot} from "../src"

const googleAnalyticsTag1 = document.createElement("script")
googleAnalyticsTag1.async = true
googleAnalyticsTag1.src = "https://www.googletagmanager.com/gtag/js?id=G-QY3J3V3JGZ"
document.head.appendChild(googleAnalyticsTag1)

const googleAnalyticsTag2 = document.createElement("script")
googleAnalyticsTag2.innerHTML = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-QY3J3V3JGZ');
`
document.head.appendChild(googleAnalyticsTag2)

loadFonts().then((): void => {
    const root: HTMLSpanElement = setupPackageRoot({gui: {imageSelect: false}})
    document.body.appendChild(root)
})
