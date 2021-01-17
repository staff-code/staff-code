import {APP_MARGIN, EBONY, IVORY, LIGHT_EBONY, LIGHT_TAN, MAX_APP_WIDTH, TAN} from "./constants"
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
            color: #333333;
        }

        body {
            position: fixed;
            background-color: #faf8f6;
            height: 100%;
            width: 100%;
        }

        .staff-code {
            height: 100%;
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: ${MAX_APP_WIDTH}px;
        }

        .sc-ui {
            display: flex;
            flex-direction: column;
            margin-right: ${APP_MARGIN}px;
        }

        .sc-controls {
            display: flex;
            justify-content: flex-end;
        }

        a {
            color: ${TAN};
        }

        a:hover {
            color: ${LIGHT_TAN};
        }

        a:visited {
            color: ${EBONY};
        }

        a:visited:hover {
            color: ${LIGHT_EBONY};
        }

        ::selection {
            background: ${IVORY};
        }
    `

    const style = document.createElement("style")
    style.textContent = combinedCss
    document.getElementsByTagName("head")[0].appendChild(style)
}

export {
    applyCss,
}
