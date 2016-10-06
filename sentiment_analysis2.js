var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|ed)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(noble)|(resolut(e|ion)?)/gi;
var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or)?)/gi;

function sentiment(text) {
  var words = {};
  var response = {};
  words.positive = text.match(positiveRegex);
  words.negative = text.match(negativeRegex);
  response.positive = "\nThere are " + words.positive.length + " positive words in the text.\nPositive sentiments: ";
  response.negative = "\n\nThere are " + words.negative.length + " negative words in the text.\nNegative sentiments: ";
  response.final = "\n\nThe sentiment of the text is ";
  var sentiment = "positive";
  var sentimentWord;

  if (words.positive.length < words.negative.length) {
    sentiment = "negative";
  }

  sentimentWord = sentiment.replace(/^./, function(let) {
    return let.toUpperCase();
  });

  Object.keys(words).forEach(function(wordType) {
    words[wordType].forEach(function(word) {
      response[wordType] += word + " ";
    });
  });

  return response.positive + response.negative + response.final + sentimentWord + ".";
}

sentiment(text);

// console output

There are 9 positive type words in the text.
Positive sentiments: nobler, fortune, devoutly, dream, dreams, respect, love, patient, resolution

There are 10 negative type words in the text.
Negative sentiments: troubles, die, heartache, die, death, scorns, oppressor's, despised, weary, death

The sentiment of the text is Negative.