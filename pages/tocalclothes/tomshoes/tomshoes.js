// pages/tocalclothes/tomshoes/tomshoes.js
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
      case '37':{this.setData({european:"37",american:"4",chinese:"235"});break;}
      case '38': {this.setData({european:"38",american:"5",chinese:"240"});break;}
      case '39': {this.setData({european:"39",american:"6",chinese:"245"});break;}
      case '40': {this.setData({ european:"40",american:"7",chinese:"250"});break;}
      case '41': {this.setData({european:"41",american:"8",chinese:"255"});break;}
      case '42': {this.setData({european:"42",american:"9",chinese:"260"});break;}
      case '43': {this.setData({european:"43",american:"10",chinese:"265"});break;}
      case '44': {this.setData({european:"39",american:"11",chinese:"270"});break;}
      case '45': {this.setData({ european:"40",american:"12",chinese:"275"});break;}
      case '46': {this.setData({european:"41",american:"13",chinese:"280"});break;}
      default : {this.setData({european:"暂无尺码推荐哦，请重新输入",american:"",chinese:""})}
    }
  }
})