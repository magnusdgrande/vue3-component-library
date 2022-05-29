const { defaultTheme } = require('vuepress')
module.exports = {
  lang: 'en-US',
  title: 'Hello, VuePress!',
  description: 'This is my first VuePress site',
  base: '/vue3-component-library/',
  theme: defaultTheme({
    // sidebar array
    // all pages will use the same sidebar
    sidebar: [
      // SidebarItem
      {
        text: 'Components',
        link: '/components/',
        children: [
          // SidebarItem
          {
            text: 'Input text',
            link: '/components/input-text.md',
            children: [],
          },
          {
            text: 'Input textarea',
            link: '/components/input-textarea.md',
            children: [],
          }
        ],
      }
    ],
  }),
}