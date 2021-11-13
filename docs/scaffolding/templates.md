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
import TemplateCmd from '../.vitepress/components/TemplateCmd.md'

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
    Badge,ToolToggle,TemplateCmd
  }
}
</script>

# 範本

**預建構 Tailwind CSS jit 模式的範本**可以幫你輕鬆又快速的建立開發環境。

::: tip 全部可用範本列表：
- [`--pure`](#vanilla-js-in-vite) <Badge color="green" text="BETA" size="small" />
- [`--vue`](#vue-in-vite)
  - [`--vue-ts`](#typescript-for-vue)
- [`--react`](#react-in-vite)
  - [`--react-ts`](#typescript-for-react)
- [`--vuecli`](#vue-cli)
  - [`--vuecli5`](#vue-cli-5) <Badge color="green" text="BETA" size="small" />
- [`--cra`](#create-react-app)
- [`--ng`](#angular)
:::
<!-- - [`--cra22`](#create-react-app-tailwindcss-2-2) -->
<br>

### Vanilla-JS in Vite <Badge color="green" text="BETA" />
使用 `--pure` 參數來建立 vite 的純 js 專案。

<ToolToggle :name="'tool-pure-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind@latest {專案名稱} -- --pure
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {專案名稱} --pure
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind@latest {專案名稱} -- --pure
```
</div></ToolToggle>

建立專案之後，你需要做：

<ToolToggle :name="'tool-pure'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
cd {專案名稱}
npm install
npm run dev
```
</div><div v-if="tool === 'yarn'">

```bash
cd {專案名稱}
yarn
yarn dev
```
</div><div v-if="tool === 'pnpm'">

```bash
cd {專案名稱}
pnpm install
pnpm dev
```
</div></ToolToggle>

-----

### Vue in Vite 
使用 `--vue` 參數來建立 vite 的 vue 專案。

<ToolToggle :name="'tool-vue-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind@latest {專案名稱} -- --vue
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {專案名稱} --vue
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind@latest {專案名稱} -- --vue
```
</div></ToolToggle>

建立專案之後，你需要做：

<ToolToggle :name="'tool-vue'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
cd {專案名稱}
npm install
npm run dev
```
</div><div v-if="tool === 'yarn'">

```bash
cd {專案名稱}
yarn
yarn dev
```
</div><div v-if="tool === 'pnpm'">

```bash
cd {專案名稱}
pnpm install
pnpm dev
```
</div></ToolToggle>

#### Typescript for Vue 
若要建立加入 **typescript** 的 vite vue 專案，請使用  `--vue-ts` 參數。

-----

### React in Vite 
使用 `--react` 參數來建立 vite 的 react 專案。

<ToolToggle :name="'tool-react-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind@latest {專案名稱} -- --react
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {專案名稱} --react
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind@latest {專案名稱} -- --react
```
</div></ToolToggle>

建立專案之後，你需要做：

<ToolToggle :name="'tool-react'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
cd {專案名稱}
npm install
npm run dev
```
</div><div v-if="tool === 'yarn'">

```bash
cd {專案名稱}
yarn
yarn dev
```
</div><div v-if="tool === 'pnpm'">

```bash
cd {專案名稱}
pnpm install
pnpm run dev
```
</div></ToolToggle>

#### Typescript for React 
若要建立加入 **typescript** 的 vite react 專案，請使用  `--react-ts` 參數。

-----

### Vue-CLI
使用 `--vuecli` 參數來建立 Vue-CLI 4 的 Vue 3 專案。

<ToolToggle :name="'tool-vuecli-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind@latest {專案名稱} -- --vuecli
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {專案名稱} --vuecli
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind@latest {專案名稱} -- --vuecli
```
</div></ToolToggle>

建立專案之後，你需要做：

<ToolToggle :name="'tool-vuecli'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
cd {專案名稱}
npm install
npm run serve
```
</div><div v-if="tool === 'yarn'">

```bash
cd {專案名稱}
yarn
yarn serve
```
</div><div v-if="tool === 'pnpm'">

```bash
cd {專案名稱}
pnpm install
pnpm serve
```
</div></ToolToggle>

#### Vue-CLI 5 <Badge color="green" text="BETA" />
**Vue-CLI 5 是基於 postcss 8 來建置 CSS**，比 Vue-CLI 4 更適合用來進行 Tailwind CSS 的相關開發。 若要建立 **Vue-CLI 5** 的 Vue 3 專案，請使用  `--vuecli5` 參數。

-----

### Create React App 
使用 `--cra` 參數來建立 Create React App 專案。

<ToolToggle :name="'tool-cra-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind@latest {專案名稱} -- --cra
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {專案名稱} --cra
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind@latest {專案名稱} -- --cra
```
</div></ToolToggle>

建立專案之後，你需要做：

<ToolToggle :name="'tool-cra'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
cd {專案名稱}
npm install
npm start
```
</div><div v-if="tool === 'yarn'">

```bash
cd {專案名稱}
yarn
yarn start
```
</div><div v-if="tool === 'pnpm'">

```bash
cd {專案名稱}
pnpm install
pnpm start
```
</div></ToolToggle>

-----

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

<ToolToggle :name="'tool-ng-install'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
npm init vitawind@latest {專案名稱} -- --vue
```
</div><div v-if="tool === 'yarn'">

```bash
yarn create vitawind {專案名稱} --vue
```
</div><div v-if="tool === 'pnpm'">

```bash
pnpm init vitawind@latest {專案名稱} -- --vue
```
</div></ToolToggle>

建立專案之後，你需要做：

<ToolToggle :name="'tool-ng'" :tool="tool" @tool="ct($event)"><div v-if="tool === 'npm'">

```bash
cd {專案名稱}
npm install
npm start
```
</div><div v-if="tool === 'yarn'">

```bash
cd {專案名稱}
yarn
yarn start
```
</div><div v-if="tool === 'pnpm'">

```bash
cd {專案名稱}
pnpm install
pnpm start
```
</div></ToolToggle>