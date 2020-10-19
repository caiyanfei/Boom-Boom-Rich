const app = getApp();
Component({
  options: {
    addGlobalClass: true, 
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '复数计算',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/complex/complex'
    },
      {
        title: '解方程运算',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/equations/equations'
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
})