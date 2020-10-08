// pages/tocalclothes/tofshoes/tofshoes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    size:'35',
    american:"4",
    european:"2",
    chinese:"225"
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
      case '35': {this.setData({european:"35",american:"4",chinese:"225"}); break;}
      case '36': {this.setData({ european:"36",american:"5",chinese:"230"});break;}
      case '37': {this.setData({european:"37",american:"6",chinese:"235"});break;}
      case '38': {this.setData({european:"38",american:"7",chinese:"240"});break;}
      case '39': {this.setData({european:"39",american:"8",chinese:"245"});break;}
      case '40': {this.setData({ european:"40",american:"9",chinese:"250"});break;}
      case '41': {this.setData({european:"41",american:"10",chinese:"255"});break;}
      case '42': {this.setData({european:"42",american:"11",chinese:"9"});break;}
    }
  }
})