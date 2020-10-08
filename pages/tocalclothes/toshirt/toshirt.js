// pages/tocalclothes/toshirt/toshirt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weight:0,
    height:0,
    size:'s',
    american:"2",
    european:"34",

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

  getheight:function(e){
    this.setData({height:e.detail.value})
  },
  getweight:function(e){
    this.setData({weight:e.detail.value})
  },
  calsize:function(e){
    switch(this.data.height/5){
      case 31: {this.setData({size:'XS' , european:"34",american:"2"}); break;}
      case 32: {this.setData({size:'S', european:"34-36",american:"4-6"});break;}
      case 33: {this.setData({size:'M',european:"38-40",american:"8-10"});break;}
      case 34: {this.setData({size:'L',european:"42",american:"12-14"});break;}
      case 35: {this.setData({size:'XL',european:"44",american:"16-18"});break;}

    }
  }

})