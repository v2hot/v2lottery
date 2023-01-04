import lottery from './lottery.js';
import { getReplyUserList } from './v2ex.js';
import { getList } from './file.js';

// 每次新的抽奖 index 增加 1
const index = 2;
let list;

if (index === 2) {
  list = await getReplyUserList('905509');
  console.log(
    '恭喜！你们中奖了！',
    lottery(list, {
      size: 1,
      unique: true,
      excludes: ['Pipecraft', 'zxkj200626']
    })
  );

  list = await getList('dto-users.txt');
  console.log(
    '恭喜！你们中奖了！',
    lottery(list, { size: 1, unique: true, excludes: ['vipuser_05'] })
  );

  list = await getList('bestxtools-users.txt');
  // eslint-disable-next-line unicorn/prefer-spread
  list = list.concat(await getList('zhubai-users.txt'));
  console.log(
    '恭喜！你们中奖了！',
    lottery(list, {
      size: 1,
      unique: true,
      excludes: ['zhubai_email:vim*** md5:5d72bc7ac859eaad93060d3c5166f989']
    })
  );
}

if (index === 1) {
  list = await getReplyUserList('905509');
  console.log(
    '恭喜！你们中奖了！',
    lottery(list, { size: 1, unique: true, excludes: ['Pipecraft'] })
  );

  list = await getList('dto-users.txt');
  console.log(
    '恭喜！你们中奖了！',
    lottery(list, { size: 1, unique: true, excludes: [] })
  );

  list = await getList('bestxtools-users.txt');
  // eslint-disable-next-line unicorn/prefer-spread
  list = list.concat(await getList('zhubai-users.txt'));
  console.log(
    '恭喜！你们中奖了！',
    lottery(list, { size: 1, unique: true, excludes: [] })
  );
}

// Template
if (index === 0) {
  list = await getReplyUserList('905509');
  console.log(
    '恭喜！你们中奖了！',
    lottery(list, { size: 1, unique: true, excludes: ['Pipecraft'] })
  );
}
