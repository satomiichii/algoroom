function numKeypad(words, keypads) {
  const counts = [];
  const wordsMap = words.map(makeMap)
  for (let i = 0; i < keypads.length; i++) {
    const keypad = keypads[i]
    counts.push(compareKeypadWords(keypad, wordsMap))
  }
  return counts;
}
const makeMap = (word) => {
  const freqs = {}
  freqs.count = 0;
  for (let i = 0; i < word.length; i++) {
    if (!(word[i] in freqs)) {
      freqs[word[i]] = true
      freqs.count = freqs.count + 1
    }
  }
  return freqs
}
const compareKeypadWords = (keypad, words)=> {
  let count = 0
  for (let i = 0; i < words.length; i++) { // go through all of the word objects. notice, that this is not just the word as a string, but the word represented as an object. 'hello' => {count: 4, h:true,e:true,l:true,o:true}
    const wordObj = words[i]
    let letterCount = 0;
    for (let j = 0; j < keypad.length; j++) {
      const letter = keypad[j]
      if (j === 0 && !(letter in wordObj)) break // if the word doesn't have the key, then stop going through this keypad and go on to next work
      if (letter in wordObj) letterCount++
      if (letterCount === wordObj.count) {
        // if we ever get up to all the unique letters in wordObj, we know that the word can be spelled by the keypad, so add to the count and break out of this loop so we can check the next word
        count++
        break // break out here for a micro optimitzation, inase we hit all of the unique characters before we get to the end of the keypad.
      }
    }
  }
  return count
}
const result = numKeypad(wordList1, keypads1)
// console.log(result)
2:49
function numKeypad(words, keypads) {
    const counts = [];
    const wordsMap = words.map(makeMap)
    for (let i = 0; i < keypads.length; i++) {
        const keypad = keypads[i]
        counts.push(compareKeypadWords(keypad, wordsMap))
    }
    return counts;
}
const makeMap = (word) => {
    const freqs = {}
    freqs.count = 0;
    for (let i = 0; i < word.length; i++) {
        if (!(word[i] in freqs)) {
            freqs[word[i]] = true
            freqs.count = freqs.count + 1
        }
    }
    return freqs
}
const compareKeypadWords = (keypad, words)=> {
    let count = 0
    for (let i = 0; i < words.length; i++) { // go through all of the word objects. notice, that this is not just the word as a string, but the word represented as an object. 'hello' => {count: 4, h:true,e:true,l:true,o:true}
        const wordObj = words[i]
        let letterCount = 0;
        for (let j = 0; j < keypad.length; j++) {
            const letter = keypad[j]
            if (j === 0 && !(letter in wordObj)) break // if the word doesn't have the key, then stop going through this keypad and go on to next work
            if (letter in wordObj) letterCount++
            if (letterCount === wordObj.count) {
                // if we ever get up to all the unique letters in wordObj, we know that the word can be spelled by the keypad, so add to the count and break out of this loop so we can check the next word
                count++
                break // break out here for a micro optimitzation, inase we hit all of the unique characters before we get to the end of the keypad.
            }
        }
    }
    return count
}
const result = numKeypad(wordList1, keypads1)
// console.log(result)