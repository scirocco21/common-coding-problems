// Simple Trie implementation

class Trie {
  constructor(letter = '') {
    this.value = letter;
    this.children = {};
    // use isWord to flag ends of complete words
    this.isWord = false;
  }

  add(word, node = this) {
    for (const letter of word) {
      // if the letter key already exists, update the node reference to the node that has the letter
      if (node.children[letter]) {
        node = node.children[letter];
      } else {
      // otherwise create a new node and create a new key/value pair for it 
        const newNode = new Trie(letter);
        node.children[letter] = newNode;
        node = newNode;
      }
    }
  // mark that word has been completed
    node.isWord = true;
  };

  find(word, node = this) {
    let value = ''
    for (const letter of word) {
      if (node.children[letter]) {
        node = node.children[letter];
        value += letter;
      }
    }
    return value === word ? node : null;
  };

  remove(word = '', node = this) {
    if (!word) return null;
    const chain = [];
    // traverse down trie
    for (const letter of word) {
      if (node.children[letter]) {
        chain.push(node) // we want all nodes accessible in chain so we can move backwards and remove dangling nodes
        node = node.children[letter]
      } else {
        return null; // word is not in trie
      }
    }
    
    if (Object.keys(node.children).length) { // if any children, we should only change isWord flag
      node.isWord = false;
      return node;
    }
    
    // Zero children in node.
    // continue until we hit a breaking condition
    let child = chain.length ? chain.pop() : null; // whatever node was
    let parent = chain.length ? chain.pop() : null; // if node has parent
    while (true) {
      child && parent && delete parent.children[child.value]; // remove child;
      
      if (Object.keys(parent.children).length || !chain.length) { // if more children or chain is empty, we're done!
        node.isWord = false;
        return node;
      }
      // otherwise, we have no more children for our parent and we should keep deleting nodes
      // our next parent is what we pop from the chain
      // our child is what our parent was.
      child = parent;
      parent = chain.pop()
    }
  };
  findWords(value = '', node = this.find(value), words = []) {
    Object.values(node.children).forEach((child) => {
      if (child.isWord) words.push(value + child.value);
      child.findWords(value + child.value, child, words);
    });
    
    return words;
  }
  hasWord(word) {
    const node = this.find(word);
    return !!node && node.isWord; 
  }
}