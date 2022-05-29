export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "My Component library",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Installation",
      "slug": "installation",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1653853195000,
    "contributors": [
      {
        "name": "Magnus Grande",
        "email": "magnus.grande@gmail.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
