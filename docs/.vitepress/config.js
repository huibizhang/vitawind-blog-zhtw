//const { path } = require('@vuepress/shared-utils')

module.exports = {
  title: "Vitawind",
  description:
    "為 Vite 自動安裝及設定 Tailwindcss，安裝輕易,一行設定指令即可開啟 Tailwind JIT 模式",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  markdown: {
    lineNumbers: true,
    // options for markdown-it-anchor
    anchor: { permalink: true },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
  },
  themeConfig: {
    repo: "huibizhang/vitawind/tree/v1.x",

    nav: [
      { text: "首頁", link: "/" },
      { text: "文件", link: "/guide/", activeMatch: "^/guide/" },
      {
        text: "快速搭建環境",
        link: "/scaffolding/",
        activeMatch: "^/scaffolding/",
      },
      { text: `Change to English`, link: "https://v1-vitawind.vercel.app" },
      // {
      //   text: 'Config Reference',
      //   link: '/config/basics',
      //   activeMatch: '^/config/'
      // },
      // {
      //   text: 'Release Notes',
      //   link: 'https://github.com/vuejs/vitepress/releases'
      // }
    ],

    sidebar: {
      "/scaffolding/": getScaffoldingSidebar(),
      "/guide/": getGuideSidebar(),
      "/": getGuideSidebar(),
      // '/advanced/': getConfigSidebar(),
    },
  },
  // alias: {
  //   '@': path.resolve(__dirname, '../.vuepress')
  // },
  // postcss: {
  //   plugins: [
  //     require('tailwindcss'),
  //     require('autoprefixer')
  //   ]
  // },
};

function getGuideSidebar() {
  return [
    {
      text: "開始",
      children: [
        { text: "介紹", link: "/guide/" },
        { text: "開始使用", link: "/guide/usage" },
      ],
    },
    {
      text: "進階",
      children: [
        {
          text: "配置",
          link: "/guide/configurations",
        },
      ],
    },
  ];
}

function getScaffoldingSidebar() {
  return [
    {
      text: "開始",
      children: [{ text: "介紹", link: "/scaffolding/" }],
    },
    {
      text: "範本 (Template)",
      children: [
        {
          text: "Vue in Vite",
          link: "/scaffolding/templates#vue-in-vite",
          children: [
            {
              text: "Typescript for Vue",
              link: "/scaffolding/templates#typescript-for-vue",
            },
          ],
        },
        {
          text: "React in Vite",
          link: "/scaffolding/templates#react-in-vite",
          children: [
            {
              text: "Typescript for React",
              link: "/scaffolding/templates#typescript-for-react",
            },
          ],
        },
        {
          text: "CLI",
          children: [
            {
              text: "Vue CLI",
              link: "/scaffolding/templates#vue-cli",
            },
            {
              text: "Create React App",
              link: "/scaffolding/templates#create-react-app",
            },
            {
              text: "Angular CLI",
              link: "/scaffolding/templates#angular",
            },
          ],
        },
      ],
    },
    {
      text: "工具",
      children: [{ text: "Creator", link: "/scaffolding/creator" }],
    },
  ];
}

// function getConfigSidebar() {
//   return [
//     {
//       text: 'App Config',
//       children: [{ text: 'Basics', link: '/config/basics' }]
//     },
//     {
//       text: 'Theme Config',
//       children: [
//         { text: 'Homepage', link: '/config/homepage' },
//         { text: 'Algolia Search', link: '/config/algolia-search' },
//         { text: 'Carbon Ads', link: '/config/carbon-ads' }
//       ]
//     }
//   ]
// }
