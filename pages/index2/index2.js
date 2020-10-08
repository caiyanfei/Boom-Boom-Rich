const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '天气穿衣助手',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/weather/weather'
    },
      {
        title: '穿衣尺码转换',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/clothes/clothes'
      }
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages' + e.currentTarget.dataset.url
      })
    },
  },
  
  onLoad: function () {
    console.log('onLoad');
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
