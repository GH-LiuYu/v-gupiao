<template>
  <el-container>
    <el-header style="padding: 0px"><v-nav></v-nav></el-header>
    <!-- <el-aside width="500px"><v-side></v-side></el-aside> -->
    <el-main :style="defaultHeight"><v-content></v-content></el-main>
  </el-container>
</template>

<script>
import vContent from './Content.vue'
import vSearch from './Search.vue'
import vNav from './Nav.vue'
export default {
  name: 'Home',
  data () {
    return {
      defaultHeight: {
        height: '',
        padding:0
      }
    }
  },
  components: {
    vContent,
    vSearch,
    vNav
  },
  methods: {
    getHeight () {
      this.defaultHeight.height = window.innerHeight + 'px'
    }
  },
  created () {
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  }
}
</script>

<style>

  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px;*/
    padding:0px;
  }
  .el-aside {
    color: #333;
    text-align: center;
    /*background-color: rgba(243,243,243,243);*/
  }
  .el-main {
    text-align: center;
    line-height: 50px;
    width: 100%;height: 100%;
    background-color: rgba(251,252,252,1);
    padding:0;
  }
  body > .el-container {
    /*margin-bottom: 20px;*/
    border-radius:0px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
