//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    weather: { 'wea_img': 'qing'},//实况天气
    weatherweek:[],//七日天气
  },
  onLoad: function () {
    this.getapi();
  },
  getapi:function(){
    var _this = this;
    wx.request({
      url: 'https://tianqiapi.com/api?version=v9&appid=97241271&appsecret=7ybr3YjC',
      data: {
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        // 根据IP获取天气数据
        _this.weatherweekday(res.data.ip);
        console.log(res.data);
      }
    });
  },

  weatherweekday: function (city) {
    var _this = this;
    wx.request({
      url: 'https://tianqiapi.com/api?version=v9&appid=97241271&appsecret=7ybr3YjC',
      data: {
        'city': "上海"
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        _this.setData({
          weatherweek: res.data
        });
        console.log(_this.data.weatherweek)
      }
    });
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
  }
})
