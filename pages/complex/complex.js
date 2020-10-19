// pages/equation/equation.js
var element=[]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    id1:'+',
    id2:'-',
    id3:'*',
    id4:'/',
     
    inputData:{
    realPart1:'',
    imaginaryPart1:'',
    realPart2:'',
    imaginaryPart2:''
    },

    realPart3:'',
    imaginaryPart3:'',

    pickedID:''
  },

  //输入
  bindInput:function(e){
    let item = e.currentTarget.dataset.model;
    let tmp = e.detail.value;
    this.data.inputData[item] = parseFloat(tmp);
    console.log(tmp)
    this.setData({
      inputData:this.data.inputData
    });
  },


  //清除输入
  clearAll:function(){
    this.setData({      
      inputData:[],
      content:''
    })
  },

  //点击按钮
  bindClick:function(e){
    let pickedID=e.currentTarget.dataset.text
    console.log(pickedID)
    let real,imaginary=0;
    switch (pickedID) {
      case '+':
        real      = this.data.inputData.realPart1+this.data.inputData.realPart2;
        imaginary = this.data.inputData.imaginaryPart1+this.data.inputData.imaginaryPart2;
        break;
      case '-':
        real      = this.data.inputData.realPart1-this.data.inputData.realPart2;
        imaginary = this.data.inputData.imaginaryPart1-this.data.inputData.imaginaryPart2;
      break;

      case '*':
        real      = this.data.inputData.realPart1*this.data.inputData.realPart2-this.data.inputData.imaginaryPart1*this.data.inputData.imaginaryPart2;
        imaginary = this.data.inputData.realPart1*this.data.inputData.imaginaryPart2+this.data.inputData.realPart2*this.data.inputData.imaginaryPart1;
      break;

      case '/':
        let divisor= Math.pow(this.data.inputData.realPart1,2)+Math.pow(this.data.inputData.imaginaryPart1);
        real     = (this.data.inputData.realPart1*this.data.inputData.realPart2-this.data.inputData.imaginaryPart1*this.data.inputData.imaginaryPart2)/divisor;
        imaginary = (this.data.inputData.realPart1*this.data.inputData.imaginaryPart2+this.data.inputData.realPart2*this.data.inputData.imaginaryPart1)/divisor;
      break;
    }

    if(imaginary<0){
      this.setData({
        content:real.toFixed(2)+imaginary.toFixed(2)+'i'
      })
    }else{
      this.setData({
        content:real.toFixed(2)+'+'+imaginary.toFixed(2)+'i'
      })
    }
    
  }
})