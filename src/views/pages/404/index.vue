<template>
  <div class="wrapper">
    <div class="container">
      <img src="../../../assets/img/404.svg" />
      <h1>Page not found</h1>
      <p>
        Oops! Looks like you followed a bad link. If you think this is a problem
        with us, please tell us.
      </p>
      <el-button
        @click="goHome"
        type="primary"
        icon="iconfont icon-arrowLeft-h-o"
        >Back to Homepage</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: 'board' })
    },
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: #f2f4f6;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70vw;

  img {
    width: 50%;
  }

  /deep/.el-button {
    color: #ffffff;
    i {
      font-size: unset;
      margin-right: 8px;
    }

    background: #000;
    border-color: #000;

    &:active {
      border-color: rgb(228, 226, 226);
    }
  }
}
</style>
