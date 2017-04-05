const demos = [
  'grid1',
  'grid2',
  'grid3',
  'grid4',
  'grid5',
  'grid6',
  'icon',
  'timeline1',
  'timeline2',
  'extend1',
  'extend2'
]

const components = {};

for(let d of demos){
  components[d] = ()=>import(`./${d}`)
}

export default components

// export default {
//   grid1: resolve => require(['./grid1'], resolve),
//   grid2: () => import(`./${''}grid1`),
//   grid3: () => import('./grid3'),
//   grid4: r => require.ensure(['./grid4'], () => r(), 'test'),
//   grid5: r => require.ensure([], () => r(require('./grid5')), 'test'),
//   grid6: r => require.ensure([], () => r(require('./grid6')), 'test'),
//   icon: r => require.ensure([], () => r(require('./icon')), 'test'),
//   timeline1: r => require.ensure([], () => r(require('./timeline1')), 'test'),
//   timeline2: r => require.ensure([], () => r(require('./timeline2')), 'test'),
//   extend1: r => require.ensure([], () => r(require('./extend1')), 'test'),
//   extend2: r => require.ensure([], () => r(require('./extend2')), 'test'),
// }
