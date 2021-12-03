<template>
  <main :style="{ left: collapse ? '48px' : '160px' }">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    // mix the getters into computed with object spread operator
    ...mapState('global', {
      collapse: 'collapse',
    }),
  },
}
</script>
<style lang="scss" scoped>
main {
  position: absolute;

  top: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  transition: left 0.3s;

  overflow: auto;
  padding: 10px;
}
</style>
