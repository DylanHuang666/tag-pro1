<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider style="background: #fff" v-model="collapsed" :trigger="null" collapsible>
      <div class="logo-box">
        <img src="../assets/images/logo.png" alt="" />
      </div>
      
      <div>
        <a-menu
          :default-selected-keys="['1']"
          :open-keys.sync="openKeys"
          mode="inline"
          @click="handleClick"
        >
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>标签看板</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>标签管理</span>
          </a-menu-item>
          <a-sub-menu key="sub1" @titleClick="titleClick">
            <span slot="title"
              ><a-icon type="appstore" /><span>画像分析</span></span
            >
            <a-menu-item key="3"> 智能圈客 </a-menu-item>
            <a-menu-item key="4"> 客户360视图 </a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub2" @titleClick="titleClick">
            <span slot="title"
              ><a-icon type="inbox" /><span>账户管理</span></span
            >
            <a-menu-item key="5"> 机构管理 </a-menu-item>
            <a-menu-item key="6"> 个人中心 </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <div style="height: 800px">content</div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import CommonHeader from "../components/CommonHeader";
// import CommonAside from "../components/CommonAside";
export default {
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"],
      collapsed: false,
    };
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    },
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-box {
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 164px;
  }
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

</style>
