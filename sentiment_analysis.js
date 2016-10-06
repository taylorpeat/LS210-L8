var positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
var negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  var positive = text.split(/\s+|[',\-\[\]:.]/g).filter(positiveWordFilter);
  var negative = text.split(/\s+|[',\-\[\]:.]/g).filter(negativeWordFilter);
  var positiveResponse = "\nThere are " + positive.length + " positive words in the text.\nPositive sentiments: ";
  var negativeResponse = "\n\nThere are " + negative.length + " negative words in the text.\nNegative sentiments: ";
  var finalResponse = "\n\nThe sentiment of the text is ";
  var sentiment = "Positive";

  positive.forEach(function(word) {
    positiveResponse += word + " "
  });

  
  negative.forEach(function(word) {
    negativeResponse += word + " "
  });

  if (positive.length < negative.length) {
    sentiment = "Negative";
  }

  return positiveResponse + negativeResponse + finalResponse + sentiment;
}

function positiveWordFilter(word) {
  return positiveWords.some(function(posWord) {
    return posWord === word;
  });
}

function negativeWordFilter(word) {
  return negativeWords.some(function(negWord) {
    return negWord === word;
  });
}

sentiment(textExcerpt);