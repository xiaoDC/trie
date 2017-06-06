import { isArray } from './util';
import TrieNode from './TrieNode';

class Trie {
  constructor(arr) {
    if (!isArray(arr)) {
      throw new Error("the arr must be a Array");
    }
    if (!arr || arr.length === 0) return null;
    this.root = new TrieNode();
    arr.forEach(item => this.add(item));
  }

  add(item) {
    let current = this.root;

    item.split('').forEach(ch => {
      let node = current.children[ch];

      if (!node) {
        node = new TrieNode();
        current.children[ch] = node;
      }

      current = node;
    });

    //mark the current nodes endOfWord as true
    current.endOfWord = true;
  }

  remove(item) {

  }

}

export default Trie;
