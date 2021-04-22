import {
  d as e,
  r as t,
  c as o,
  a as r,
  t as a,
  F as n,
  w as s,
  p as c,
  b as l,
  e as u,
  f as i,
  o as d,
  g as m,
  h as p,
  E as f,
  i as h,
  j as v,
  k as g,
  l as b
} from './vendor.4fa6469a.js'

!(function (e = '.', t = '__import__') {
  try {
    self[t] = new Function('u', 'return import(u)')
  } catch (o) {
    const r = new URL(e, location)
    const a = (e) => {
      URL.revokeObjectURL(e.src), e.remove()
    }
    ;(self[t] = (e) =>
      new Promise((o, n) => {
        const s = new URL(e, r)
        if (self[t].moduleMap[s]) return o(self[t].moduleMap[s])
        const c = new Blob([`import * as m from '${s}';`, `${t}.moduleMap['${s}']=m;`], {
          type: 'text/javascript'
        })
        const l = Object.assign(document.createElement('script'), {
          type: 'module',
          src: URL.createObjectURL(c),
          onerror() {
            n(new Error(`Failed to import: ${e}`)), a(l)
          },
          onload() {
            o(self[t].moduleMap[s]), a(l)
          }
        })
        document.head.appendChild(l)
      })),
      (self[t].moduleMap = {})
  }
})('assets/')
const _ = e({
  name: 'HelloWorld',
  props: { msg: { type: String, required: !0 } },
  setup: () => ({ count: t(0) })
})
const k = s()
c('data-v-cef2c88a')
const E = l(
  '<p data-v-cef2c88a> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-cef2c88a>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-cef2c88a> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-cef2c88a>Volar</a> (if using <code data-v-cef2c88a>&lt;script setup&gt;</code>) </p><p data-v-cef2c88a>See <code data-v-cef2c88a>README.md</code> for more information.</p><p data-v-cef2c88a><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-cef2c88a> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-cef2c88a>Vue 3 Docs</a></p>',
  3
)
const j = u('home')
const y = r(
  'p',
  null,
  [
    u(' Edit '),
    r('code', null, 'components/HelloWorld.vue'),
    u(' to test hot module replacement. ')
  ],
  -1
)
i()
const L = k((e, t, s, c, l, u) => {
  const i = m('router-link')
  return (
    d(),
    o(
      n,
      null,
      [
        r('h1', null, a(e.msg), 1),
        E,
        r(i, { to: '/home' }, { default: k(() => [j]), _: 1 }),
        r('button', { onClick: t[1] || (t[1] = (t) => e.count++) }, `count is: ${a(e.count)}`, 1),
        y
      ],
      64
    )
  )
})
;(_.render = L), (_.__scopeId = 'data-v-cef2c88a')
const R = e({ name: 'App', components: { HelloWorld: _ } })
const V = r('img', { alt: 'Vue logo', src: './assets/logo.03d6d6da.png' }, null, -1)
const w = u('el-button')
let x
R.render = function (e, t, a, s, c, l) {
  const u = m('el-button')
  const i = m('HelloWorld')
  const f = m('router-view')
  return (
    d(),
    o(
      n,
      null,
      [
        V,
        r(u, { type: 'primary' }, { default: p(() => [w]), _: 1 }),
        r(i, { msg: 'Hello Vue 3 + TypeScript + Vite' }),
        r(f)
      ],
      64
    )
  )
}
const U = {}
const $ = f.create({ baseURL: '', timeout: 2e4 })
$.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
),
  $.interceptors.response.use(
    (e) => e,
    (e) => (
      e.response && e.response.data
        ? console.error('[Axios Error]', e.response)
        : console.error(`${e}`),
      Promise.reject(e)
    )
  )
const H = e({
  setup() {
    $({ url: '/api/config/fetch', method: 'get' }).then((e) => {
      console.log(e)
    })
    return { count: t(0) }
  }
})
H.render = function (e, t, r, n, s, c) {
  return d(), o('div', null, `----------------primary${a(e.count)}------------------`, 1)
}
const M = [
  { path: '/home', name: 'Home', component: H },
  { path: '/vuex', name: 'Vuex', component: {} },
  {
    path: '/axios',
    name: 'Axios',
    component: () =>
      (function (e, t) {
        if (!t) return e()
        if (void 0 === x) {
          const e = document.createElement('link').relList
          x = e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload'
        }
        return Promise.all(
          t.map((e) => {
            if (e in U) return
            U[e] = !0
            const t = e.endsWith('.css')
            const o = t ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${e}"]${o}`)) return
            const r = document.createElement('link')
            return (
              (r.rel = t ? 'stylesheet' : x),
              t || ((r.as = 'script'), (r.crossOrigin = '')),
              (r.href = e),
              document.head.appendChild(r),
              t
                ? new Promise((e, t) => {
                    r.addEventListener('load', e), r.addEventListener('error', t)
                  })
                : void 0
            )
          })
        ).then(() => e())
      })(() => __import__('./axios.ddfba3bc.js'), void 0)
  }
]
const P = h({ history: v(), routes: M })
const A = { count: 0 }
const D = g({
  state: () => A,
  mutations: {
    increment(e) {
      e.count++
    }
  },
  actions: {
    increment(e) {
      e.commit('increment')
    }
  },
  getters: { double: (e) => 2 * e.count }
})
b(R).use(P).use(D).mount('#app')
