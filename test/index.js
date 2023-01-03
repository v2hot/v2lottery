import lottery from '../src/lottery.js';
import { getReplyUserList } from '../src/v2ex.js';
import { getList } from '../src/file.js';

console.log('test');

let list = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lottery(list));
console.log(lottery(list, { size: 3 }));
console.log(lottery(list, { excludes: [2, 4] }));
console.log(lottery(list, { unique: false, excludes: [2, 4] }));

list = await getList('sample.txt');
console.log(lottery(list));

list = await getReplyUserList('905509');
console.log(lottery(list, { size: 1, unique: true, excludes: ['Pipecraft'] }));
