// pages/tocalclothes/tomshoes/tomshoes.js
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
      case '38': {this.setData({european:"38",american:"5",chinese:"240"});break;}
      case '39': {this.setData({european:"39",american:"6",chinese:"245"});break;}
      case '40': {this.setData({ european:"40",american:"7",chinese:"250"});break;}
      case '41': {this.setData({european:"41",american:"8",chinese:"255"});break;}
      case '42': {this.setData({european:"42",american:"9",chinese:"260"});break;}
      case '43': {this.setData({european:"43",american:"10",chinese:"265"});break;}
      case '44': {this.setData({european:"39",american:"11",chinese:"270"});break;}
      case '45': {this.setData({ european:"40",american:"12",chinese:"275"});break;}
      case '46': {this.setData({european:"41",american:"13",chinese:"280"});break;}
    }
  }
})