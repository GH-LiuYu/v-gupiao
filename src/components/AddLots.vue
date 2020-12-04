<template>
  <div class="side">
    <div>批量添加</div>
    <div class="handle-box">
      <el-input placeholder="请输入内容" class="input-with-select" v-model="query.search">
        <el-button slot="append" icon="el-icon-search" @click="addLots"></el-button>
      </el-input>
    </div>
  </div>
</template>
<script>
import { addLots } from '../api/content'
export default {
  data (){
    return {
      query: {
        address: '',
        name: '',
        pageIndex: 1,
        pageSize: 10,
        code:'',
        price:'',
        search:''
      },
      tableData: [],
      opt:'添加自选'
    }
  },
  created() {
    // 实现轮询
    // window.setInterval(() => {
    //   setTimeout( this.sideSearch(), 0);
    // }, 10000);
    // window.setInterval(() => {
    //   setTimeout( this.timingRequest(), 0);
    // }, 3000);
  },
  methods: {
    addLots(){
      addLots(this.query).then(res => {
        this.$message({
          message: '恭喜你,添加成功',
          type: 'success'
        });
      }).catch((err) => {
        console.log(err);
      })
    }
  },
}
</script>
<style scoped>
.side {
  margin-top: 50px;
}
.list {
  /*margin-top: 100px;*/
  /*background-color: #42b983;*/
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
