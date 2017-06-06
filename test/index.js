import Trie from '../src/Trie';

const trie = new Trie(['abc', 'ab', 'abn', 'bt']);

console.log(trie);
console.log(JSON.stringify(trie, null, 2));
