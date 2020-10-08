const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [
      {
        name:"女装",
        id:0
      },
      {
        name:"男装",
        id:1
      },
      {
        name:"鞋码",
        id:2
      }
    ],
    load: true
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    
   
    this.setData({
      list: this.data.list,
      listCur: this.data.list[0]
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  },
  tojump:function(e){
    console.log(e);
     var clothe=e.currentTarget.dataset.val;
    switch(clothe){
      case 'dress':  wx.navigateTo({url:'../tocalclothes/todress/todress' });
      case 'suit':    wx.navigateTo({url:'../tocalclothes/tosuit/tosuit' });
      case 'shirt':    wx.navigateTo({url:'../tocalclothes/toshirt/toshirt' });
      case 'trouses':    wx.navigateTo({url:'../tocalclothes/totrouses/totrouses' });
      case 'fshoes':    wx.navigateTo({url:'../tocalclothes/tofshoes/tofshoes' });
      case 'mshoes':    wx.navigateTo({url:'../tocalclothes/tomshoes/tomshoes' });
      case 'cshoes':    wx.navigateTo({url:'../tocalclothes/tocshoes/tocshoes' });
    }
    
  }
})