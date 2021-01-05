type Position = number & {_PositionBrand: boolean}

enum Clef {
    TREBLE,
    BASS,
}

enum StemZone {
    MIDDLE_POSITION_AND_ABOVE,
    BELOW_MIDDLE_POSITION,
}

export {
    Clef,
    Position,
    StemZone,
}
