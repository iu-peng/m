# RN 开发调试组件包

## 常规web项目开发组件包流程

1.  任意文件夹新建组件包项目

    ```bash
    mkdir test-module && npm init -y
    ```

2.  组件包项目内使用 `npm link` ，这样就把包链接到了node的全局包内，是个快捷方式

    ```bash
    npm link
    # /Users/doge/.nvm/versions/node/v13.8.0/lib/node_modules/dd -> /Users/doge/Documents/learn/test/dd
    ```

3.  然后在web项目中使用 \`npm link test-module\`，来把全局的node 包link到项目的node\_modules中，这样项目就会加载该组件包



## RN问题

以上方式对web项目好使，但是对RN不好使，快捷方式可以链接进来，但是没法加载成功，总是提示找不到test-module包

网上找的方式是修改metro配置，reslove组件包路径，但是也不好使。

最后决定用node-watch来监听组件包的改动，来把对应的组件包实时复制到项目的node\_modules中，这样就可以实现加载组件的目的了，缺点就是会在改动之后，每次都reload 整个项目。这点不太好。



## 监听脚本

监听使用的是`node-watch`， 复制使用的是`shell`命令，启动脚本使用的是`zx`

脚本如下

```javascript
/**
 * 调试的话，可以先
 * 1. `yarn add node-watch -D` 安装下依赖
 * 2. `yarn db` 启动监听
 * 3. 之后本仓库所有更改会自动同步到目标项目 `node-modules` 下
 * 4. 如果没有同步， 可先在目标项目 `node-modules` 下新建文件夹 `form-render`
 */
const watch = require("node-watch");
const fs = require("fs");
const path = require("path");
const packageName = "form-render";

/**
 * 本组件所在目录
 */
const formPath = path.resolve(__dirname, "..");
/**
 * 目标项目 `node-modules` 下该组件目录绝对路径
 */
const targetNodeModulesPath = "/Users/doge/Documents/work/duty/node_modules/";

await $`cd ${formPath}`;
// 进入项目node_modules目录 - 检查form-render是否存在 - 不存在则创建
await $`cd ${targetNodeModulesPath} && test -d ${packageName} || mkdir ${packageName}`;
// 复制文件夹到 指定项目的node_modules中
await $`cp -r \`ls . | grep -v node_modules | xargs\` ${targetNodeModulesPath}/${packageName}`;

let count = 0;

watch(
  formPath,
  {
    recursive: true,
    filter: (file, skip) => {
      if (/\/node_modules|index.d.ts/.test(file)) return skip;
      return file;
    },
    delay: 200,
  },
  async function (evt, name) {
    log(`🔨 改动文件 ${name} `, "\x1B[35m");
    // 复制项目到指定文件夹
    await $`cp -r \`ls . | grep -v node_modules | xargs\` ${targetNodeModulesPath}/${packageName}`;
    log("✔️ 移动完成");

    // 将types.ts 内容 复制到 index.d.ts
    await fs.copyFileSync("./types.ts", "./index.d.ts");
    log("✔️ 复制 d.ts 完成");
    log(`第 ${++count} 次修改`, "\x1B[35m");
  }
);

function log(msg, color = "\x1B[32m") {
  console.log(`${color}${msg} \x1B[0m`);
}

```

以上就是RN调试组件包使用node来配合调试的部分。
