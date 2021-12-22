const aposToLexForm = require('apos-to-lex-form');
const {
    WordTokenizer,
    SentimentAnalyzer,
    PorterStemmer
} = require('natural');
const SpellCorrector = require('spelling-corrector');
const stopword = require('stopword');

const tokenizer = new WordTokenizer()
const spellCorrector = new SpellCorrector()
spellCorrector.loadDictionary()

const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn')

module.exports = function getSentiment(str) {
    if (typeof (str) !== 'string') {
        return 'Not String'
    }

    if (!str.trim()) {
        return 0
    }

    const lexed = aposToLexForm(str).toLowerCase().replace(/[^a-zA-Z\s]+/g, "")
    const tokenized = tokenizer.tokenize(lexed)
    const fixedSpelling = tokenized.map(word => spellCorrector.correct(word))
    const stopWordsRemoved = stopword.removeStopwords(fixedSpelling)
    const analyzed = analyzer.getSentiment(stopWordsRemoved)

    if (analyzed >= 1) return 1
    if (analyzed === 0) return 0
    return -1
}