import {BLANK, isUndefined, Name, SPACE, Word} from "@sagittal/general"
import {Code, Unicode} from "../src"

// todo: clean up all this stuf

const removeVowels = (string: string): string => {
    const replaced = string
        .slice(1)
        .replace(/igh/g, BLANK)
        .replace(/[aeiou]/g, BLANK)

    return `${string[0]}${replaced}`
}

const EXCEPTION_WORDS: Record<string, string> = {
    arrowhead: "ah",
    barline: "bl",
    bow: "bo",
    bracket: "bk",
    celesta: "ce",
    cencerro: "cc",
    choke: "ck",
    common: "cn",
    concave: "cc",
    conga: "cg",
    convex: "cv",
    cannon: "cn",
    coins: "co",
    cuica: "cu",
    down: "dn",
    download: "dn",
    downs: "dn",
    dots: "ds",
    fast: "ft",
    faster: "fr",
    fifteenth: "ft",
    finger: "fi",
    fingering: "fi",
    flam: "fm",
    flap: "fp",
    fortissimo: "ff",
    forzando: "fz",
    half: "hf",
    harmonica: "hm",
    harp: "hp",
    hauptrhythmus: "hr",
    headset: "hs",
    johnston: "jn",
    kahn: "kn",
    keyboard: "kb",
    keystone: "ks",
    large: "lg",
    largest: "ls",
    low: "lo",
    lower: "lr",
    lowered: "lr",
    lowering: "lr",
    lowest: "ls",
    maraca: "ma",
    maracas: "ms",
    notehead: "nh",
    pianissimo: "pp",
    prolation: "pl",
    proportion: "pp",
    riffle: "rl",
    ripple: "re",
    scuff: "sf",
    scuffle: "se",
    semibrevis: "sb",
    semifusa: "sf",
    semifusae: "sf",
    sforzato: "sz",
    slam: "sm",
    slap: "sp",
    slower: "sr",
    slowest: "ss",
    smaller: "mr",
    smallest: "ms",
    staccatissimo: "ss",
    stamp: "sa",
    stem: "sm",
    stockhausen: "sh",
    stomp: "so",
    stress: "sr",
    strings: "sr",
    strophicus: "sp",
    tam: "ta",
    tambourine: "tn",
    thirteenth: "tt",
    thumb: "tm",
    timbales: "ti",
    tom: "to",
    tremblement: "tm",
    tubaphone: "tp",
    turn: "tn",
    turned: "tn",
    vibraslap: "vs",
    white: "wt",
    zank: "za",
    zink: "zi",
}
const EXCEPTION_WORD_ENTRIES = Object.entries(EXCEPTION_WORDS)

const computeAbbreviatedGlyphNameCode = (glyphName: Name<Unicode>): Code & Word => {
    const words = glyphName
        .replace(/wiggleVIbrato/, "wiggleVibrato")
        .replace(/1st/, "1")
        .replace(/2nd/, "2")
        .replace(/3rd/, "3")
        .replace(/(\d)th/, "$1")
        .replace(/([A-Z])/g, " $1")
        .replace(/(\d)/g, " $1 ")
        .replace(/\s+/g, SPACE)
        .trim()
        .split(SPACE)

    const lowercasedWords = words.map((word: string): string => word.toLowerCase())

    return lowercasedWords.map((lowercasedWord: string): string => {
        // first possibility
        if (lowercasedWord.length === 1) return lowercasedWord.toUpperCase()

        // second possibility
        if (lowercasedWord.length === 2) return lowercasedWord

        // third possibility
        let maybeException = undefined
        // todo: this could be improved
        EXCEPTION_WORD_ENTRIES.forEach(([exception, replacement]: [string, string]): void => {
            // if (lowercasedWord.match(new RegExp("^" + exception))) {
            if (lowercasedWord === exception) {
                maybeException = replacement
            }
        })
        if (!isUndefined(maybeException)) return maybeException as string

        // fourth possibility
        const removedVowelsWord = removeVowels(lowercasedWord)
        if (removedVowelsWord.length < 2) return lowercasedWord.slice(0, 2)//removedVowelsWord.toUpperCase()

        // fifth possibility
        return removedVowelsWord.slice(0, 2)
    }).join(BLANK) as Code & Word


    // const noVowelWords = lowercaseWords
    // const twoLetterWords = noVowelWords.map((word: string): string => {
    //     if (word.length === 1) return word.toUpperCase()
    //
    //     let specialCased = word
    //     EXCEPTION_WORD_ENTRIES.forEach(([exception, replacement]: [string, string]): void => {
    //         specialCased = word.replace(new RegExp("^" + exception), replacement)
    //         console.log("word is", word)
    //         if (word === "large") {
    //             console.log("exception", exception, "replacement", replacement, "specialCased", word.replace(new RegExp("^" + exception), replacement))
    //         }
    //     })
    //
    //     return specialCased.slice(0, 2)
    // })
    //
    // return twoLetterWords.join(BLANK) as Code & Word
}

export {
    computeAbbreviatedGlyphNameCode,
}
