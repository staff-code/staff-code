import {Abbreviation, Name, Word} from "@sagittal/general"
import {Unicode} from "../../src"

const EXCEPTION_WORDS: Record<Name<Unicode> & Word, Abbreviation<Unicode> & Word> = {
    arrowhead: "ah",    // Arrow	ar	27x
    barline: "bl",      // Brace, brass, bracket	br, br, br	13x
    bow: "bo",          // Vowel digraph	ow	25x
    bracket: "bk",      // Brace, brass, barline	br, br, br	27x
    cannon: "cn",       // Conga, cencerro, coins	cn, cn, cn	1x
    celesta: "ce",      // Claves	cl	1x
    cencerro: "cc",     // Conga, cannon, coins	cn, cn, cn	1x
    choke: "ck",        // Chinese	ch	1x
    coins: "co",        // Conga, cencerro, canon	cn, cn, cn	1x
    common: "cn",       // Comma	cm	6x
    concave: "cc",      // Convex	cn	9x
    conga: "cg",        // Cencerro, cannon, coins	cn, cn, cn	1x
    convex: "cv",       // Concave	cn	8x
    cuica: "cu",        // Cencero	cc	1x
    dots: "ds",         // Dot	dt	14x
    down: "dn",         // Vowel digraph	ow	280x
    download: "dn",     // Vowel digraph	ow	1x
    downs: "dn",        // Vowel digraph	ow	4x
    fast: "ft",         // Fastest	fs	10x
    faster: "fr",       // Fastest	fs	12x
    fifteenth: "ft",    // Fifth	ff	3x
    finger: "fi",       // Function, fingernails, figbass, fretboard, fermata	fn, fn, fg, fr, fr	6x
    fingering: "fi",    // Function, fingernails, figbass, fretboard, fermata	fn, fn, fg, fr, fr	51x
    flam: "fm",         // Flat	fl	3x
    flap: "fp",         // Flat	fl	3x
    fortissimo: "ff",   // Forte	fr	0x	fortissimo is not actually used in a glyph name yet (they use FF instead)
    forzando: "fz",     // Forte	fr	1x
    half: "hf",         // Heel, vowel digraph	hl, al	105x
    harmonica: "hm",    // Harp	hr	1x
    harp: "hp",         // Harmonica	hr	33x
    hauptrhythmus: "hr",// Hauptstimme	hp	1x
    headset: "hs",      // Headphones	hd	1x
    johnston: "jn",     // Vowel digraph	oh	8x
    kahn: "kn",         // Vowel digraph	ah	82x
    keyboard: "kb",     // Vowel digraph	ey	40x
    keystone: "ks",     // Vowel digraph	ey	3x
    large: "lg",        // Larger, largest	lr, lr	41x
    largest: "ls",      // Larger, large	lr, lr	8x
    low: "lo",          // Vowel digraph	ow	7x
    lower: "lr",        // Vowel digraph	ow	100x
    lowered: "lr",      // Vowel digraph	ow	5x
    lowering: "lr",     // Vowel digraph	ow	1x
    lowest: "ls",       // Vowel digraph	ow	2x
    maraca: "ma",       // Marimba, maracas	mr, mr	1x
    maracas: "ms",      // Marimba, maraca	mr, mr	1x
    notehead: "nh",     // Note	nt	198x
    pianissimo: "pp",   // Piano	pn	1x
    prolation: "pl",    // Proportion	pr	17x
    proportion: "pp",   // Prolation	pr	16x
    riffle: "rl",       // Riff	rf	1x
    ripple: "re",       // Rip, riffle	rp, rl	1x
    scuff: "sf",        // Scrape	sc	1x
    scuffle: "se",      // Scrape, scuff, slam	sc, sf, sl	1x
    semibrevis: "sb",   // Semiminima	sm	14x
    semifusa: "sf",     // Semiminima	sm	3x
    semifusae: "sf",    // Semiminimae	sm	5x
    sforzato: "sz",     // Sforzando	sf	3x
    slam: "sm",         // Slap	sl	2x
    slap: "sp",         // Slam	sl	2x
    slower: "sr",       // Slow	sl	7x
    slowest: "ss",      // Slow	sl	6x
    smaller: "mr",      // Small, slower	sm, sr	0x	smaller is not actually used in a glyph name yet
    smallest: "ms",     // Small, slowest	sm, ss	7x
    staccatissimo: "ss",// Staccato	st	6x
    stamp: "sa",        // Step, slam, slap	st, sm, sp	6x
    stem: "sm",         // Staff, strings, string	st, st, st	92x
    stockhausen: "sh",  // Stein	st	19x
    stomp: "so",        // Step, slam, slap	st, sm, sp	3x
    stress: "sr",       // Stacatto	st	2x
    strings: "sr",      // Staff, stem, string	st, st, st	43x
    strophicus: "sp",   // Staff	st	7x
    tam: "ta",          // Tom	tm	6x
    tambourine: "tn",   // Timpani, timbales, tabla, triangle	tm, tm, tb, tr	1x
    thirteenth: "tt",   // Third	th	3x
    thumb: "tm",        // Third	th	4x
    timbales: "ti",     // Timpani, tambourine	tm, tm	1x
    tom: "to",          // Tam	tm	8x
    tremblement: "tm",  // Trill, turn	tr, tr	2x
    tubaphone: "tp",    // Tabla	tb	1x
    turn: "tn",         // Trill, tremblement, vowel digraph (not US)	tr, tr, ur	17x
    turned: "tn",       // Consistency with "turn", vowel digraph (not US)	ur	20x
    vibraslap: "vs",    // Vibra	vb	1x
    white: "wt",        // Whole	wh	90x
    zank: "za",         // Zink	zn	1x
    zink: "zi",         // Zank	zn	1x
}

const EXCEPTION_WORD_ENTRIES =
    Object.entries(EXCEPTION_WORDS) as Array<[Name<Unicode> & Word, Abbreviation<Unicode> & Word]>

export {
    EXCEPTION_WORD_ENTRIES,
}
