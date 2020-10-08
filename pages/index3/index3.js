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
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/relatives/relatives'
    },
      {
        title: '麻将分数计算器',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
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
  }
});