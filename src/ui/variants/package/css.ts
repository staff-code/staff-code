import {formatPx} from "@sagittal/general"
import {
    APP_MARGIN,
    DARK_GREY,
    DARK_TAN,
    GREY,
    LIGHTER_TAN,
    LIGHT_GREY,
    LIGHT_TAN,
    MAX_APP_WIDTH,
    TAN,
} from "./constants"
import {COPY_LINK_CSS} from "./copyLink"
import {DOWNLOAD_CSS} from "./download"
import {INPUT_CSS} from "./input"
import {REFERENCE_CSS} from "./reference"
import {SPINNER_CSS} from "./spinners"

const applyCss = (): void => {
    // tslint:disable-next-line comment-format
    // language=CSS
    const combinedCss = `
        ${COPY_LINK_CSS}
        ${DOWNLOAD_CSS}
        ${INPUT_CSS}
        ${REFERENCE_CSS}
        ${SPINNER_CSS}
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

        .sc-ui {
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            margin-right: ${formatPx(APP_MARGIN)};
        }

        .sc-controls {
            display: flex;
            justify-content: flex-end;
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

    const style = document.createElement("style")
    style.textContent = combinedCss
    document.getElementsByTagName("head")[0].appendChild(style)
}

export {
    applyCss,
}
