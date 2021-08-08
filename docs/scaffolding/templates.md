---
title: 範本
head:
  - - meta
    - name: description
      content: 選擇一個範本，快速建立您的 Tailwind 專案，輕鬆又簡單。
  - - meta
    - name: keywords
      content: create-vitawind vitawind vite vitejs vitejs-plugin tailwind tailwindcss hmr react create-react-app vuecli vue-cli ng angular
sidebarDepth: 3
---

<script>
import Badge from '../.vitepress/components/Badge.vue'
import ToolToggle from '../.vitepress/components/ToolToggle.vue'

export default{
  data () {
    return {
      tool: 'npm',
      npm: true,
      yarn: false,
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
      const status = (event==='npm')
      this.tool = event
      this.npm = status
      this.yarn = !status
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('tool',event)
      }
      // if (this.storage = !) {
      //   this.storage.setItem('tool',event)
      // }
    }
  },
  components: {
    Badge,ToolToggle
  }
}
</script>

# 範本

**預建構 Tailwind CSS jit 模式的範本**可以幫你輕鬆又快速的建立開發環境。

::: tip 全部可用範本列表：
- [`--vue`](#vue-in-vite)
- [`--vue-ts`](#typescript-for-vue)
- [`--react`](#react-in-vite)
- [`--react-ts`](#typescript-for-react)
- [`--vuecli`](#vue-cli)
- [`--cra`](#create-react-app)
- [`--ng`](#angular)
:::
<!-- - [`--cra22`](#create-react-app-tailwindcss-2-2) -->
<br>

### Vue in Vite 
使用 `--vue` 參數來建立 vite 的 vue 專案。
```bash
npm init vitawind@latest {專案名稱} -- --vue
```
建立專案之後，你需要做：

<ToolToggle :name="'tool-vue'" :tool="tool" @tool="ct($event)"><div v-if="npm">

```bash
cd {project-name}
npm install
npm run dev
```
</div><div v-if="yarn">

```bash
cd {project-name}
yarn
yarn dev
```
</div></ToolToggle>

#### Typescript for Vue 
若要建立加入 **typescript** 的 vite vue 專案，請使用  `--vue-ts` 參數。


### React in Vite 
使用 `--react` 參數來建立 vite 的 react 專案。
```bash
npm init vitawind@latest {專案名稱} -- --react
```
建立專案之後，你需要做：

<ToolToggle :name="'tool-react'" :tool="tool" @tool="ct($event)"><div v-if="npm">

```bash
cd {project-name}
npm install
npm run dev
```
</div><div v-if="yarn">

```bash
cd {project-name}
yarn
yarn dev
```
</div></ToolToggle>

#### Typescript for React 
若要建立加入 **typescript** 的 vite react 專案，請使用  `--react-ts` 參數。


### Vue-CLI
使用 `--vuecli` 參數來建立 Vue-CLI 專案。
```bash
npm init vitawind@latest {專案名稱} -- --vuecli
```
建立專案之後，你需要做：

<ToolToggle :name="'tool-vuecli'" :tool="tool" @tool="ct($event)"><div v-if="npm">

```bash
cd {project-name}
npm install
npm run serve
```
</div><div v-if="yarn">

```bash
cd {project-name}
yarn
yarn serve
```
</div></ToolToggle>

#### Vue-CLI 5 <Badge color="green" text="BETA" />
**Vue-CLI 5 是基於 postcss 8 來建置 CSS**，比 Vue-CLI 4 更適合用來進行 Tailwind CSS 的相關開發。 若要建立 **Vue-CLI 5** 的專案，請使用  `--vuecli5` 參數。


### Create React App 
使用 `--cra` 參數來建立 Create React App 專案。
```bash
npm init vitawind@latest {專案名稱} -- --cra
```
建立專案之後，你需要做：

<ToolToggle :name="'tool-cra'" :tool="tool" @tool="ct($event)"><div v-if="npm">

```bash
cd {project-name}
npm install
npm start
```
</div><div v-if="yarn">

```bash
cd {project-name}
yarn
yarn start
```
</div></ToolToggle>

<!-- ### Create React App 
Use flag `--cra` to create project with Create React App and ***Tailwind CSS version is 2.1.4***. For newest version of Tailwind, see ["Create React App + TailwindCSS 2.2"](#create-react-app-tailwindcss-2-2) section.
```bash
npm init vitawind {專案名稱} --cra
```
建立專案之後，你需要做：
```bash
cd {專案名稱}
npm install  # 或 `yarn`
npm run start  # 或 `yarn start`
``` -->

<!-- ### Create React App + TailwindCSS 2.2
Use flag `--cra22` to create project with Create React App and ***Tailwind CSS version is 2.2 or higher***.

```bash
npm init vitawind {專案名稱} --cra22
```
建立專案之後，你需要做：
```bash
cd {專案名稱}
npm install  # 或 `yarn`
npm run start  # 或 `yarn start`
``` -->

### Angular
使用 `--ng` 參數來建立 Angular CLI 專案。

```bash
npm init vitawind@latest {專案名稱} -- --ng
```
建立專案之後，你需要做：

<ToolToggle :name="'tool-ng'" :tool="tool" @tool="ct($event)"><div v-if="npm">

```bash
cd {project-name}
npm install
npm start
```
</div><div v-if="yarn">

```bash
cd {project-name}
yarn
yarn start
```
</div></ToolToggle>