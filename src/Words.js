import wordList from './All-words.txt';

export const defaultGuesses = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

export const generateWordSet = async () => {
  let allWords;
  let wordOfTheDay;
  await fetch(wordList)
    .then((words) => words.text())
    .then((text) => {
      const wordArray = text.split('\n');
      allWords = new Set(wordArray);
      wordOfTheDay = wordArray[Math.floor(Math.random() * wordArray.length)];

    });
  return { allWords, wordOfTheDay };
};
