
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/nouaim.github.io/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-NYHVIUB4.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 127952, hash: '4baf374c2f2e4c40b007180c5191485d374abff67c484089fa3b791d16048c2e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20395, hash: 'a526d4312ab5392c90350d6a9e4df62439bdfb3f897232db288d23ef54a7c933', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-2LQAM446.css': {size: 145118, hash: 'eXCfxDaXN9c', text: () => import('./assets-chunks/styles-2LQAM446_css.mjs').then(m => m.default)}
  },
};
