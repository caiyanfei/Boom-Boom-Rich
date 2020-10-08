// pages/tocalclothes/totrouses/totrouses.js

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
    console.log(e);
    switch(this.data.height/5){
      case 31: this.setData({size:'S' , european:"25-26",american:"2"});
      case 32: this.setData({size:'M', european:"27-28",american:"4-6"});
      case 33: this.setData({size:'L',european:"29-30",american:"8-10"});
      case 34: this.setData({size:'XL',european:"31-32",american:"12-14"});
     

    }


  
    this.setData({
       num: this.data.num+operation
  })
  }

})