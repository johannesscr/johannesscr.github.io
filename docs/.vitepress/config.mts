import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "johannesscr",
  description: "Personal Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Finance',
        link: '/finance',
        items: [
          // { text: 'Finance', link: '/finance' },
          { text: 'Future Value', link: '/finance/future-value' },
        ]
      },
      { text: 'References', link: '/references' },
      // {
      //   text: 'Vitepress Markdown Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //     { text: 'Math Examples', link: '/math-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/johannesscr' },
      // { icon: 'x', link: 'https://github.com/johannesscr' }
    ]
  },
  markdown: {
    math: true
  }
})
