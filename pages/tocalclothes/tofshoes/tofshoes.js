// pages/tocalclothes/tofshoes/tofshoes.js
Page({
  data: {
    size:'',
    american:"",
    european:"",
    chinese:""
  },
//根据用户输入偏大偏小改变尺码
  change(e){
    this.setData({size:''})   //恢复正常值
    if(e.target.dataset.val=='0'){
      this.setData({size:this.data.size+1})
    }
    if(e.target.dataset.val=='2'){
      this.setData({size:this.data.size-1})
    }  
  },
  //模态框展示与关闭
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
//获取用户输入
  getsize:function(e){
    this.setData({size:e.detail.value})
  },
//计算size
  calsize(e){
    switch(this.data.size){
      case '35': {this.setData({european:"35",american:"4",chinese:"225"}); break;}
      case '36': {this.setData({ european:"36",american:"5",chinese:"230"});break;}
      case '37': {this.setData({european:"37",american:"6",chinese:"235"});break;}
      case '38': {this.setData({european:"38",american:"7",chinese:"240"});break;}
      case '39': {this.setData({european:"39",american:"8",chinese:"245"});break;}
      case '40': {this.setData({ european:"40",american:"9",chinese:"250"});break;}
      case '41': {this.setData({european:"41",american:"10",chinese:"255"});break;}
      case '42': {this.setData({european:"42",american:"11",chinese:"9"});break;}
      default : {this.setData({european:"暂无尺码推荐哦，请重新输入",american:"",chinese:""})}
    }
  }
})