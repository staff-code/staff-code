// TODO: REPO ORGANIZATION: EXTRACT STAFF CODE TO ITS OWN REPO
//  - It'll be npm installable, such as into this app
//  - But it'll also surface the part that can be plugged into the bbCode, perhaps as a GitHub release, and not minified
//  - Write a README for the library (how to consume it in the way the Sagittal app currently is)
//  - The compile and redeploy to forum code would then ... hm yeah dunno, maybe
//  Get rid of that code because I won’t count on having to do it often in future
//  - Start the EDO script group to try consuming it in that way too

type UnicodeLiteral = string & {_UnicodeLiteralBrand: boolean}

export {
    UnicodeLiteral,
}
