# react-examination-jeanpang

Building a user friendly interface with React.js, Redux/Mobx and LESS/SCSS.

## Usage

```
$ yarn install
$ yarn start
$ open http://localhost:3000
```

## Tasks

- Please add pagination support to the list when there are more than *5* entries.
- Please add option to select position of a player SF/PG and display it.
- Please add tests using your preferred testing tool (jest, enzyme, mocha, ...).
- Please add some features that could help you show your personal abilities.

## Objectives

- Please check for small things like syntax errors, since details matter.
- Please deliver something that works, non working project is an automatic disqualification.



## 修改後的版本
- 分頁功能添加（資料分組、pagination插件添加；star, delete id已對齊）
- 若當頁沒資料（當頁最後一筆資料被刪除時），會跳轉到上一頁
- 所有資料都沒有時（所有資料都被刪除時），會顯示placeholder text
- 以上三種情況都能正常使用input添加資料
- 添加在input時可SF/PG，預設為SF
- 測試有嘗試使用Jest寫了component, action, reducer的部分（因時間關係先寫這些）
