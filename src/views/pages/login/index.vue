<template>
  <div class="wrapper">
    <div class="container">
      <div class="top">
        <router-link :to="{ name: 'board' }" class="back">
          <svg
            class="icon icon-xs me-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Back to homepage
        </router-link>
      </div>
      <div class="card">
        <h1 class="title">Sigin in to our platform</h1>
        <el-form :model="form" :rules="rules" ref="form" status-icon>
          <el-form-item label="Your Email" prop="name">
            <el-input type="text" v-model="form.name" clearable>
              <i slot="prefix" class="el-input__icon el-icon-message"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="Your Password" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              show-password
              clearable
            >
              <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-button @click="submit">Sign in</el-button>
          </el-form-item>
        </el-form>

        <el-row
          type="flex"
          justify="center"
          align="center"
          style="margin-bottom: 16px"
          >or login with</el-row
        >

        <el-row type="flex" justify="center" align="center">
          <el-button icon="iconfont icon-icon_weixinzhuti" circle></el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      rules: {
        name: [
          { required: true, message: 'required', trigger: 'blur' },
          { type: 'email', message: 'email', trigger: ['blur', 'change'] },
        ],
        password: [{ required: true, message: 'required', trigger: 'blur' }],
      },
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        console.log(valid)
      })
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
  width: 1132px;
  background-image: url('../../../assets/img/signin.svg');
  background-repeat: no-repeat;
  background-position: top center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;

    margin-bottom: 16px;
    .back {
      display: flex;
      justify-content: center;
      color: #000;

      text-decoration: none;

      svg {
        height: 16px;
        margin-right: 8px;
      }
    }
  }

  .card {
    width: 500px;
    padding: 48px;
    border-radius: 8px;
    background: #ffffff;
    box-sizing: border-box;

    .title {
      text-align: center;
      color: #111827;
      font-weight: 500;
      font-size: 27px;
    }

    .el-form {
      .el-button {
        width: 100%;
        background-color: #1f2937;
        color: #ffffff;
        border-color: #333;

        &:active {
          border-color: #ffffff;
        }
      }
    }
  }
}
</style>
