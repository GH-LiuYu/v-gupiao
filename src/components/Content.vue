<template>

<el-container style="border: 1px solid #eee">
    <el-header style="font-size: 12px; background-color:#f5f8fa">
      <el-switch
        v-model="starting"
        active-text="自动刷新开"
        @change="change(starting)"
        inactive-text="关">
      </el-switch>
        <el-button type="primary"  style="text-align: right;margin-left: 37px" @click="handleChange">手动刷新</el-button>
    </el-header>
    <el-main>
      <el-row>
          <el-col :span="3" v-for="lists in list" :key="lists.id">
            <el-card :body-style="{ padding: '0px'}" style="width: 230px;height: 200px">
              <img :src="lists.url" class="image">
              <div style="margin-top: -46px;">
                <el-tooltip placement="top">
                  <div slot="content"><span>{{lists.notions}}</span></div>
                  <el-button type="danger" size="mini" style="padding: 4px;"> <a :href="lists.href" target="_blank">{{lists.name}}</a></el-button>
                </el-tooltip>
              </div>
              <div style="text-align: left;margin-top: -10px;">
                  <el-button type="primary" size="mini" @click="updateOpt(index,lists,1)" style="padding: 4px;margin-left: 15px">前移</el-button>
                  <el-button type="warning" size="mini" @click="updateOpt(index,lists,2)" style="padding: 4px;margin-left: 6px">后移</el-button>
                  <el-button type="warning" size="mini" @click="deleteOpt(index,lists)" style="padding: 4px;margin-left: 6px">移除自选</el-button>
<!--                  <el-button type="danger" size="mini" style="padding: 4px;"><a :href="lists.detail" target="_blank">明细</a></el-button>-->
                <el-tooltip placement="top">
                  <div slot="content"><img :src="lists.url90" class="image"></div>
                  <el-button type="danger" size="mini" style="padding: 4px;">明细</el-button>
                </el-tooltip>

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
  import {list,updateOpt,deleteOpt,searchList} from '../api/content'
  export default {
    inject:['reload'],
    data() {
      return {
        list: {},
        sw:true,
        starting:true,
        currentDate: new Date(),
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
      this.lists()
    },
    mounted() {
      this.change(this.starting)
    },
    methods: {
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
      updateOpt(index,lists,type){
        lists.type = type;
        updateOpt(lists).then(res => {
          this.lists()
        }).catch((err) => {
          console.log(err);
        })
      },
      // searchList(){
      //   searchList().then(res => {
      //     this.lists();
      //   }).catch((err) => {
      //     console.log(err);
      //   })
      // },
    change(starting){
        // if(starting){
        //   console.log(starting)
        //   clearTimeout(this.timer)
        // }else{
        //   console.log(starting)
        //   this.timer= setTimeout(() =>{
        //     this.handleChange()
        //   },5000);
        // }
      if(starting){
        this.timer = setInterval(() =>{
          this.lists()
          this.searchList()
        },1000* 3)//每五秒定时执行
      }else{
        clearInterval(this.timer)//停止定时器
      }
    },
    handleChange(){
      // this.reload()
      this.lists()
    }
  },
  };
</script>
