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

<script>
import CreateVitawind from '../.vitepress/components/CreateVitawind.vue'
import Badge from '../.vitepress/components/Badge.vue'
import ToolToggle from '../.vitepress/components/ToolToggle.vue'

export default{
  data () {
    return {
      tool: 'npm',
      storage: undefined
    }
  },
  mounted () {
    let tool = ''
    if (typeof window !== 'undefined') {
      if(window.localStorage.length>0) {
        tool = window.localStorage.getItem('tool')
      }
    }
    this.tool = tool?tool:'npm';
    this.ct(this.tool)
  },
  methods:{
    ct (event) {
      this.tool = event
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('tool',event)
      }
      // if (this.storage = !) {
      //   this.storage.setItem('tool',event)
      // }
    }
  },
  components: {
    CreateVitawind,Badge,ToolToggle
  }
}
</script>

<!-- <Language /> -->

<CreateVitawind />

### 輕鬆又簡單

就算是「安裝 Tailwind 並設定 jit 模式」也不能成為停下你開發腳步的阻礙！ 現在，你可以只用一行指令來建立「預先建構好 Tailwind jit 模式」的專案，快試試看吧！

### 我該做些什麼？

首先，在你要放置專案的資料夾中開啟 terminal，然後執行下列指令：

<ToolToggle :name="'tool-example-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind {專案名稱} -- {範本}
```

</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {專案名稱} {範本}
```

</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind {專案名稱} -- {範本}
```

</div></ToolToggle>

請基於這個指令，換成你的專案名稱以及你所要使用的範本，舉例：

<ToolToggle :name="'tool-vue-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind my-first-app -- --vue
```

</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind my-first-app --vue
```

</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind my-first-app -- --vue
```

</div></ToolToggle>

### 有哪些範本呢？

來去[看看所有的範本](./templates)。 或者，你可以使用 [Creator 工具](./creator)來快速開始你的奇幻之旅。
