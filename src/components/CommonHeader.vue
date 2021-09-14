<template>
  <header>
    <div class="l-content">
      <div class="name">视频运维展示系统</div>
      <el-button type="primary" icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-user"></i>
          <h3>您好，陈工</h3>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex' //vuex高级用法，mapState把state数据映射到computed
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      userImg: require('../assets/images/user.png')
    }
  },
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
i {
  color: #00b4ff;
}
header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background: linear-gradient(180deg, rgba(7, 41, 127, 0.7), rgba(2, 17, 50, 1));
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.name {
  margin-left: 10px;
  margin-right: 60px;
  color: #00e4ff;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
}
.el-dropdown-link h3 {
  margin-left: 10px;
  color: #00b4ff;
}
</style>

<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #bbb;
    font-weight: 400;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>
