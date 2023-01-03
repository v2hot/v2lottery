import { resolve } from 'node:path';
import fsExtra from 'fs-extra';

export async function getList(filename) {
  const content = await fsExtra.readFile(resolve('data', filename));
  return content
    .toString()
    .split(/\r?\n/)
    .filter((item) => Boolean(item) && !item.startsWith('#'));
}
