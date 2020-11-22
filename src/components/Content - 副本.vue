<template>
  <div class="container">
    <div class="conent-search">
      <el-input placeholder="请输入内容" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="searchList"></el-button>
      </el-input>
    </div>
    <el-table
      :data="tableData"
      border
      class="table"
      ref="multipleTable"
      header-cell-class-name="table-header">
     <el-table-column type="selection" width="80" align="center" style="height: 30px"></el-table-column>
      <el-table-column label="排行" width="200" align="center" prop="level"> </el-table-column>
      <el-table-column prop="time" label="时间" width="100" align="center"></el-table-column>
      <el-table-column prop="code" label="代码" width="150" align="center">
        <template slot-scope="scope">{{code}}</template>
       </el-table-column>
       <el-table-column prop="name" label="股票" width="150" align="center">
<!--        <template slot-scope="scope">{{name}}</template>-->
       </el-table-column>
       <el-table-column prop="price" label="实时价格" width="100" align="center"></el-table-column>
       <el-table-column prop="change" label="变动次数" width="100" align="center"></el-table-column>
       <el-table-column prop="notion" label="所属概念" width="200" align="center"></el-table-column>
       <el-table-column prop="count" label="累计次数" width="200" align="center"></el-table-column>
      <el-table-column label="操作" width="600" align="center">
        <template slot-scope="scope">
          <a :href="'http://'+scope.row.href" target="_blank">查看</a>
          <a :href="'http://'+scope.row.detail" target="_blank">明细</a>
          <el-button
            type="text"
            class="red"
            @click="addBuys(scope.$index, scope.row)"
          >购买</el-button>
          <el-button
            type="text"
            class="red"
            @click="deleteOpt(scope.$index, scope.row)"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {getCodeList,addBuys,deleteOpt,searchList,timingRequest} from '../api/content'
import axios from 'axios'
export default {
  name: 'Content',
  data () {
    return {
      query: {
        address: '',
        name: '',
        pageIndex: 1,
        pageSize: 10,
        code:'',
        price:''
      },
      href:'http://quotes.money.163.com/0603697.html',
      tableData: {
      },
    };
  },
  created() {
    // 实现轮询
    window.setInterval(() => {
      setTimeout( this.searchList(), 0);
    }, 20000);
  },
  methods: {
    // 获取 easy-mock 的模拟数据
    getData() {
      getCodeList(this.query).then(res => {
        this.tableData = res.data
      }).catch((err) => {
        console.log(err);
      })
    },
    addBuys(index,row){
      this.query.price =row.price
      this.query.code =row.code
      addBuys(this.query).then(res => {
        // this.tableData = res.data
        // console.log(res.data)
      }).catch((err) => {
        console.log(err);
      })
    },
    deleteOpt(index,row){
      this.query.code =row.code
      deleteOpt(this.query).then(res => {
        this.$message({
          message: '恭喜你,添加成功',
          type: 'success'
        });
      }).catch((err) => {
        console.log(err);
      })
    },
    searchList(){
      this.query.page =this.page
      searchList(this.query).then(res => {
        this.tableData = res.data
      }).catch((err) => {
        console.log(err);
      })
    },
    timingsearch(){

    }
  }
}

</script>
<style scoped>
.container {
  padding: 10px;
  background: #fff;
  border: 1px solid #ddd;
}
.conent-search{
  margin-top: 54px;
}

</style>
