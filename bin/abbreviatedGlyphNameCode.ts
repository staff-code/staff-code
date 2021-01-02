import {BLANK, isUndefined, Name, SPACE, Word} from "@sagittal/general"
import {Code, Unicode} from "../src"

const removeVowels = (string: string): string => {
    const replaced = string
        .slice(1)
        .replace(/ight/g, "t")
        .replace(/[aeiou]/g, BLANK)

    return `${string[0]}${replaced}`
}

const EXCEPTION_WORDS: Record<string, string> = {
    arrowhead: "ah",
    barline: "bl",
    bracket: "bk",
    down: "dn",
    downs: "dn",
    fingering: "fi",
    flam: "fm",
    flap: "fp",
    fortissimo: "ff",
    forzando: "fz",
    hauptrhythmus: "hr",
    headset: "hs",
    highest: "hs",
    lowest: "ls",
    notehead: "nh",
    pianissimo: "pp",
    riffle: "rl",
    ripple: "re",
    scuff: "sf",
    scuffle: "se",
    slam: "sm",
    slap: "sp",
    staccatissimo: "ss",
    stamp: "sa",
    stockhausen: "sh",
    stomp: "so",
    stress: "i",
    strophicus: "sp",
    sforzato: "sz",
    zink: "zi",
    zank: "za",
    keyboard: "kb",
    keystone: "ks",
    half: "hf",
    thumb: "tm",
    semibrevis: "sb",
    semifusa: "sf",
    prolation: "pl",
    proportion: "pp",
    fifteenth: "ft",
    thirteenth: "tt",
    white: "wt",
    concave: "cc",
    convex: "cv",
    semifusae: "sf",
    turn: "tn",
    finger: "fi",
    choke: "ck",
    celesta: "ce",
    conga: "cg",
    cencerro: "cc",
    cannon: "cn",
    coins: "co",
    cuica: "cu",
    harmonica: "hm",
    harp: "hp",
    maraca: "ma",
    maracas: "ms",
    tubaphone: "tp",
    tambourine: "tn",
    timbales: "ti",
    tom: "to",
    tam: "ta",
    dots: "ds",
    vibraslap: "vs",
    stem: "sm",
    strings: "sr",
    common: "cn",
    largest: "ls",
    large: "lg",
    faster: "fr",
    fast: "ft",
    slower: "sr",
    slowest: "ss",
    smaller: "mr",
    smallest: "ms",
    tremblement: "tm",
    kahn: "kn",
    johnston: "jn",
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
