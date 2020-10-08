// pages/tocalclothes/tosuit/tosuit.js

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
      case 33: this.setData({size:'XS' , european:"165/96C",american:"2R48"});
      case 34: this.setData({size:'S', european:"170/100A",american:"2R50"});
      case 35: this.setData({size:'M',european:"175/104A",american:"2R52"});
      case 36: this.setData({size:'L',european:"180/108A",american:"2R54"});
      case 37: this.setData({size:'XL',european:"185/112A",american:"2R56"});

    }


  
    this.setData({
       num: this.data.num+operation
  })
  }

})