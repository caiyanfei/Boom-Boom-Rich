// pages/tocalclothes/totrouses/totrouses.js

Page({
  data: {
    weight:0,
    height:0,
    size:'',
    american:"",
    european:"",
  },
  //根据用户输入偏大偏小改变尺码
  change(e){
    this.setData({height:0})   //恢复正常值
    if(e.target.dataset.val=='0'){
      this.setData({height:this.data.height+5})
    }
    if(e.target.dataset.val=='2'){
      this.setData({height:this.data.height-5})
    }  
  },
//模态框展示与关闭
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
//获取用户输入
  getheight:function(e){
    this.setData({height:e.detail.value})
  },
  getweight:function(e){
    this.setData({weight:e.detail.value})
  },
  //计算size
  calsize:function(e){
    if(this.data.height<=150||this.data.height>=200||this.data.weight<=40||this.data.weight>=90){      //用户输入异常值时处理
      this.setData({size:"您的身材过好不在正常范围内噢，请重新输入", european:"",american:""})
    }else{           //正常输入时根据身高划分尺码
    if(this.data.height<=160){
      this.setData({size:'XS' , european:"24",american:"2"});            
    }
    if(this.data.height<=165&&this.data.height>160){
      this.setData({size:'S', european:"25-26",american:"4-6"});     
    }
    if(this.data.height<=170&&this.data.height>165){
      this.setData({size:'M',european:"27-28",american:"8-10"});     
    }
    if(this.data.height<=175&&this.data.height>170){
      this.setData({size:'L',european:"29-30",american:"12-14"});   
    }
    if(this.data.height>175){
      this.setData({size:'XL',european:"31-32",american:"16-18"});
    }
  }
  }
})