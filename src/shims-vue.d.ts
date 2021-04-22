declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'axios'

declare module '@'

declare module 'request'

declare module 'element-plus'