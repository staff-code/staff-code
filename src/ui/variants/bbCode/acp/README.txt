StaffCode installation instructions

- Download https://staffcode.org/assets/fonts/BravuraTextBB.otf, https://staffcode.org/assets/fonts/BravuraTextBB.woff, and https://staffcode.org/staffCode.js.
- Drag `BravuraTextBB.otf` and `BravuraTextBB.woff` to your `assets/fonts` folder, along with any other fonts your users may wish to use. SMuFL-compliant fonts will not work out of the box; a non-trivial amount of modification to a font is required to work with StaffCode.
- Drag `staffCode.js` to your `assets/javascripts` folder.
- In Admin Control Panel -> Posting -> BBCodes click "Add a new BBCode". This one is for the block mode.
- Fill in the BBCode usage field with:

{{STAFF_BBCODE_USAGE}}

- Fill in the "HTML Replacement" field with:

{{STAFF_HTML_REPLACEMENT}}

If you want the StaffCode your users provide to always be preceded by certain staff code (such as a particular clef and/or code to turn on the staff), you can put any StaffCode you like just before the {TEXT} token.

If you want to hook into StaffCode's translation with a callback, you can provide one. StaffCode will call your callback any time translation of input staff codes to Unicode occurs. The first argument to the callback is the input codes, and the second argument is the output Unicode. You must provide the callback by inserting a second script tag above the one sourcing staffCode.js, in this format:

<script>
globalThis.staffCodeCallback = (inputSentence, unicodeSentence) => {
    console.warn("testing 1, 2, 3...", unicodeSentence, inputSentence)
}
</script>

- Fill in the "Help line" field with:

{{STAFF_HELP_LINE}}

- In Admin Control Panel -> Posting -> BBCodes click "Add a new BBCode". This one is for the inline mode.
- Fill in the BBCode usage field with:

{{SC_BBCODE_USAGE}}

- Fill in the "HTML Replacement" field with:

See the HTML Replacement section for the [staff] code above for further details if you are interested in customizing.

{{SC_HTML_REPLACEMENT}}

- Fill in the "Help line" field with:

{{SC_HELP_LINE}}
