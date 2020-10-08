// pages/tocalclothes/tocshoes/tocshoes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    size:'25',
    american:"8C",
    european:"7.5",
    chinese:"14"
  },

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

  getsize:function(e){
    this.setData({size:e.detail.value})
  },
  calsize(e){
    switch(this.data.size){
      case '25': {this.setData({european:"7.5",american:"8C",chinese:"14"}); break;}
      case '26': {this.setData({ european:"8.5",american:"9C",chinese:"15"});break;}
      case '27': {this.setData({european:"9.5C",american:"10C",chinese:"16"});break;}
      case '28': {this.setData({european:"10.5",american:"11C",chinese:"17"});break;}
      case '29': {this.setData({european:"11.5",american:"12C",chinese:"18"});break;}
      case '31': {this.setData({ european:"12.5",american:"13c",chinese:"19"});break;}
      case '32': {this.setData({european:"13.5",american:"1Y",chinese:"20"});break;}
      case '33': {this.setData({european:"1.5",american:"2Y",chinese:"21"});break;}
      case '34': {this.setData({european:"2.5",american:"3Y",chinese:"22"});break;}
    }
  }
})