import wordList from '../All-words.txt';

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
  fetch(wordList)
    .then((words) => words.text)
    .then((text) => {
      const wordArray = text.split('\n');
      allWords = new Set(wordArray);
    });
  return {allWords};
};
