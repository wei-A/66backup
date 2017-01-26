// pages/personal/address/address.js
Page({
  data:{
    borderSrc: "../../../resources/border.png",
    address:[]
  },
  bindAddAddressTap:function(){
    wx.redirectTo({
      url: 'addressFill/addressFill'
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    wx.getStorage({
      key: "userInfo",
      success: function(res) {
        console.log(res.data)
        that.setData({
          address:res.data
        })
      }
    })
  },
  bindDefaultTap: function(e){
    var thisId = e.currentTarget.dataset.id;
    var thisData = this.data.address;
    for(var i = 0;i < thisData.length;i++){
      thisData[i].userAddressDefault = false;
    }
    thisData[thisId].userAddressDefault = true;
    this.setData({
        address:thisData
    });
      wx.setStorageSync('userInfo', thisData);
  },
  bindDeleteTap: function(e){
    var thisId = e.currentTarget.dataset.id;
    var thisData = this.data.address;
    console.log(thisData)
    thisData.splice(thisId,1)
    this.setData({
        address:thisData
    });
    console.log(thisData)
    wx.setStorageSync('userInfo', thisData);
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
  }
})