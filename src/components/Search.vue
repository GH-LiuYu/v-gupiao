<template>
  <div class="side">
    <div>搜索</div>
    <div class="handle-box">
      <el-input placeholder="请输入内容" class="input-with-select" v-model="query.search">
        <el-button slot="append" icon="el-icon-search" @click="sideSearch"></el-button>
      </el-input>
    </div>
    <div class="list">
      <el-table
        :data="tableData"
         class="table"
        style="width: 99%;text-align: center;margin-left: 5px;border-right-style: none"
        max-height="750"
        border
        :highlight-current-row ="true">
        <el-table-column
          prop="code"
          width="70"
          label="代码">
        </el-table-column>
        <el-table-column
          prop="name"
          width="100"
          label="股票">
        </el-table-column>
        <el-table-column prop="notions" label="所属概念" align="center"></el-table-column>
        <el-table-column
        width="200"
          label="操作">
          <template slot-scope="scope">
            <a :href="'http://'+scope.row.href" target="_blank">查看</a>
            <a :href="'http://'+scope.row.detail" target="_blank">明细</a>
            <el-button type="primary" size="mini" @click="addOpt(index,scope.row)">添加自选</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { sideSearch,addOpt } from '../api/content'
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
    sideSearch () {
      sideSearch(this.query).then(res => {
          this.tableData = res.data
      }).catch((err) => {
        console.log(err);
      })
    },
    addOpt(index,row){
      addOpt(row).then(res => {
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
