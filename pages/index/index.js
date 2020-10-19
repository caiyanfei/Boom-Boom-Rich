//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    defaultSize: 'default',
    disabled: false,
    iconType:'info_circle',
    TabCur: 0,
    scrollLeft:0,
    screenNum: 0,//屏幕显示的数
    currentNum: '',//当前输入的数
    storage: 0,//存储的数
    operator: '',//运算符
    off: false,   //当前数字是否输入结束
  },
  //分页
  tabSelect(e) {     
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    if(e.currentTarget.dataset.id==0){
      wx.switchTab({
        url:'../index/index'
      })
    }
    if(e.currentTarget.dataset.id==1){
      wx.navigateTo({
        url:'../function/function'
      })
    }
    if(e.currentTarget.dataset.id==2){
      wx.navigateTo({
        url:'../senior/senior'
      })
    }

  },

  //事件处理函数 分页
  bindViewTap: function() {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
   
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
  },
  compute: function (e) {
    var btn_num = e.target.dataset.val;
    var obj = this;
    if (!isNaN(btn_num)) {
      if (obj.data.off == true) {     //上一个运算数字存储结束，开始新一个数字存储
        obj.data.currentNum = ' '
        obj.data.off = false;
      }
      obj.data.currentNum += btn_num
      
    } else {
      switch (btn_num) {
        case '+':
        case '-':
        case '*':
        case '/': 
          // 将当前屏幕上的数字和本次的操作符存储到变量 
          if (obj.data.storage == 0) {
            obj.data.storage = obj.data.currentNum-'0';  
          } 
        
          obj.data.operator = btn_num;
          obj.data.off = true;
          break;
        case '=':        //利用存储的storage和currentNum做运算
             
          if (obj.data.operator == '+') {
            obj.data.currentNum = Number(obj.data.storage) + Number(obj.data.currentNum)
          } else if (obj.data.operator == '-') {
            obj.data.currentNum = Number(obj.data.storage) - Number(obj.data.currentNum)
          } else if (obj.data.operator == '*') {
            obj.data.currentNum = Number(obj.data.storage) * Number(obj.data.currentNum)
          } else if (obj.data.operator == '/') {
            obj.data.currentNum = Number(obj.data.storage) / Number(obj.data.currentNum)
          }
        
        obj.data.storage = obj.data.currentNum;
        obj.data.operator = btn_num;
        obj.data.off=true;
        break;
        case 'sin':     
          obj.data.currentNum=Math.sin(obj.data.currentNum);
          break;
        case 'cos':
          obj.data.currentNum=Math.cos(obj.data.currentNum);
          break;
        case 'tan':
          obj.data.currentNum=Math.tan(obj.data.currentNum);
          break;
        case 'log':
          obj.data.currentNum=Math.log(obj.data.currentNum);
          break;
        case 'sqrt':     //开方运算
          obj.data.currentNum=Math.sqrt(obj.data.currentNum);
          break;
        case '+/-':    //正负号变换
          var newValue = parseFloat(this.data.currentNum) * -1
    
          this.setData({
            currentNum: String(newValue)
          })   
          break;

        case 'clear':
          obj.data.storage = 0;
          obj.data.currentNum = '0';
          obj.data.operator = '';
          obj.data.off=true;
          break;
        case 'back':     //清除一位数字
          obj.data.currentNum = obj.data.currentNum.slice(0, -1);
          if (obj.data.currentNum == '') {
            obj.data.currentNum = '0';
          }
          break;
        case '.':
          if (obj.data.currentNum.indexOf('.') == -1) { // 判断是否已包含“.”
            obj.data.currentNum += btn_num
          }
          break;
      }
    }
    obj.setData({screenNum: obj.data.currentNum})
  },

  onShareAppMessage: function () {     //设置分享界面
    return {
      title: '万能计算器',
      imageUrl: 'https://s1.ax1x.com/2020/10/16/0bh7fs.png'
    }
  },

})
