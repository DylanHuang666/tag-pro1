<template>
  <div class="index">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#021132"
      text-color="#00B4FF"
      active-text-color="#00D8FF"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-tickets" color="#00B4FF"></i>
          <span>工单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="clickMenu" index="1">工单列表</el-menu-item>
          <el-menu-item @click="clickMenu" index="2">考勤签到列表</el-menu-item>
          <el-menu-item @click="clickMenu" index="3">运维巡检计划</el-menu-item>
          <el-menu-item @click="clickMenu" index="4">巡检</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span>单位管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="clickMenu" index="a">单位列表</el-menu-item>
          <el-menu-item @click="clickMenu" index="b">班组列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>账号管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="clickMenu" index="c">区域管理员列表</el-menu-item>
          <el-menu-item @click="clickMenu" index="d">单位管理员列表</el-menu-item>
          <el-menu-item @click="clickMenu" index="e">班组账号列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="clickMenu" index="5">角色权限管理</el-menu-item>
          <el-menu-item @click="clickMenu" index="6">管理员管理</el-menu-item>
          <el-menu-item @click="clickMenu" index="7">页面菜单设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  data() {
    return {
      asideMenu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/video',
          name: 'video',
          label: '视频管理',
          icon: 'video-play'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user'
        },
        {
          label: '其他',
          icon: 'setting',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting'
            }
          ]
        }
      ]
    }
  },
  methods: {
    clickMenu() {
      this.$router.push('/')
      // this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style lang="scss" scoped>
i {
  color: #00b4ff;
}
.el-menu {
  height: 100%;
  border: none;
  background: linear-gradient(180deg, rgba(7, 41, 127, 0.7), rgba(2, 17, 50, 1));
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<style>
.el-submenu__title i {
  color: #00b1fb;
}
</style>
