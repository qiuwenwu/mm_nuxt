<template>
  <el-menu class="side el-menu-vertical-demo" default-active="/" @open="handleOpen" @close="handleClose"
    background-color="#545c64" text-color="#fff" active-text-color="#38f" :collapse="isCollapse" :router="true">
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-order"></i>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">订单列表</el-menu-item>
      <el-menu-item index="/order/dispose" v-if="$check_auth([1,3])">部署记录</el-menu-item>
      <el-menu-item index="/order/balance">结算明细</el-menu-item>
    </el-submenu>
    <el-submenu index="3" v-if="$check_auth([1,3])">
      <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span slot="title">模板管理</span>
      </template>
      <el-menu-item index="/template/list">模板列表</el-menu-item>
      <el-menu-item index="/template/my">我的模板</el-menu-item>
    </el-submenu>
    <el-submenu index="4" v-if="$check_auth([1,3])">
      <template slot="title">
        <i class="el-icon-picture-outline"></i>
        <span slot="title">图片管理</span>
      </template>
      <el-menu-item index="/image/list">图片列表</el-menu-item>
      <el-menu-item index="/image/my">我的图片</el-menu-item>
      <el-menu-item index="/image/theme">主题风格</el-menu-item>
    </el-submenu>
    <el-submenu index="5" v-if="$check_auth([1,3])">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">文章管理</span>
      </template>
      <el-menu-item index="/article/list">文章列表</el-menu-item>
      <el-menu-item index="/article/my">我的文章</el-menu-item>
      <el-menu-item index="/article/theme">文章分类</el-menu-item>
    </el-submenu>
    <el-submenu index="6" v-if="$check_auth([1])">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </template>
      <el-menu-item index="/user/list">用户列表</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    props: {
      isCollapse: {
        trye: Boolean,
        default: false
      }
    },
    data() {
      return {
        user: this.$store.state.user
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
    }
  }
</script>


<style scoped="scoped">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 16rem;
  }

  .side {
    float: left;
    background: #545c64;
    color: #fff;
  }
</style>
