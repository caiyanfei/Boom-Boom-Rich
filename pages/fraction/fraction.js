//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    TabCur: 0,
    scrollLeft:0,
    screenNum:'',
    num1z:'',
    num1m:'',
    num2z:'',
    num2m:'',
    resultz:'',
    resultm:'',
    operator: '',//运算符
    storage:'',
    off: false,
    num1:false,
    num2:false,
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

    if(btn_num!='='){
      obj.data.screenNum+=btn_num;
    }else{
      if(!isNaN(btn_num)){
        obj.data.storage+=btn_num;
      }
      switch(btn_num){
        case '/':{
          if(num1==false){
            obj.data.num1z=obj.data.storage;
          }else{
            obj.data.num2z=obj.data.storage;
          }
          break;
        }
        case '+':
        case '-':
        case '*':
        case "/":
          {
          obj.data.num1m=obj.data.storage;
          obj.data.num1=true;
          obj.data.operator=btn_num;
          break;
        }
        case '=':
          {
            obj.data.num2m=obj.data.storage;
            if (obj.data.operator == '+') {
              obj.data.resultz = Number(obj.data.num1z) * Number(obj.data.num2m)+Number(obj.data.num1m) * Number(obj.data.num2z);
              obj.data.resultm = Number(obj.data.num1m) * Number(obj.data.num2m);
            } else if (obj.data.operator == '-') {
              obj.data.resultz = Number(obj.data.num1z) * Number(obj.data.num2m)-Number(obj.data.num1m) * Number(obj.data.num2z);
              obj.data.resultm = Number(obj.data.num1m) * Number(obj.data.num2m);
            } else if (obj.data.operator == '*') {
              obj.data.resultz = Number(obj.data.num1z) * Number(obj.data.num2z);
              obj.data.resultm = Number(obj.data.num1m) * Number(obj.data.num2m);
            } else if (obj.data.operator == '/') {
              obj.data.resultz = Number(obj.data.num1z) * Number(obj.data.num2m);
              obj.data.resultm = Number(obj.data.num1m) * Number(obj.data.num2z);
            }
            obj.data.off=true;
            break;
          }
      }
    this.setData({screenNum:obj.screenNum});

    }
  
  }
   
})
