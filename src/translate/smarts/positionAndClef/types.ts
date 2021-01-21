type Position = number & {_PositionBrand: boolean}

enum Clef {
    TREBLE,
    BASS,
}

enum StemZone {
    MIDDLE_POSITION_AND_ABOVE,
    BELOW_MIDDLE_POSITION,
}

enum Pitch {
    C7,
    B6,
    A6,
    G6,
    F6,
    E6,
    D6,
    C6,
    B5,
    A5,
    G5,
    F5,
    E5,
    D5,
    C5,
    B4,
    A4,
    G4,
    F4,
    E4,
    D4,
    C4,
    B3,
    A3,
    G3,
    F3,
    E3,
    D3,
    C3,
    B2,
    A2,
    G2,
    F2,
    E2,
    D2,
    C2,
    B1,
    A1,
    G1,
    F1,
    E1,
    D1,
    C1,
}

enum PitchOrPosition {
    PITCH,
    POSITION,
}

export {
    Clef,
    Pitch,
    Position,
    StemZone,
    PitchOrPosition,
}
