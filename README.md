# 環境構築
```
$ npm create vite@latest
✔ Project name: … react_app_3_note
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
Scaffolding project in /Users/gm/Desktop/PG/react_app_3_note...
Done. Now run:
  cd react_app_3_note
  npm install
  npm run dev
```

## react-uuid
* `$ npm i -D react-uuid`

## [react-markdown](https://github.com/remarkjs/react-markdown)
* `$ npm install react-markdown`

# 要件
- 画像のものを作成してください
- 編集したのもは一番上になるようにしてください
- Noteのデータ構造は下記のようにしてください
```
id: string;
title: string;
content: string;
modDate: number; // Date.now()
```
- 画面をロードしてもデータが消えないようローカルストレージに保存してください
- 選択しているノートは色を変えてください