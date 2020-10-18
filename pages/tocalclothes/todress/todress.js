
Page({

  data: {
    weight:0,   //体重
    height:0,   //身高
    size:'',   //尺码
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
//获取用户身高体重
  getheight:function(e){
    this.setData({height:e.detail.value})
  },
  getweight:function(e){
    this.setData({weight:e.detail.value})
  },
//计算尺码
  calsize:function(e){      //根据身高分出衣服size
    if(this.data.height<=150||this.data.height>=200||this.data.weight<=40||this.data.weight>=90){     //用户输入异常值时处理 
      this.setData({size:"您的身材过好不在正常范围内噢，请重新输入", european:"",american:""})
    }else{//正常输入时根据身高划分尺码
      if(this.data.height<=160){
        this.setData({size:'XS' , european:"34",american:"2"});            
      }
      if(this.data.height<=165&&this.data.height>160){
        this.setData({size:'S', european:"34-36",american:"4-6"});     
      }
      if(this.data.height<=170&&this.data.height>165){
        this.setData({size:'M',european:"38-40",american:"8-10"});     
      }
      if(this.data.height<=175&&this.data.height>170){
        this.setData({size:'L',european:"42",american:"12-14"});   
      }
      if(this.data.height>175){
        this.setData({size:'XL',european:"44",american:"16-18"});
      }
    }
  }
})