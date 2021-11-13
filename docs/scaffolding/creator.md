---
title: Creator
head:
  - - meta
    - name: description
      content: 極速生成範本所需的安裝指令，快速建立您的 Tailwind 專案，輕鬆又簡單。
  - - meta
    - name: keywords
      content: create-vitawind vitawind vite vitejs vitejs-plugin tailwind tailwindcss hmr react create-react-app vuecli vue-cli ng angular
sidebarDepth: 2
---

<script>
import Badge from '../.vitepress/components/Badge.vue'
import Terminal from '../.vitepress/components/Terminal.vue'
import Modal from '../.vitepress/components/Modal.vue'
import TemplateList from '../.vitepress/components/TemplateList.vue'

export default{
  data () {
    return {
      projectName: 'test-project',
      tool: 'npm',
      storage: undefined,
      modalOpen: false,
      msgShow: false,
      template: '',
      templates:{
        'pure':{
          name: 'Vite Vanilla-JS',
          script: ['run','dev'],
        },
        'vue':{
          name: 'Vite Vue',
          script: ['run','dev'],
        },
        'vue-ts':{
          name: 'Vite Vue + Typscript',
          script: ['run','dev'],
        },
        'react':{
          name: 'Vite React',
          script: ['run','dev'],
        },
        'react-ts':{
          name: 'Vite React + Typescript',
          script: ['run','dev'],
        },
        'vuecli':{
          name: 'Vue-CLI',
          script: ['run','serve'],
        },
        'vuecli5':{
          name: 'Vue-CLI 5',
          script: ['run','serve'],
        },
        'cra':{
          name: 'Create React App',
          script: ['','start'],
        },
        'ng':{
          name: 'Angular CLI',
          script: ['','start'],
        },
      }
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
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('tool',event)
      }
      this.tool = event
    },
    copy () {
      const copied = document.getElementById(`code-${this.tool}`).innerText
      var promise = navigator.clipboard.writeText(copied)
      this.msgShow = true
      setTimeout(this.clearMsg,2500)
    },
    clearMsg() {
      this.msgShow = false
    },
    getScript() {
      const template = this.templates[this.template]

      if (!template) { return '' }

      if (this.tool==='npm' || this.tool==='pnpm') {
        return template.script.join(' ')
      } else {
        return template.script[1]
      }
    }
  },
  components: {
    Terminal,Badge,Modal,TemplateList
  }
}
</script>


# Creator <Badge :color="'green'" :text="'1.0'" />

只要填上專案名稱並選擇一個範本，就可以極速生成你建置專案所需要的指令。

試試看吧！ :tada:

<Terminal :name="'terminal'" :tool="tool" :template="template" @tool="ct($event)" @copy="copy" @typing="projectName=$event" @choosing="modalOpen=true">

<div v-if="tool === 'npm'"><pre id="code-npm">
npm init vitawind@latest {{projectName}} -- --{{template?template:'{template}'}}
cd {{projectName}}
npm install
npm {{getScript()?getScript().trim():'{script}'}}
</pre></div>

<div v-if="tool === 'yarn'"><pre id="code-yarn">
yarn create vitawind {{projectName}} --{{template?template:'{template}'}}
cd {{projectName}}
yarn
yarn {{getScript()?getScript().trim():'{script}'}}
</pre></div>

<div v-if="tool === 'pnpm'"><pre id="code-pnpm">
pnpm init vitawind@latest {{projectName}} -- --{{template?template:'{template}'}}
cd {{projectName}}
pnpm install
pnpm {{getScript()?getScript().trim():'{script}'}}
</pre></div>

</Terminal>

<div
  class="text-sm text-gray-500 text-center mt-4 transition-all"
  :class="{'scale-100':msgShow,'scale-0':!msgShow}"
>
  <span class="bg-gray-200 p-1 rounded-md">
    已複製到剪貼簿。
  </span>
</div>

<Modal :open="modalOpen" @close="modalOpen=false">
  <TemplateList :modalStatus="modalOpen" @confirm="template=$event;modalOpen=false" />
</Modal>