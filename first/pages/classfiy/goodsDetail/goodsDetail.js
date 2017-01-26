// pages/classfiy/goodsDetail/goodsDetail.js
Page({
  data:{
    price:98,
    goodsChoose:false,
    count:1,
    classfiy:"abc"
  },
  onLoad:function(options){
    var that = this;
    var classfiy = options.classfiy;
    var id = options.id;
    console.log(classfiy);
    this.setData({
      classfiy:classfiy
    })
    wx.getStorage({
      key: 'key',
      success: function(res) {
           console.log(res.data);
           that.setData({
              goodsData:res.data[classfiy][id]
            })
          console.log(that.data.goodsData)
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  goIndex:function(){
    wx.switchTab({
      url:'../../index/index'
    })
  },
  goCart:function(){
    wx.switchTab({
      url:'../../cart/cart'
    })
  },
  confirm:function(){
    var dis = this.data.goodsChoose;
    dis = !dis;
    this.setData({
      goodsChoose:dis
    })
    console.log(dis);
  },
  minus:function(){
    var count = this.data.count;
    if(count > 1){
      count--;
    }
    else{
          wx.showModal({
            title: '提示',
            content: '数量不能少于1个'
          })      
    }
    this.setData({
      count:count
    })
  },
  plus:function(){
    var count = this.data.count;
    count++;
    this.setData({
      count:count
    })
  },
  mengHide:function(){
    var dis = this.data.goodsChoose;
    dis = !dis;
    this.setData({
      goodsChoose:dis
    })    
  },
  getHeart:function(event){
    var that = this;
    var thisId = event.target.dataset.id;
    console.log(thisId);
    var thisData = this.data.goodsData;
    var heart = thisData.heart;
    heart = !heart;
    thisData.heart = heart;
    this.setData({
      goodsData: thisData
    })
    wx.getStorage({
      key: 'key',
      success: function(res) {
        var tempData = res.data;
        tempData[that.data.classfiy][thisId].heart = heart;
        wx.setStorage({
          key:"key",
          data:tempData
        })
      }
    })
  }
})