import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"My Component library"},["/index.html","/README.md"]],
  ["v-1020f180","/components/",{"title":""},["/components/index.html","/components/README.md"]],
  ["v-eb1c736e","/components/input-text.html",{"title":"input-text"},["/components/input-text","/components/input-text.md"]],
  ["v-3b610ddc","/components/input-textarea.html",{"title":"input-textarea"},["/components/input-textarea","/components/input-textarea.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
