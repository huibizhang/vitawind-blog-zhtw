---
title: 開始使用
slug: usage
---

## 安裝
```bash
# npm
$ npm install vitawind 

# yarn
$ yarn add vitawind 
```
安裝 vitawind 之後，Tailwind 就會被一起安裝在你的 vite 專案中。

## 配置
```bash
$ npx vitawind
```
執行 `npx vitaiwnd`，vitawind 就會自動設定並產生你所需要的相關配置檔，但是如果你想要使用完整版的 `tailwind.config.js` 或是你想要用自己的設定來建立配置檔的話，你可以[用參數來配置 vitaiwnd](#configuring-with-arguments)。

## 使用方法
最後一個步驟，我們需要增加一行引用 css 檔的設定：

### Vue
如果你使用的是 Vue，你需要在 `./src/main.js` 中引用 index.css：
```js{4}
// ./src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'  // ← ← ← 引用 css

createApp(App).mount('#app')
```

### React
如果你使用的是 React的話，其實 vite 專案早已在 `./src/main.jsx` 中引用 `index.css` 了，vitawind 會將 `index.css` 的內容自動替換掉，你需要做的只是馬上開始在你的 vite-react 專案中使用 Tailwind 開發：

```jsx{4}
// ./src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

### 大功告成
在主 js 程式中引用 css 後，以你最快的速度用 `npm run dev` (或是 `yarn dev`) 指令來開啟 dev server ... 因為 ... Tailwind 已經可以使用囉！ 享受你絕美的開發時光吧，謝謝！ 🤪