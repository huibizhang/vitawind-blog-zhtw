---
title: 快速搭建環境
head:
  - - meta
    - name: description
      content: 快速建立您的 Tailwind 專案，輕鬆又簡單。
  - - meta
    - name: keywords
      content: create-vitawind vitawind vite vitejs vitejs-plugin tailwind tailwindcss hmr react create-react-app vuecli vue-cli ng angular
sidebarDepth: 2
---

<script setup>
import CreateVitawind from '../.vitepress/components/CreateVitawind.vue'
import Language from '../.vitepress/components/Language.vue'
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<!-- <Language /> -->

<CreateVitawind />

### 輕鬆又簡單
就算是「安裝 Tailwind 並設定 jit 模式」也不能成為停下你開發腳步的阻礙！ 現在，你可以只用一行指令來建立「預先建構好 Tailwind jit 模式」的專案，快試試看吧！

### 我該做些什麼？
首先，在你要放置專案的資料夾中開啟 terminal，然後執行下列指令：

```bash
npm init vitawind@latest {專案名稱} -- {範本}
```

請基於這個指令，換成你的專案名稱以及你所要使用的範本，舉例：

```bash
npm init vitawind@latest my-first-app -- --vue
```

### 有哪些範本呢？
來去[看看所有的範本](./templates)。