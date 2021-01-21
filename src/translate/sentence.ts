import {
    BLANK,
    Clause,
    finalChar,
    Io,
    NEWLINE,
    Sentence,
    setAllPropertiesOfObjectOnAnother,
    SPACE,
    sumTexts,
    Word,
} from "@sagittal/general"
import {Unicode} from "./codes"
import {computeEndOfLineUnicodeClauseAndUpdateSmarts, INITIAL_SMARTS, smarts} from "./smarts"
import {computeInputUnicodeClause} from "./word"

const collapseAllWhitespacesToSingleSpaces = (inputSentence: Io & Sentence): Io & Sentence =>
    inputSentence
        .replace(/<br>/g, SPACE)
        .replace(/\s+/g, SPACE)
        .trim() as Io & Sentence

const ensureLineBreaksImmediatelyDisplay = (unicodeSentence: Unicode & Sentence): Unicode & Sentence =>
    finalChar(unicodeSentence) === NEWLINE ?
        `${unicodeSentence} ` as Unicode & Sentence :
        unicodeSentence

const computeInputSentenceUnicode = (inputSentence: Io & Sentence): Unicode & Sentence => {
    // tslint:disable-next-line
    // console.warn("NEW SENTENCE ------------------", inputSentence)

    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})

    const inputs = collapseAllWhitespacesToSingleSpaces(inputSentence).split(SPACE) as Array<Io & Word>

    const unicodeClauses: Array<Unicode & Clause> = inputs.map(computeInputUnicodeClause)
    let unicodeSentence = unicodeClauses.join(BLANK) as Unicode & Sentence
    unicodeSentence = ensureLineBreaksImmediatelyDisplay(unicodeSentence)

    const endOfLineUnicodeClause = computeEndOfLineUnicodeClauseAndUpdateSmarts()

    return sumTexts(unicodeSentence, endOfLineUnicodeClause as Unicode as Unicode & Sentence)
}

// TODO: FEATURE IMPROVE, BLOCKED: FONT REVISION; A PASS TO EVEN OUT THE COMPOSITION OF EACH CONTIGUOUS ADVANCE
//  Original idea is here: https://forum.sagittal.org/viewtopic.php?p=3465#p3465
//  And latest is here: https://forum.sagittal.org/viewtopic.php?p=3558#p3558
//  - Blocked, because I don't understand in the latest post how the new composition of manual advances could possibly
//  Make sense w/r/t to what we have now
//  Update here: https://forum.sagittal.org/viewtopic.php?p=3594#p3594
//  So Dave would plan to redo them
//  Alright, Dave has redone them, but the file he shared has some parsing error
/*
1	1
2	1+1
3	3
4	1+3
5	5
6	3+3
7	7
8	3+5
9	9
10	10
11	11
12	12
13	13
14	14
15	15
16	16
17	7+10
18	9+9
19	9+10
20	10+10
21	10+11
22	11+11
23	11+12
24	12+12
25	12+13
26	13+13
27	13+14
28	14+14
29	14+15
30	15+15
31	15+16
32	16+16
33	11+11+11
34	11+11+12
35	11+12+12
36	12+12+12
37	12+12+13
38	12+13+13
39	13+13+13
40	13+13+14
41	13+14+14
42	14+14+14
43	14+14+15
44	14+15+15
45	15+15+15
46	15+15+16
47	15+16+16
48	16+16+16
49	12+12+12+13
50	12+12+13+13
51	12+13+13+13
52	13+13+13+13
53	13+13+13+14
54	13+13+14+14
55	13+14+14+14
56	14+14+14+14
57	14+14+14+15
58	14+14+15+15
59	14+15+15+15
60	15+15+15+15
61	15+15+15+16
62	15+15+16+16
63	15+16+16+16
64	16+16+16+16
65	13+13+13+13+13
66	13+13+13+13+14
67	13+13+13+14+14
68	13+13+14+14+14
69	13+14+14+4+14
70	14+14+14+14+14
71	14+14+14+14+15
72	14+14+14+15+15
73	14+14+15+15+15
74	14+15+15+15+15
75	15+15+15+15+15
76	15+15+15+15+16
77	15+15+15+16+16
78	15+15+16+16+16
79	15+16+16+16+16
80	16+16+16+16+16
 */

export {
    computeInputSentenceUnicode,
}
