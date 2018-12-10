<template>
  <DropdownCustom placement="bottom-start" offset="0, 20" class-name="h-text-dropdown" :delay="200" trigger="hover">
    <span >个人信息</span>
    <div slot="content" v-width="200" v-height="200">
      内容
    </div>
  </DropdownCustom>
</template>
