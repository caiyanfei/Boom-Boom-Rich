//和牌和听牌算法有参照
//https://blog.csdn.net/weixin_36381867/article/details/72579554?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.edu_weight&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.edu_weight
var paizu=["一万","二万","三万","四万","五万","六万","七万","八万","九万"
      ,"一条","二条","三条","四条","五条","六条","七条","八条","九条",
      "一筒","二筒","三筒","四筒","五筒","六筒","七筒","八筒","九筒",
      "东风","西风","南风","北风","红中","白板","发财"]
Page({
  data:{
    arr:[],
    handgroup:[],
    handgroupName:[],
    content:[],
    tingarr:[]
  },

  //接收数据
  click:function(e){
    let tmp=parseInt(e.currentTarget.dataset.con)
    this.data.handgroup.push(tmp)
    this.data.handgroupName.push(paizu[tmp])
    this.setData({
      content:this.data.handgroupName
    }) 
  },


  //点击确认听牌按钮
  clickTestTing:function(){
    let copyArr =sortGroup(this.data.handgroup);
    let tingarr =CanTingPai(copyArr);
    let TingarrName=[]
    if(tingarr.length>0){
      for(let i=0;i<tingarr.length;++i){
        TingarrName.push(paizu[tingarr[i]])
      }
      this.setData({
        tingarrName:TingarrName,
        result:"可以听牌"
      })
    }else{
      this.setData({
        result:"不能听牌"
      })
    }
  },

  clickTestHu:function(){
    let arr = sortGroup(this.data.handgroup)
    let copyArr = arr;
    if(this.data.handgroup.length%3!=2){
      this.setData({
        result:"不能和牌"
      })
    }
    if(CanHuPai(copyArr)){
      this.setData({
        result:"可以和牌"
      })
    }else{
      this.setData({
        result:"不能和牌"
      })
    }
  },

  //点击后退按钮
  clickBack:function(){
    this.data.handgroup.splice(this.data.handgroup.length-1,1)
    this.data.handgroupName.splice(this.data.handgroupName.length-1,1)
    this.setData({
      content:this.data.handgroupName
    })
  },

  //点击清除按钮
  clickClearAll:function(){
    this.setData({
      handgroup:[],
      handgroupName:[],
      content:[],
      tingarrName:[],
      result:''
    })
  }
})

  //整理成牌组
  function sortGroup(handgroup){
    var arr = new Array(34);
    for(let index=0;index<34;++index){
      arr[index]=0
    }
    for(let i = 0;i<handgroup.length;++i){
      let element = handgroup[i];
      arr[element]++;
    }  
    return arr;
  }

//判断是否可以听
function CanTingPai(originalarr){
  let arr = originalarr.concat();
  var ret=false;
  var result=false;
  let TingArr=[];
  for(var i = 0; i < 34; ++i){
      arr[i]++;
      ret = CanHuPai(arr);
      arr[i]--;
      if(ret){
          result=true;
          TingArr.push(i);
       }
  }
 return TingArr;
}

//判断是否可以和，普通以及七对
function CanHuPai(arr){
  if(CanHuPai__7pair(arr)){
    return true;
  }else if(CanHuPai_norm(arr)){
    return true;
  }else{
    console.log(arr);
    return false;
  }   
}

//判断是否为七对
function CanHuPai__7pair(arr){
  var pairCount=0;
  for(var k in arr) {
      var c = arr[k];
      if (c == 2) {
          pairCount++;
      }else if (c == 4) {
          pairCount += 2;
      }else if( c != 0){   //当c不满足0,2,4情况即有单张出现，直接返回false
          return false;
      }
    }
  if(pairCount==7){
      return true;
    }else{
      return false;
    }
}     

//普通和牌
function CanHuPai_norm(arr){
  let tmp = arr.concat();
  let i = 0;
  for(i=0;i<34;++i){
    if(tmp[i]<2){
       continue;
    }
    tmp[i]-=2;//取将
       if(checkAll(tmp)){
        return true;
      }
     tmp[i]+=2;
    }  
    if (i ==34)
      return false
}

//判断是否为普通和牌
//一种颜色的情况下
function checkSimple(arr,length){//此处的arr与计算的arr数组不同，要注意
  let copyarr=arr.concat();
  for(let i=0;i<length;++i){ 
    if(copyarr[i]==0){
     continue;
    }else if(copyarr[i]== 1 || copyarr[i] == 2 || copyarr[i] == 4){
      if(i>length-2){
        return false;
      }else if(copyarr[i+1] == 0 || copyarr[i+2] == 0){
        return false;//后两个字没有牌了
      }
      //其后至少还有两个连续的字
      copyarr[i]--;
      copyarr[i+1]--;
      copyarr[i+2]--;
    }else if (copyarr[i]==3){
      copyarr[i]-=3;//刻子可以和
    }else{
      return false;
    }
  }
  let count=0;
  for(let i=0;i<length;++i){
    count=count+copyarr[i];//将所有可以和牌的类型全部删除后相加
    console.log(count)
  }
  if(count==0)
    return true;
}

//检查所有颜色
function checkAll(originalarr){
  let arr=originalarr.concat()
  let tmp = []
  //条、筒、万
  for(let i=0;i<3;++i){
    for(let j=0;j<9;++j){
      tmp.push(arr[i*9+j])
    }
    if(!checkSimple(tmp,9)){
      return false
    }
    tmp =[]
  }
//风、箭
  for(let i = 27;i<34;++i){
    if(arr[i]==0){
      continue;
    }else if(arr[i]!=3){
      return false
    }
  }
  return true
}

