import {CaseDesensitized, Code} from "./codes"

const caseDesensitize = <T extends Code>(code: T): T & CaseDesensitized =>
    code.toLowerCase() as T & CaseDesensitized

export {
    caseDesensitize,
}
