<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><router-link to="/search">查询</router-link></el-menu-item>
  <el-menu-item index="4"><router-link to="/addLots">批量添加</router-link></el-menu-item>
  <el-menu-item index="4"><router-link to="/search">自选榜</router-link></el-menu-item>
  <el-menu-item index="4"><router-link to="/search">五分钟榜</router-link></el-menu-item>
  <el-menu-item index="4"><router-link to="/search">十分钟榜</router-link></el-menu-item>
  <el-menu-item index="4"><router-link to="/search">二十分钟榜</router-link></el-menu-item>
</el-menu>
</template>
<script>
  export default {
    name:'Nav',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
