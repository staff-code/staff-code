import {loadFontsThen, setupPackageRoot} from "../src"

loadFontsThen((): void => {
    const root: HTMLDivElement = setupPackageRoot()
    document.body.appendChild(root)
})
