<template>
  <el-container>
<!--    <el-header>Header</el-header>-->
    <el-aside width="200px">Aside</el-aside>
    <el-main :style="defaultHeight"><v-content></v-content></el-main>
  </el-container>
</template>

<script>
import vContent from './Content.vue'
export default {
  name: 'Home',
  data () {
    return {
      defaultHeight: {
        height: ''
      }
    }
  },
  components: {
    vContent
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
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    /*margin-bottom: 20px;*/
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
