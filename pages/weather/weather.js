//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    weather: { 'wea_img': 'qing'},//实况天气
    weatherweek:[],//七日天气
    cur_name :"上海",  //当前城市
    clothes:"",    //穿搭建议   
    now:"",       //今日天气
    suggestion:"",
    cur_id:app.curid,
    basic:"",  
    cardCur: 0,
    man:true,     //男生轮播图
    woman:true,   //女生轮播图
    //女生轮播图图片
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://s1.ax1x.com/2020/10/16/0bI5TO.jpg'
      
    }, {
      id: 1,
        type: 'image',
        url: 'https://s1.ax1x.com/2020/10/16/0bIhm6.jpg',
    }, {
      id: 2,
      type: 'image',
      url: ' https://s1.ax1x.com/2020/10/16/0bIWOx.jpg'
      
    }, {
      id: 3,
      type: 'image',
      url: 'https://s1.ax1x.com/2020/10/16/0bIokD.jpg'
    },],
     //男生轮播图图片
    swiperList2: [{
      id: 0,
      type: 'image',
      url: 'https://s1.ax1x.com/2020/10/18/0X8pQI.jpg'
      
    }, {
      id: 1,
        type: 'image',
        url: 'https://s1.ax1x.com/2020/10/18/0X3vJH.jpg',
    }, {
      id: 2,
      type: 'image',
      url: ' https://s1.ax1x.com/2020/10/18/0X3xWd.jpg'
      
    },
    {
      id: 3,
      type: 'image',
      url: ' https://s1.ax1x.com/2020/10/18/0XGsbV.jpg'
      
    }
  ]
  },
  change(e){    //选择是男生轮播图还是女生轮播图
      this.setData({woman:true,man:true});
      if(e.target.dataset.val=='1'){
        this.setData({woman:false})
      }else{
        if(e.target.dataset.val=='2')
        {
          this.setData({man:false})
        }
      }
  },
  onLoad: function () {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  getapi:function(){     //天气api
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
        // 根据IP获取天气数据  
        _this.weatherweekday(res.cur_id);
        console.log(res.data);
      }
    });
  },

  weatherweekday: function (res) {
    var _this = this;
    wx.request({             //注册天气api
      url: 'https://tianqiapi.com/api?version=v9&appid=97241271&appsecret=7ybr3YjC',
      data: {
        'city': this.data.basic.city
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
  //今日穿搭建议
  showModal(e) {      
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
    if(this.data.weatherweek.data[0].tem>='20'){
      this.setData({clothes:"天气满分，今日推荐小马甲叠穿衬衣搭配牛仔裤，保你是这条街上最靓的崽！"})
    }else{
      if(this.data.weatherweek.data[0].tem>='10'){
        this.setData({clothes:"天气转凉，今日适合衬衣搭配高领内搭，再穿上小外套，既有风度，又有温度！"})
      }else{
        if(this.data.weatherweek.data[0].tem>='0'){
          this.setData({clothes:"温度偏低，温暖毛衣搭配衬衣内穿，再来一条毛茸茸的围巾就更好不过啦！"})
        }
      }
    };
    if(this.data.weatherweek.data[0].wea_day=='雨'){
      this.setData({clothes:this.data.clothes+"记得带伞噢！今日下雨！"})
    }
  },
  //关闭模态框
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  onShow:function(){
    var that = this;
    wx.showToast({title: '加载中',icon: 'loading',duration: 10000})//设置加载模态框
    that.getnow(function(d){//获取到数据的回调函数
      wx.hideToast();
      d.now.cond.src="http://files.heweather.com/cond_icon/"+d.now.cond.code+".png";
      that.setData({basic:d.basic,now:d.now})//更新数据，视图将同步更新
      that.setData({cur_name:d.basic.city})
      that.getapi();
    })
    }, 
  //获取当前天气API
  getnow:function(fn){
    wx.request({//请求服务器，类似ajax
      url: 'https://www.xiaoguge.cn/api/wxtest/now.php', 
      data: {city:app.curid,key:'01a7798b060b468abdad006ea3de4713'},//和风天气提供用户key，可自行注册获得
      header: {'Content-Type': 'application/json'},
      success: function(res) {fn(res.data.HeWeather5[0]);
        console.log(res.data)
      },//成功后将数据传给回调函数执行      
    })   
  },

   //页面事件绑定部分
   bindViewTap:function(){wx.navigateTo({url: '../city/city'})},//跳转菜单页面 
   DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },

  // cardSwiper 轮播图
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})
