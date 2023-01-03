import process from 'node:process';
import * as dotenv from 'dotenv';
import fetch from './fetch.js';

dotenv.config();

const token = process.env.V2EX_TOKEN;

export async function getReplyUserList(topicId) {
  let page = 1;
  let stop = false;
  let retry = 0;
  const result = [];
  while (!stop && retry < 10) {
    const url = `https://www.v2ex.com/api/v2/topics/${topicId}/replies?p=${page}`;

    console.log('Fetch url:', url);
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });

    if (response.status === 200) {
      // eslint-disable-next-line no-await-in-loop
      const data = await response.json();
      if (data.result && data.result.length > 0) {
        for (const element of data.result) {
          result.push(element.member.username);
        }
      }

      if (data.result && data.result.length >= 20) {
        page++;
      } else {
        stop = true;
      }
    } else {
      retry++;
    }
  }

  return result;
}
