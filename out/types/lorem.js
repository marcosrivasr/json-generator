"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomParagraph = exports.generateRandomTitle = void 0;
function generateRandomLorem(wordsPerSentence, sentencesPerParagraph) {
    let sentences = [];
    let paragraphs = [];
    for (let j = 0; j < sentencesPerParagraph; j++) {
        sentences = [];
        for (let i = 0; i < wordsPerSentence; i++) {
            const random = Math.floor(Math.random() * WORDS.length);
            sentences.push(WORDS[random]);
        }
        paragraphs.push(sentences.join(' '));
    }
    return paragraphs.join('. ');
}
function generateRandomTitle() {
    return generateRandomLorem(4, 1);
}
exports.generateRandomTitle = generateRandomTitle;
function generateRandomParagraph() {
    return generateRandomLorem(5, 8);
}
exports.generateRandomParagraph = generateRandomParagraph;
const WORDS = [
    "ad",
    "adipisicing",
    "aliqua",
    "aliquip",
    "amet",
    "anim",
    "aute",
    "cillum",
    "commodo",
    "consectetur",
    "consequat",
    "culpa",
    "cupidatat",
    "deserunt",
    "do",
    "dolor",
    "dolore",
    "duis",
    "ea",
    "eiusmod",
    "elit",
    "enim",
    "esse",
    "est",
    "et",
    "eu",
    "ex",
    "excepteur",
    "exercitation",
    "fugiat",
    "id",
    "in",
    "incididunt",
    "ipsum",
    "irure",
    "labore",
    "laboris",
    "laborum",
    "Lorem",
    "magna",
    "minim",
    "mollit",
    "nisi",
    "non",
    "nostrud",
    "nulla",
    "occaecat",
    "officia",
    "pariatur",
    "proident",
    "qui",
    "quis",
    "reprehenderit",
    "sint",
    "sit",
    "sunt",
    "tempor",
    "ullamco",
    "ut",
    "velit",
    "veniam",
    "voluptate",
];
//# sourceMappingURL=lorem.js.map