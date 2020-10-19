var a,b,c,d =0
const ctx = wx.createCanvasContext('canvas')
var pickedID = 0

//像素x转化为坐标x
let pointxArr = [] 
for(let x=20;x<355;x++){
  let pointX = (x-375/2)/20;
  pointxArr.push(pointX);
}
let yArr = []

//点的坐标
var addX,addY=0;

//画坐标轴
function drawXY(){
  ctx.setStrokeStyle('black')
  ctx.moveTo(375/2, 20)
  ctx.lineTo(375/2, 420)
  ctx.stroke()

  ctx.setStrokeStyle('black')
  ctx.moveTo(20, 220)
  ctx.lineTo(355, 220)
  ctx.stroke()

  //画刻度
  //x轴刻度
  for(let i=-8;i<=8;i++){
    let tmp=375/2+i*20
    ctx.moveTo(tmp, 220)
    ctx.lineTo(tmp, 217)
    ctx.stroke()
    if(i==0){
      ctx.setTextAlign('left')
      ctx.fillText(i, tmp,230)
    }else{
      ctx.setTextAlign('center')
      ctx.fillText(i, tmp,230)
    }
    
  }
  //y轴刻度
  for(let i=-9;i<=9;i++){
    let tmp=220-i*20
    ctx.moveTo(375/2,tmp)
    ctx.lineTo(375/2+3,tmp)
    ctx.stroke()
    if(i!=0){
      ctx.fillText(i,375/2-7,tmp)
    }
  }
  //画箭头
  ctx.moveTo(375/2-3,23)
  ctx.lineTo(375/2,20)
  ctx.lineTo(375/2+3,23)
  ctx.fillText('y',375/2+5,20)
  ctx.stroke()
  
  ctx.moveTo(352,223)
  ctx.lineTo(355,220)
  ctx.lineTo(352,217)
  ctx.fillText('x',355,215)
  ctx.stroke()

  ctx.draw()
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //可选择的函数类型
    array: ['y=a*x^b+c', 'y=a^x+b', 'y=log(a*x+b)+c', 'y=sin(a*x+b)+c'],
    objectArray: [
      {
        id: 0,
        name: 'y=a*x^b+c'
      },
      {
        id: 1,
        name: 'y=a^x+b'
      },
      {
        id: 2,
        name: 'y=log(a*x+b)+c'
      },
      {
        id: 3,
        name: 'y=sin(a*x+b)+c'
      }
    ],
  },


  //选择框
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index:e.detail.value
    })
    pickedID = e.detail.value
  },

  //判断是否为数字
  isNum(num) {
    return num >= '0' && num <= '9'
  },

  //接收参数值并转换为数字形式
  bindInput:function(e){
    let number = e.detail.value
    let parameterArr =[] 
    let tmp = '' 
    this.setData({
      content:e.detail.value
    })
    for (let i = 0;i<number.length;i++){
      if(this.isNum(number[i])||number[i]=='-'){
        tmp = tmp+number[i];
      }
      else if(number[i]==' '){
        parameterArr.push(tmp);
        tmp = '';
      }
    }
    a = parseFloat(parameterArr[0])
    b = parseFloat(parameterArr[1])
    c = parseFloat(parameterArr[2])
    console.log(parameterArr)
    parameterArr.splice(0,parameterArr.length) //清除参数值数组
  },

  //清除输入框
  clearPara:function(){
    this.setData({
      content:'',
      pointvalue:''    
    })
  },
  
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function(e){
    //初始状态，绘制坐标轴
    drawXY()
  },
  
  //清除屏幕
  clearAll:function(e){
    ctx.clearRect;
    drawXY();
  },
   
  //画图
  drawLine:function(e){
   switch (pickedID) { //跳转到相应函数
     case '0':
    {
       for(let i=0;i<335;i++){
        let pointY=a*Math.pow(pointxArr[i],b)+c;
        let y = 220 - 20*pointY;
        yArr.push(y);
      }
    }
     break;

     case '1':
        for(let i=0;i<335;i++){
        let pointY=Math.pow(a,pointxArr[i])+b;
        let y = 220 - 20*pointY;
        yArr.push(y);
        }
     break;

     case '2': {
      for(let i=0;i<335;i++){
        let pointXno = a*pointxArr[i]+b;
        if(pointXno<=0){
          yArr.push(440);
        }else{
        let pointY= Math.log(pointXno)+c;
        let y = 220 - 20*pointY;
        yArr.push(y);
        }
      }
    }
       break;

      case '3':
        for(let i=0;i<335;i++){
          let pointY= Math.sin(a*pointxArr[i]+b)+c;
          let y = 220 - 20*pointY;
          yArr.push(y);
        }
      break;
    
   }
   
   ctx.moveTo(20,yArr[0])
   for(let i=1;i<335;i++){
    if(yArr[i]>20&&yArr[i]<420){
      ctx.lineTo(i+20,yArr[i]);
      ctx.stroke();
    }else{
      ctx.moveTo(i+20,yArr[i]);
    }
   }
   ctx.draw(true)

   yArr.splice(0,yArr.length)
  },

  //接收点
  bindInputPoint:function(e){
    this.setData({
     pointvalue:e.detail.value
    })
    let tmp = '';
    let point = e.detail.value;
    let pointArr = [];
    for (let i = 0;i<point.length;i++){
      if(this.isNum(point[i])||point[i]=='-'){
        tmp = tmp+point[i];
      }
      else if(point[i]==' '){
        pointArr.push(tmp);
        tmp = '';
      }
    }
    console.log(pointArr)
    addX= parseFloat(pointArr[0])
    addY= parseFloat(pointArr[1])
    pointArr.splice(0,pointArr.length);
  
  },

  //画点
  drawPoint:function(){
    
    let pointX=20*addX+375/2;
    let pointY=220 - 20*addY;
    ctx.arc(pointX,pointY,1,0,2*Math.PI,false);
    let text = '('+addX+','+addY+')';
    ctx.fillText(text,pointX+10,pointY+10);
    ctx.strokeStyle = 'rgba(255,0,0,0.5)'
    ctx.stroke();

    ctx.draw(true);

  }
})