import {formatPx} from "@sagittal/general"
import {DARK_GREY, DARK_TAN, GREY, LIGHTER_TAN, LIGHT_GREY, LIGHT_TAN, MAX_APP_WIDTH, TAN} from "./constants"
import {DISPLAY_CSS} from "./display"
import {PANEL_CSS} from "./panel"
import {REFERENCE_CSS} from "./reference"

// tslint:disable-next-line comment-format
// language=CSS
const GENERIC_CSS = `
    * {
        color: ${DARK_GREY};
    }

    body {
        position: fixed;
        background-color: ${LIGHTER_TAN};
        height: 100%;
        width: 100%;
    }

    .staff-code {
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: ${formatPx(MAX_APP_WIDTH)};
    }

    a {
        color: ${DARK_TAN};
    }

    a:hover {
        color: ${TAN};
    }

    a:visited {
        color: ${GREY};
    }

    a:visited:hover {
        color: ${LIGHT_GREY};
    }

    ::selection {
        background-color: ${LIGHT_TAN};
    }
`

const applyCss = (): void => {
    const combinedCss = `
        ${REFERENCE_CSS}
        ${PANEL_CSS}
        ${DISPLAY_CSS}
        ${GENERIC_CSS}
    `

    const style = document.createElement("style")
    style.textContent = combinedCss
    document.getElementsByTagName("head")[0].appendChild(style)
}

export {
    applyCss,
}
