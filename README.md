# react-ts-com

这个项目是从 0 搭建一个 react-ts 的 hooks 组件库

## 项目主要练习点

1，项目常用配置文件的作用及配置方式  
2，eslint，stylelint 及 prettier 的配置  
3，代码提交规范的第三方工具强制约束方式实现  
4，webpack 配置 react+typescript 开发与生产环境 及其优化  
5，rollup 构建组件打包环境并发布 npm 流程  
6，利用 react-testing-library 对 react 组件进行测试  
7，持续集成（CI）， GitHub Actions

### 项目搭建

在本地建立一个 Git 仓库 后使用 npx create-react-app appName --template
typescript 命令搭建项目基本结构。  
提交代码后， 使用 git remote add origin 远程仓库地址 ，将本地仓库与远程仓库关联
然后就可以推送代码拉。

###### packge.json 配置

```json
{
  "name": "ts-antd",
  "version": "0.1.0",
  "description": "react + typescript project for some componts like antDisgn", //项目描述，可提升github搜索优先级
  "license": "MIT", //项目协议，MIT开源，
  "repository": {
    "type": "git",
    "url": "https://github.com/lovingZhenyu/ts-antd"
  },
  "keywords": ["react-typescript", "antd"],
  "author": {
    "name": "ZhenyuXu",
    "url": "https://github.com/lovingZhenyu",
    "email": "xu_zhen_yu_1999@163.com"
  },
  "homepage": "https://github.com/lovingZhenyu/ts-antd#readme"
}
```

###### .gitignore

.gitignore 是项目根目录当中的文件，定义 git 在版本控制当中需要忽略的文件，使用脚手架时已经帮助我们生成了一个.gitignore 文件，一般来说不需要我们特殊定义

###### 更改镜像源

1，直接更改 npm 的配置 在命令行输入

```
    npm config set registry https://registry.npm.taobao.org
```

这样在使用 npm 或者创建项目的时候，就会从 tabbao 镜像去下载

2，上面的方案只适合单人开发的时候，自己修改电脑上的 npm 源，如果多人开发难免每个人都修改会比较麻烦。  
 首先创建.npmrc 文件 touch .npmrc  
 在文件内输入 registry=https://registry.npm.taobao.org/

skdjaks

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
