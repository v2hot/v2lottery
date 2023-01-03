# V2EX 抽奖程序

使用 GitHub Actions 运行程序，输出抽奖结果的小工具。

## 使用方法

### 定时启动

注意：由于 GitHub Action 运行的任务很多，实际运行时间会比设置的延迟几分钟 (5~10 分钟)。

1. fork repo

2. 修改 `src/index.js`，修改执行时间 `.github/workflows/schedule.yml`

3. 创建 PR

4. 合并代码

### 立即启动

1. fork repo

2. 修改 `src/index.js`

3. 创建 PR

4. 合并代码，创建 tag

### 本地执行

1. clone repo

2. 复制 `.env.sample` 到 `.env`， 修改 `.env` 里的 `V2EX_TOKEN`

3. 修改 `src/index.js`

4. `npm i && npm start`

## [`src/index.js`](src/index.js) 代码说明

```js
const list = await getReplyUserList("905509"); // v2ex 主题 ID
const luckyUsers = lottery(list, {
  size: 1, // 被抽中人数
  unique: true, // 是否去重
  excludes: ["Pipecraft"], // 要排除的名单，比如 OP
});
```

## License

Copyright (c) 2023 [Pipecraft](https://www.pipecraft.net). Licensed under the [MIT License](https://github.com/v2hot/v2lottery/blob/main/LICENSE).

## >\_

[![Pipecraft](https://img.shields.io/badge/site-pipecraft-brightgreen)](https://www.pipecraft.net)
[![DTO](https://img.shields.io/badge/site-DTO-brightgreen)](https://dto.pipecraft.net)
[![BestXTools](https://img.shields.io/badge/site-bestxtools-brightgreen)](https://www.bestxtools.com)
