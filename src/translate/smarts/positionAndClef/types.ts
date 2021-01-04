type Position = number & {_PositionBrand: boolean}

enum Clef {
    TREBLE,
    BASS,
}

enum StemZone {
    ABOVE_MIDDLE_POSITION,
    MIDDLE_POSITION_AND_BELOW,
}

export {
    Clef,
    Position,
    StemZone,
}
