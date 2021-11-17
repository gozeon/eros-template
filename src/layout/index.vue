<template>
  <div class="wrapper">
    <my-header></my-header>
    <router-view />
  </div>
</template>
<script>
import MyHeader from './components/my-header.vue'
export default {
  components: {
    MyHeader,
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  background: var(--white-500);
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--neutral-dark);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
