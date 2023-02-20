<div align="center">
  <a href="https://arco.design" target="_blank">
    <img alt="SEVEN-BIT-UI Logo" width="200" src="https://avatars.githubusercontent.com/u/64576149?s=200&v=4"/>
  </a>
</div>
<div align="center">
  <h1>SEVEN-BIT-UI</h1>
</div>

<div align="center">

基于[seven-bit-ui](https://aiai0603.github.io/)的综合 Vue UI 组件库

</div>

## 安装使用

可以用 npm 安装[seven-bit-ui](https://www.npmjs.com/package/seven-bit-ui)

```bash
// 使用 npm
npm install seven-bit-ui@1.1.3

// 使用 pnpm
pnpm install seven-bit-ui@1.1.3
```

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

## 开发

### 目录结构

```
.
|--.husky
|--examples
|    |--components
|    |--app.vue        //组件测试
|    ..
|--packages
|    |--components
|    |    |--src       //组件
|    |    |    |--sbAlert
|    |    |    |    |--__alert__             //测试文件
|    |    |    |    |--style/.less           //css
|    |    |    |    |--index
|    |    |    |    |--sbAlert.vue            //组件
|    |    |    |    |--types.ts               //interface及相关const定义
|    |    |    |--index.ts                    //暴露
|    |    |    ...
|    |    ...
|    |--eslint-config
|    |--utils
|    ...
...
```

### 新建自己的组件

1. 在 packages / components / src 目录下新建文件夹
2. 命名为 sbXxx （例如 sbLink）
3. 按照 sbButton 目录的结构新建内容
4. 样式放在 styles 文件夹、内容请放在 sbXxx.vue 、传值请放在 types.ts
5. 新建 index.ts 导出所编写的组件，install 部分同其他
6. 在 src/index.ts 全局导出组件，在 components 数组和 export { } 都加入所写组件
7. 编写一个 `__xxx__` 文件夹，将测试代码编写在其中
8. 可以在 examples/app.vue 里直接添加所写组件进行测试（已自动同步）

## 开发规范

1.  命名所写组件为 sbXxx （例如 sbLink）
2.  所有样式以 sb-xxx-后缀 的形式或者 is-xxx 来命名
3.  可以使用以下的方式来检查代码规范

```shell
pnpm run lint:eslint //eslint 检查
pnpm run lint:fix    //eslint 自动修复，注意只能修复部分内容
pnpm run lint:prettier   //prettier 检查
pnpm run lint:css    //样式文件检查
```

## 贡献代码

1. Fork 源仓库到本地
2. 完成代码编写
3. 暂存所编写所有代码
4. 使用 pnpm commit 提交代码，请按照要求填写 （类型，简要说明，详细说明等等）
5. 给源仓库提交 PR
