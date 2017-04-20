const demos = [
  'basic/grid1',
  'basic/grid2',
  'basic/grid3',
  'basic/grid4',
  'basic/grid5',
  'basic/grid6',
  'basic/icon',
  'plugins/timeline1',
  'plugins/timeline2',
  'basic/extend1',
  'basic/extend2',
  'basic/button1',
  'basic/button2',
  'form/input1',
  'form/input2',
  'form/input3',
  'form/input4',
  'form/input5',
  'form/input6',
  'form/radio1',
  'form/radio2',
  'form/radio3',
  'form/radio4',
  'form/switch1',
  'form/switch2',
  'form/switch3',
  'form/switchlist1',
  'form/switchlist2',
  'form/switchlist3',
  'form/switchlist4',
  'form/checkbox1',
  'form/checkbox2',
  'form/checkbox3',
  'form/checkbox4',
  'form/rate1',
  'form/rate2',
  'form/form1',
  'form/form2',
  'form/form3',
  'form/form4',
  'form/form5',
  'form/form6',
]

const components = {};

for (let d of demos) {
  components[d] = () =>
    import (`./${d}`)
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
