import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("InputText", defineAsyncComponent(() => import("/Users/magnusgrande/Documents/Tull/vue3-component-library/src/InputText.vue"))),
      app.component("InputTextarea", defineAsyncComponent(() => import("/Users/magnusgrande/Documents/Tull/vue3-component-library/src/InputTextarea.vue")))
  },
}
