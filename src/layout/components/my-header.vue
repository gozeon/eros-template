<template>
  <div class="header">
    <div class="logo" :class="{ collapse: collapse }">
      {{ collapse ? 'xx' : 'XXXX' }}
    </div>
    <div class="bar">
      <div class="left">
        <i
          class="iconfont"
          :class="collapse ? 'icon-arrowRight-m' : 'icon-arrowLeft-m'"
          @click="toggleCollapse"
        ></i>
        <el-input
          placeholder="请输入关键字搜索"
          v-model="search"
          size="small"
          prefix-icon="el-icon-search"
          clearable
        >
        </el-input>
      </div>
      <div class="right">
        <i class="iconfont icon-help-o"></i>
        <el-drawer
          title="消息通知"
          :visible.sync="drawer"
          :modal="false"
          direction="rtl"
          append-to-body
        >
          <my-message
            v-for="(item, index) in messages"
            :key="index"
            :title="item.title"
            :desc="item.desc"
            :time="item.time"
            :unred="item.unred"
          ></my-message>
        </el-drawer>
        <el-badge :value="200" :max="99" @click="showMessage">
          <i class="iconfont icon-bell-o" @click="showMessage"></i>
        </el-badge>
        <el-dropdown trigger="click">
          <div class="avatar">
            <img src="../../assets/img/ic_head_default.png" />
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>系统1</el-dropdown-item>
            <el-dropdown-item>系统2</el-dropdown-item>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>
              <router-link
                :to="{ name: 'Logout', query: { nextUrl: $route.fullPath } }"
                tag="div"
                class="pointer"
                >退出</router-link
              >
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import MyMessage from './my-message.vue'
export default {
  components: {
    MyMessage,
  },
  data() {
    return {
      search: '',
      drawer: false,
      messages: [],
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapState('global', {
      collapse: 'collapse',
    }),
  },
  created() {
    this.axios.get('/messages.json').then(({ data }) => {
      this.messages = data.data
    })
  },
  methods: {
    toggleCollapse() {
      this.$store.commit('global/toggleSideBarCollapse')
    },
    showMessage() {
      this.drawer = true
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  height: 50px;
  background: var(--white-500);
  display: flex;

  .logo {
    width: 160px;
    flex-shrink: 0;
    background: var(--N2);

    display: flex;
    align-items: center;
    justify-content: center;

    &.collapse {
      width: 48px;
    }
    transition: width 0.3s;
  }

  .bar {
    flex: 1;
    height: 100%;
    border-bottom: 1px solid var(--N2);
    box-sizing: border-box;
    padding: 0 32px;

    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;

      i {
        cursor: pointer;
        margin-right: 32px;
      }

      /deep/ .el-input input {
        width: 230px;
        height: 28px;
        border: 0;
        border-radius: 1px;
        background: var(--N3);
      }
    }

    .right {
      display: flex;
      align-items: center;

      i {
        margin-right: 20px;
        cursor: pointer;
      }

      /deep/ .el-badge .el-badge__content {
        right: 27px;
        z-index: 20;
      }

      .avatar {
        cursor: pointer;
        margin-left: 20px;
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

.el-dropdown-menu {
  border-radius: 1px;

  .el-dropdown-menu__item {
    width: 170px;

    &:hover {
      background-color: var(--green-200A);
      color: var(--white-500);
    }
  }
}

.el-drawer__wrapper {
  /deep/ .el-drawer__container {
    top: 60px;

    .el-drawer__body {
      border-top: 1px solid var(--neutral-10);
    }
  }
}
</style>
