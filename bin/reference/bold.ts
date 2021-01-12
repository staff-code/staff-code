import {matchesCaseAgnostic} from "./case"
import {ShouldBoldParameters} from "./types"

const shouldBold = ({
    glyphNameChar,
    code,
    codeIndex,
    codeCharsAlreadyMatchedByThisMnemonicWord,
}: ShouldBoldParameters): boolean =>
    codeIndex < code.length
    && matchesCaseAgnostic({glyphNameChar, code, codeIndex})
    && codeCharsAlreadyMatchedByThisMnemonicWord < 2

export {
    shouldBold,
}
