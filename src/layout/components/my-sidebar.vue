<template>
  <div class="side" :class="{ collapse: collapse }">
    <el-menu router :default-active="$route.name" :collapse="collapse">
      <el-menu-item
        index="system-overview"
        :route="{ name: 'system-overview' }"
      >
        <i class="iconfont icon-data"></i>
        <span slot="title">看板</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-edit-o1"></i>
          <span>表单</span>
        </template>

        <el-menu-item index="form-base" :route="{ name: 'form-base' }">
          <span slot="title">基础</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont icon-table"></i>
          <span>表格</span>
        </template>

        <el-menu-item index="table-base" :route="{ name: 'table-base' }">
          <span slot="title">基础</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont icon-success-circle-o"></i>
          <span>描述页</span>
        </template>

        <el-menu-item
          index="description-base"
          :route="{ name: 'description-base' }"
        >
          <span slot="title">基础</span>
        </el-menu-item>

        <el-menu-item
          index="description-size"
          :route="{ name: 'description-size' }"
        >
          <span slot="title">尺寸</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="iconfont icon-text-o1"></i>
          <span>常用页</span>
        </template>

        <el-menu-item index="login" :route="{ name: 'login' }">
          <span slot="title">登录页</span>
        </el-menu-item>

        <el-menu-item index="not-found" :route="{ name: 'not-found' }">
          <span slot="title">404</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapState('global', {
      collapse: 'collapse',
    }),
  },
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.side {
  width: 160px;
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  background: var(--N2);

  &.collapse {
    width: 48px;
  }

  /deep/.el-menu {
    background: var(--N2);
    border: 0;
  }

  /deep/.el-menu-item {
    font-size: 12px;

    height: 40px;
    line-height: 40px;

    min-width: unset;

    border-radius: 2px;
    margin: 4px;
    &:hover {
      background: var(--N4);
    }

    i {
      margin-right: 5px;
    }

    &.is-active {
      color: var(--N1);
      background: var(--green-base);
    }
  }

  /deep/.el-submenu__title {
    font-size: 12px;
    margin: 4px;
    height: 40px;
    line-height: 40px;
    border-radius: 2px;

    i {
      &:first-child {
        margin-right: 5px;
      }
    }

    &:hover {
      background: var(--N4);
    }
  }

  /deep/.el-menu--collapse {
    width: 48px;

    .el-menu-item {
      border-radius: 2px;

      i {
        margin-right: 0;
      }
      .el-tooltip {
        padding: 0 !important;
        text-align: center;
      }
    }

    .el-submenu {
      margin: 3px;
      border-radius: 2px;
      i {
        margin-right: 0;
      }
      &.is-active {
        color: var(--N1);
        i {
          color: var(--N1);
        }
        background: var(--green-base);
      }

      &:hover {
        background: var(--green-base);
      }
    }

    .el-submenu__title {
      padding: 0 !important;
      text-align: center;

      &:hover {
        background: var(--green-base);
      }
    }
  }
}

.el-menu--vertical {
  .el-menu-item {
    height: 40px;
    line-height: 40px;

    &.is-active {
      color: var(--N1);
      background: var(--green-base);
    }

    &:hover {
      background: var(--N4);
    }
  }
}
</style>
