# YOUR_PROJECT_NAME

## 项目介绍

PROJECT INTRODUCE

![YOUR_PROJECT_NAME](https://via.placeholder.com/600x400.jpg)

### UE 地址

### UI 地址

### 接口文档地址

## 技术栈

- umi @3.x
- less

## 部署环境

| 环境 | 指令 | 服务器地址 | 访问地址 |
| ---- | ---- | ---- | --- |
| 开发环境 | npm run build:test | 0.0.0.0 | http://example.test |
| 测试环境 | npm run build:release | 0.0.0.0 | http://example.release |
| 预发环境 | npm run build:pre | 0.0.0.0 | http://example.pre |
| 生产环境 | npm run build:production | 0.0.0.0 | http://example.production |

## 模块划分

YOUR PROJECT MODULES

## Git 分支
### master
该分支为 **生产环境部署分支**

每次发布生产环境前，需要新建一个版本 `tag`。

如果需要修复线上问题，从本分支检出 `hotfix/xxx`，修改完成后需要同步 `master` 和 `dev` 代码。

### dev
该分支为 **主开发分支**。

开发任务需要从该分支检出功能分支 `feature/xxx` 进行。

### test
该分支为 **开发环境部署分支**

`自动部署` `自动更新`

仅做代码合并（合并开发中或已完成的功能分支 `feature/xxx`），可直接合并开发代码以更新开发环境。

### release
该分支为 **提测环境部署分支**。

`自动部署` `手动更新`

提供 **QC** 部门测试，所有提测后问题在此分支检出 `bugfix/xxx` 进行。

提测完成后，需要合并最新代码到 `dev` 和 `master`。

### pre
该分支为 **预发环境部署分支**。

`自动部署` `手动更新`

提供 **QC** 部门测试，所有提测后问题在此分支检出 `bugfix/xxx` 进行。

提测完成后，需要合并最新代码到 `dev` 和 `master`。

## Git 提交规范

项目内已配置 `commitizen`，配合 `husky` 和 `commitlint` 对提交信息进行检测。

运行 `yarn commit` 或者 `npm run commit` 指令，可通过 `commitizen` 进行规范化提交。

## 开发人员

| 花名 | 负责模块 | 开发/维护时间 |
|---|---|---|
| name | moduleA moduleB | 2020-01-01 - 2020-01-01 |
