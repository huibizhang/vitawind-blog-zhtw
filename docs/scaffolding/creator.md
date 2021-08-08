---
title: Creator
head:
  - - meta
    - name: description
      content: Create scaffolding installation commands for your tailwind project. Keep it easy, Keep it simple.
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
      npm: true,
      yarn: false,
      storage: undefined,
      modalOpen: false,
      msgShow: false,
      template: 'vue',
      templates:{
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
      if (this.tool==='npm') {
        return this.templates[this.template].script.join(' ')
      } else {
        return this.templates[this.template].script[1]
      }
    }
  },
  components: {
    Terminal,Badge,Modal,TemplateList
  }
}
</script>


# Creator <Badge :color="'green'" :text="'測試版'" />

只要填上專案名稱並選擇一個範本，就可以極速生成你建置專案所需要的指令。

試試看吧！ :tada:

<Terminal :name="'terminal'" :tool="tool" :template="template" @tool="ct($event)" @copy="copy" @typing="projectName=$event" @choosing="modalOpen=true">
<div v-if="npm"><pre id="code-npm" class="">
npm init vitawind@latest {{projectName}} -- --{{template}}
cd {{projectName}}
npm install
npm {{getScript().trim()}}
</pre></div><div v-if="yarn"><pre id="code-yarn">
npm init vitawind@latest {{projectName}} -- --{{template}}
cd {{projectName}}
yarn
yarn {{getScript().trim()}}
</pre></div>
</Terminal>
<div
  class="text-sm text-gray-500 text-center mt-4 transition-all"
  :class="{'scale-100':msgShow,'scale-0':!msgShow}"
>
  <span class="bg-gray-200 p-1 rounded-md">
    已複製到剪貼簿
  </span>
</div>

<Modal :open="modalOpen" @close="modalOpen=false">
  <TemplateList :modalStatus="modalOpen" @confirm="template=$event;modalOpen=false" />
</Modal>