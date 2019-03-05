<template>
  <div>
    <Breadcrumb :datas="datas"></Breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [{
        icon: 'h-icon-home'
      }, {
        title: 'Component',
        icon: 'h-icon-complete',
        route: { name: 'Component' }
      }, {
        title: 'Breadcrumb',
        icon: 'h-icon-star'
      }]
    };
  }
};
</script>
