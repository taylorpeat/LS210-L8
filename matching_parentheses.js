function isBalanced(string) {
  var balance = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      balance++;
    } else if (string[i] === ")") {
      balance--;
    }

    if (balance < 0) {
      return false;
    }
  }

  return balance === 0;
}

isBalanced('What (is) this?')        // true
isBalanced('What is) this?')         // false
isBalanced('What (is this?')         // false
isBalanced('((What) (is this))?')    // true
isBalanced('((What)) (is this))?')   // false
isBalanced('Hey!')                   // true
isBalanced(')Hey!(')                 // false
isBalanced('What ((is))) up(')       // false