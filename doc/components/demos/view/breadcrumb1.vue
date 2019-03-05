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
        title: 'Home',
        route: { name: 'Home' }
      }, {
        title: 'Component',
        route: { name: 'Component' }
      }, {
        title: 'Breadcrumb'
      }]
    };
  }
};
</script>
