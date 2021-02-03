import fs from "fs"
import {version} from "../../package.json"

const generateVersion = (): void => {
    fs.writeFileSync(
        "src/gui/variants/package/reference/banner/version.json",
        JSON.stringify({version}, undefined, 2),
    )
}

generateVersion()
