import {Px} from "@sagittal/general"

enum SmartStave {
    LINES_1 = "LINES_1",
    LINES_2 = "LINES_2",
    LINES_3 = "LINES_3",
    LINES_4 = "LINES_4",
    LINES_5 = "LINES_5",
    LINES_6 = "LINES_6",
    PLAINCHANT = "PLAINCHANT",
    LUTE = "LUTE",
}

type Octals = Px & {_OctalsBrand: boolean}

export {
    SmartStave,
    Octals,
}
