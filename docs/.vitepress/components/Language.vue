<template>
  <div style="width: 100%;display:flex; justify-content: flex-end; padding:5px;">
    <div class="lang">
      <div class="lang-upper">
        Languages
      </div>
      <select class="lang-lower" v-model="lang">
        <option value="EN" :selected="lang">English</option>
        <option value="TW" :selected="lang">繁體中文</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Language",
  props: ['url'],
  data() {
    return {
      lang: "EN"
    }
  },
  computed: {
    changeLang () {
      if (this.lang==="EN") {
        window.location = "https://vitawind-blog.vercel.app/" + this.url
      } else {
        window.location = "https://vitawind-blog-zhtw.vercel.app/" + this.url
      }
    }
  }
}
</script>

<style>
  .lang {
    font-size: 1rem;
    width:6rem;
    display:flex;
    flex-direction: column;
    gap: 0.2rem
  }
  .lang-upper {
    width: 100%;
    height: 1.5rem;
    display:flex;
    justify-content: center;
    align-items: center;
    background: #CCCCCC;
    border-radius: 0.5rem;
  }
  .lang-lower {
    width: 100%;
    height: 1.5rem;
    padding-left: 1rem;
    padding-right: 0.5rem;
    border: none;
  }
</style>