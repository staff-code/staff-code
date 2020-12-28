import {Io, isUndefined, Word} from "@sagittal/general"
import {LowercasedCode, Unicode} from "./codes"
import {isUnicodeLiteral} from "./codes/literal"
import {EMPTY_UNICODE} from "./constants"
import {shouldNotBeDisplayed, smarts} from "./smarts"

// TODO: FEATURE IMPROVE, TOUGH AND LOW PRIORITY: PROGRAMMATICALLY DETERMINE WIDTH OF UNICODE LITERAL SYMBOLS
//  Dave suggests use JS to calculate width of char to estimate its width
//  Preliminary research suggests there is a way to do it, but it's likely pretty tricky
//  A problem is that we'd need to pull Bravura Text in to do it, since it doesn't have everything's advances 0'ed out
//  To solve the missing zero CSP bug in Bravura Text.
//  See: http://forum.sagittal.org/viewtopic.php?p=3172#p3172
//  - In the end, the widths should not be mixed up with the mapping of code to unicode. Different width per font!
//  Have a different config file for each font, and just do the computation once all up front, instead of on the fly.
//  See: http://forum.sagittal.org/viewtopic.php?p=3181#p3181
//  - Good news. The advance width info for Bravura already exists in JSON,
//  As part of this file: https://github.com/steinbergmedia/bravura/blob/master/redist/bravura_metadata.json
//  Its structure is described here: https://w3c.github.io/smufl/gitbook/specification/glyphadvancewidths.html
//  Although now I see that is not actually included in Bravura yet...
// tslint:disable max-line-length
/*
[quote="Dave Keenan" post_id=3203 time=1608776543 user_id=2]
I've just realised that, since we are forced to add our own right-sidebearing anyway (according to our sp<n> setting), what we really want is the right coordinate of the bounding box of each symbol — not its advance-width, which contains right-sidebearing in the case of the sagittal accents, and presumably other things that can kern.

The bounding box data should already be in that JSON file.
[/quote]

Yes, it is. Just checked. And I think you're right. It's what we want.

[quote]https://w3c.github.io/smufl/gitbook/specification/glyphbboxes.html. We want the first coordinate of bBoxNE multiplied by 40 and bankers-rounded to the nearest integer.
[/quote]

Curious about the derivation of that 40 number, but also willing to blindly accept it.

[quote]
In case it hasn't occurred to you, I note that the ultimate would be to have dependencies on both
[url=https://github.com/w3c/smufl/tree/gh-pages/metadata/glyphNames.json]https://github.com/w3c/smufl/tree/gh-pages/metadata/glyphNames.json[/url] and
[url=https://github.com/steinbergmedia/bravura/blob/master/redist/bravura_metadata.json]https://github.com/steinbergmedia/bravura/blob/master/redist/bravura_metadata.json[/url]
and make a javascript tool that does, at transpile time, what my spreadsheet does, to glyphNames.json. That way, it would automatically generate new codes and widths for every new release of SMuFL/Bravura. I'm not saying you should do this any time soon, or ever, but I thought I should mention the possibility. :)
 */
// So you'd want me to implement your naming scheme in the JavaScript too.

const computeMaybeNotDisplayedUnicode = (unicode: Unicode & Word): Unicode & Word =>
    shouldNotBeDisplayed(unicode) ?
        EMPTY_UNICODE as Unicode & Word :
        unicode

const computeUnicodeFromUnicodeLiteral = (input: Io & Word): Unicode & Word =>
    String.fromCharCode(parseInt(input.replace(/^U\+(.*)/, "0x$1"))) as Unicode & Word

const computeUnicodeAsFallbackToInput = (input: Io & Word): Unicode & Word =>
    `${input} ` as Unicode & Word // The space is important to separate multiple fallen back words in a row.

const getUnicode = (input: Io & Word): Unicode & Word => {
    const lowercasedCode: LowercasedCode = input.toLowerCase() as LowercasedCode

    // TODO: CLEAN, READY TO GO: UNDO REFACTOR RE: SMARTS DOT LOWERCASED_CODE_MAP VS SMARTS DOT CLEF
    //  The problem with this refactor is that now it's hard to debug the smarts state
    //  Because it's got this huge array on it when all you really want to know is which clef is it set to
    //  - It's also kind of troubling how you export that TREBLE_LOWERCASED_CODE_MAP from smarts/positionAndClef
    //  - And if you're constantly setAllPropertiesOfObjectOnAnother, the INITIAL_SMARTS, that's all of that!
    const unicode = smarts.lowercasedCodeMap[lowercasedCode]

    if (!isUndefined(unicode)) return unicode

    if (isUnicodeLiteral(input)) return computeUnicodeFromUnicodeLiteral(input)

    return computeUnicodeAsFallbackToInput(input)
}

export {
    computeMaybeNotDisplayedUnicode,
    getUnicode,
}
