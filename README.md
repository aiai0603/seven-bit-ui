# SEVEN-BIT-UI 开发规范

## 运行项目

1. 安装依赖

```shell
pnpm install
```

2. 运行预览界面查看已经有的组件

```shell
pnpm run exm:dev
```

3. 运行测试

```shell
pnpm run test       //运行所有测试文件
pnpm run coverage   //覆盖率测试
```

## 新建自己的组件

1. 在 packages / components / src 目录下新建一个文件夹

2. 命名为 sbXxx （ 例如 sbLink 注意驼峰！！！！！！！！！！！！！！）
3. 按照 sbButton 目录的结构新建内容
4. 样式请放在 styles 文件夹、内容请放在 sbXxx.vue 、传值请放在 types.ts
5. 新建 index.ts 导出你编写的组件，install 部分照抄即可
6. 在 src/index.ts 全局导出你的组件，请在 components 数组和 export { } 都加入你的组件
7. 编写一个 `__xxx__` 文件夹，将你的测试编写在其中
8. 你可以在 examples/app.vue 里直接添加你的组件（ 已经自动同步了 ）

## 开发规范

1.  请命名你的组件为 sbXxx ( 例如 sbLink 注意驼峰！！！！！！！！！！！！！！）
2.  所有的样式都是以 sb-xxx-后缀 的形式或者 is-xxx 来命名
3.  可以使用以下的方式来检查你的代码规范

```shell
pnpm run lint:eslint //eslint 检查
pnpm run lint:fix    //eslint 自动修复，注意只能修复部分内容
pnpm run lint:prettier   //prettier 检查
pnpm run lint:css    //样式文件检查
```

## 贡献你的代码

1. fork 我的仓库
2. 完成你的代码编写
3. 暂存你的所有代码
4. 使用 pnpm run commit 提交代码，请按照要求填写 （类型，简要说明，详细说明等等）
5. 给我的主要仓库提交 pr
