<template>

<el-container style="border: 1px solid #eee">
    <el-header style="font-size: 12px; background-color:#f5f8fa">
      <el-switch
        v-model="sw"
        active-text="自动刷新开"
        @change="change(sw)"
        inactive-text="关">
      </el-switch>
        <el-button type="primary"  style="text-align: right;margin-left: 37px" @click="lists">手动刷新</el-button>
    </el-header>
    <el-main>
      <el-row>
          <el-col :span="6" v-for="lists in list" :key="lists.id">
            <el-card :body-style="{ padding: '0px'}" style="width: 450px;height: 330px">
              <img :src="lists.url" class="image">
              <div style="text-align: center;margin-top: -10px;">
                  <el-button type="primary" size="mini" @click="updateOpt(index,lists)" el-icon-top>更新前排</el-button>
                  <el-button type="warning" size="mini" @click="deleteOpt(index,lists)">移除自选</el-button>
                  <el-button type="primary" size="mini"><a :href="lists.href" target="_blank">查看</a></el-button>
                  <el-button type="danger" size="mini"><a :href="lists.detail" target="_blank">明细</a></el-button>
              </div>
            </el-card>
        </el-col>
      </el-row>
    </el-main>
</el-container>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>

<script>
  // import { sideSearch,addList,list,searchList,searchList1,searchList2,searchList3,searchList4,searchList5,searchList6,searchList7,searchList8,searchList9,searchList10 } from '../api/content'
  import {list,updateOpt,deleteOpt} from '../api/content'
  export default {
    data() {
      return {
        list: {},
        currentDate: new Date(),
        sw: false,
        timer:null,//设定定时器
        query: {
        address: '',
        name: '',
        pageIndex: 1,
        pageSize: 10,
        code:'',
        price:'',
        search:''
        },
      }
    },
    created() {
      // 实现轮询
      // window.setInterval(() => {
      //   setTimeout( this.searchList(), 0);
      // }, 10000);
      // window.setInterval(() => {
      //   setTimeout( this.searchList1(), 0);
      // }, 11000);
      // window.setInterval(() => {
      //   setTimeout( this.searchList2(), 0);
      // }, 12000);
      // window.setInterval(() => {
      //   setTimeout( this.searchList3(), 0);
      // }, 13000);
      // window.setInterval(() => {
      //   setTimeout( this.searchList4(), 0);
      // }, 14000);
      // window.setInterval(() => {
      //   setTimeout( this.searchList5(), 0);
      // }, 15000);
      // window.setInterval(() => {
      //   setTimeout( this.searchList6(), 0);
      // }, 16000);
      // window.setInterval(() => {
      //   setTimeout( this.searchList7(), 0);
      // }, 17000);
      // window.setInterval(() => {
      //   setTimeout( this.searchList8(), 0);
      // }, 18000);
      // window.setInterval(() => {
      //   setTimeout( this.searchList9(), 0);
      // }, 19000);
      // window.setInterval(() => {
      //   setTimeout( this.searchList10(), 0);
      // }, 20000);
    },
    methods: {

    // searchList(){
    //   // this.query.page =this.page
    //   searchList(this.query).then(res => {
    //     this.tableData = res.data
    //   }).catch((err) => {
    //     console.log(err);
    //   })
    // },
    //   searchList1(){
    //     // this.query.page =this.page
    //     searchList1(this.query).then(res => {
    //       this.tableData = res.data
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   },
    //   searchList2(){
    //     // this.query.page =this.page
    //     searchList2(this.query).then(res => {
    //       this.tableData = res.data
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   },
    //   searchList3(){
    //     // this.query.page =this.page
    //     searchList3(this.query).then(res => {
    //       this.tableData = res.data
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   },
    //   searchList4(){
    //     // this.query.page =this.page
    //     searchList4(this.query).then(res => {
    //       this.tableData = res.data
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   },
    //   searchList5(){
    //     // this.query.page =this.page
    //     searchList5(this.query).then(res => {
    //       this.tableData = res.data
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   },
    //   searchList6(){
    //     // this.query.page =this.page
    //     searchList6(this.query).then(res => {
    //       this.tableData = res.data
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   },
    //   searchList7(){
    //     // this.query.page =this.page
    //     searchList7(this.query).then(res => {
    //       this.tableData = res.data
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   },
    //   searchList8(){
    //     // this.query.page =this.page
    //     searchList8(this.query).then(res => {
    //       this.tableData = res.data
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   },
    //   searchList9(){
    //     // this.query.page =this.page
    //     searchList9(this.query).then(res => {
    //       this.tableData = res.data
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   },
    //   searchList10(){
    //     // this.query.page =this.page
    //     searchList10(this.query).then(res => {
    //       this.tableData = res.data
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   },
    lists(){
      this.query.page =this.page
      list(this.query).then(res => {
        this.list = res.data
      }).catch((err) => {
        console.log(err);
      })
    },
      deleteOpt(index,lists){
        deleteOpt(lists).then(res => {
          this.lists();
        }).catch((err) => {
          console.log(err);
        })
      },
      updateOpt(index,lists){
        updateOpt(lists).then(res => {
          this.lists()
        }).catch((err) => {
          console.log(err);
        })
      },
    change(mess){
      console.log(mess)
      if(mess){
        this.timer = setInterval(() =>{
          this.lists()
        },1000* 5)//每五秒定时执行
      }else{
        clearInterval(this.timer)//停止定时器
      }
    },
  },
  };
</script>
