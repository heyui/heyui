<template>
  <DropdownCustom placement="bottom-start" offset="0, 20" class-name="h-text-dropdown" :delay="200" trigger="hover">
    <span>Personal information</span>
    <div slot="content" v-width="200" v-height="200">
      content
    </div>
  </DropdownCustom>
</template>
