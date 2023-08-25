// Good Luck 💪🏾
function pluralize(words) {
    // create an empty set to store the plural words
    let plurals = new Set();
    // loop through the words
    for (let word of words) {
      // count how many times the word appears in the list
      let count = words.filter(w => w === word).length;
      // if the count is more than one
      if (count > 1) {
        // add the word with an 's' at the end to the set
        plurals.add(word + 's');
      }
    }
    // return the set of plural words
    return plurals;
  }
  console.log(pluralize(["cat","dog","cat","mouse"]))
  
