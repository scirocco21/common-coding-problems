class Trie {
  constructor(letter = '') {
    this.value = letter;
    this.children = {};
    this.isWord = false;
  }
  add(word, node = this) {
    for (const letter of word) {
      if (node.children[letter]) {
        node = node.children[letter];
      } else {
        const newNode = new Trie(letter);
        node.children[letter] = newNode;
        node = newNode;
      }
    }
    node.isWord = true;
  };
  traverseChildren(key, puzzleSet, node, value, words = []) {
    if (node) {
      Object.values(node.children).forEach((child) => {
        // define base case
        if (child.isWord && puzzleSet.has(child.value)) {
          let completeWord = value + child.value;
          let wordSet = new Set([...completeWord]);
          if (wordSet.has(key)) {
            words.push(completeWord);
          }
        }
        // recursively call all child nodes, until child is null
        if (puzzleSet.has(child.value)) {
          child.traverseChildren(key, puzzleSet, child, value + child.value, words);
        }
      })
    }
    return words
  }
  parsePuzzle(puzzle, node = this) {
    const key = puzzle[0]
    let puzzleSet = new Set([...puzzle])
    let result = this.traverseChildren(key, puzzleSet, node, "");
    return result.length
  }
  solution(words, puzzles) {
    let results = [];
    words.forEach(word => {
      this.add(word);
    })
    puzzles.forEach(puzzle => {
      results.push(this.parsePuzzle(puzzle))
    })
    return results
  }
};

const trie = new Trie();
let words = ["PLEAS", "PLEASE", "POLICE", "APPLE", "APTLY", "PELLE", "BOBCAT"];
let puzzles = ["AELWXYZ","AELPXY", "AELPSXYZ", "SAELPXY", "XAELSPY"]
function spellingBeeSolutions(words,puzzles) {
  return trie.solution(words,puzzles);
}
spellingBeeSolutions(words,puzzles);

// IDEA:
// Get the first letter, e.g. "A"
// Then look at all of A's children. 
// For every child, if that child is included in the puzzleSet, then look at that child's children, etc., until you hit isWord