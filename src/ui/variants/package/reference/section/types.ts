import {Html, Link} from "@sagittal/general"

type Explanation = Html & {_ExpanationBrand: boolean}
type Parenthetical = string & {_ParentheticalBrand: boolean}
type LinkedText = {link: Link, text: string}

export {
    Explanation,
    Parenthetical,
    LinkedText,
}
