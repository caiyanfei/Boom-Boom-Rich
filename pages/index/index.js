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
    off: false,
  },
  
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },

  //事件处理函数
  bindViewTap: function() {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toCalc(e){
    wx.navigateTo({
      url:'../calc/calc'
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
      if (obj.data.off == true) {
        obj.data.currentNum = ''
        obj.data.off = false;
      }
      obj.data.currentNum += btn_num
      obj.data.currentNum = Number(obj.data.currentNum);
      obj.data.currentNum = obj.data.currentNum.toString();
    } else {
      switch (btn_num) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
          // 将当前屏幕上的数字和本次的操作符存储到变量
          if(obj.data.storage==0&&(obj.data.operator=='*'||obj.data.operator=="/"||obj.data.operator=="=")){   //考虑被乘数和被除数为0的情况
            this.setData({screenNum:0}); break;
        }else{

          if (obj.data.storage == 0) {
            obj.data.storage = obj.data.currentNum-'0';
            obj.data.operator = btn_num;

           
          } else {
            if (obj.data.off != true) {
             
              if (obj.data.operator == '+') {
                obj.data.currentNum = Number(obj.data.storage) + Number(obj.data.currentNum)
              } else if (obj.data.operator == '-') {
                obj.data.currentNum = Number(obj.data.storage) - Number(obj.data.currentNum)
              } else if (obj.data.operator == '*') {
                obj.data.currentNum = Number(obj.data.storage) * Number(obj.data.currentNum)
              } else if (obj.data.operator == '/') {
                obj.data.currentNum = Number(obj.data.storage) / Number(obj.data.currentNum)
              }
            }
            obj.data.storage = obj.data.currentNum;
            obj.data.operator = btn_num;
          }
        }

          obj.data.off = true;
          break;
        case 'clear':
          obj.data.storage = 0;
          obj.data.currentNum = '0';
          obj.data.operator = '';
          break;
        case 'back':
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
  }
})
