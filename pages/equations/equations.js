// pages/equation/equation.js
  let parameterArr=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    r:0,
    p:0,  
    x1:'',
    x2:'',
    x:'',
    y:''

  },

  isNum(num) {
    return num >= '0' && num <= '9'
  },

  //输入
  bindInput:function(e){
    this.setData({
      content:e.detail.value
    })
  },

  //转化为数字形式
  stringToNum(str){
    let tmp=''
    for (let i = 0;i<str.length;i++){
      if(this.isNum(str[i])||str[i]=='-'||str[i]=='.'){
        tmp = tmp+str[i];
      }
      else if(str[i]==' '){
        parameterArr.push(parseFloat(tmp));
        tmp = '';
      }
    }
    console.log(parameterArr)
  },

  //清除输入
  clearPara:function(){
    this.setData({
      content:'',
      x1:'',
      x2:'',
      x:'',
      y:'' 
    })   
    parameterArr.splice(0,parameterArr.length) 
  },

  //点击按钮
  //解一元二次方程，包含复数形式
  solveEquation:function(){
    this.stringToNum(this.data.content);
    if(parameterArr.length<4)
    {
      this.setData({
        x1:"参数不足",
        x2:"参数不足"
      })
    }else{
      let a = parameterArr[0];
      let b = parameterArr[1];
      let c = parameterArr[2]-parameterArr[3];
      let delta = Math.pow(b,2)-4*a*c;
      let r,p=0;

      if(delta>=0){
        r=(-b)/(2*a);
        p=Math.sqrt(delta)/(2*a);  
        this.setData({
          x1:(r+p).toFixed(2),
          x2:(r-p).toFixed(2)
        })
      }else{
        r=(-b)/(2*a);
        p=Math.sqrt(-delta)/(2*a);
        this.setData({
          x1:r.toFixed(2)+'+'+p.toFixed(2)+'i',
          x2:r.toFixed(2)+'-'+p.toFixed(2)+'i',
        })
      }
    }
    parameterArr.splice(0,parameterArr.length) 
  },
  
  //解二元一次方程组
  solveEquations:function(){
    this.stringToNum(this.data.content);
    console.log(parameterArr)
    if(parameterArr.length<6){
      this.setData({
        x:"参数不足",
        y:"参数不足"
      })
    }else{
      let a1 = parameterArr[0];
      let b1 = parameterArr[1];
      let c1 = parameterArr[2];
      let a2 = parameterArr[3];
      let b2 = parameterArr[4];
      let c2 = parameterArr[5];
      var e = a1 * b2 - a2 * b1;
      if(e==0){
          this.setData({
            x:"无穷多解",
            y:"无穷多解"
          })
      }else{
          var Y = a1 * c2 - a2 * c1;
          var X = b2 * c1 - b1 * c2;
          this.setData({
            x:X/e,
            y:Y/e
          })
      }
    }
    parameterArr.splice(0,parameterArr.length) 
  }
})

