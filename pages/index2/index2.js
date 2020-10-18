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
  onShareAppMessage: function () {     //设置分享界面
    return {
      title: '万能计算器',
      imageUrl: 'https://s1.ax1x.com/2020/10/16/0bh7fs.png'
    }
  },
})
