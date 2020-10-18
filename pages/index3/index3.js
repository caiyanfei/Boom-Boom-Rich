const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '亲戚关系计算器',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/relatives/relatives'
    },
      {
        title: '麻将分数计算器',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/majiang/majiang'
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
  }
});