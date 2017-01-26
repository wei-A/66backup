//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userSetImage:"../../resources/set.png",
    userLevel:"M0",
    userAssets:"0妙钻",
    userCoupons:"7张优惠券",
    userPayment: 0,
    userGoods: 0,
    userCollection:0
  },
  bindMoreTap: function(){
    wx.navigateTo({
      url: 'more/more'
    })
  },
  bindLevelTap: function(){
    wx.navigateTo({
      url: 'level/level'
    })
  },
  bindAssetsTap: function(){
    wx.navigateTo({
      url: 'assets/assets'
    })
  },
  bindCouponsTap: function(){
    wx.navigateTo({
      url: 'coupons/coupons'
    })
  },
  bindOrderTap: function(){
    wx.navigateTo({
      url: 'order/order'
    })
  },
  bindPaymentTap: function(){
    wx.navigateTo({
      url: 'payment/payment'
    })
  },
  bindDeliveryTap: function(){
    wx.navigateTo({
      url: 'delivery/delivery'
    })
  },
  bindCollectionTap: function(){
    wx.navigateTo({
      url: 'collection/collection'
    })
  },
  bindHistoryTap: function(){
    wx.navigateTo({
      url: 'history/history'
    })
  },
  bindAddressTap: function(){
    wx.navigateTo({
      url: 'address/address'
    })
  },
  bindcallingTap: function(){
    wx.makePhoneCall({
      phoneNumber:"123"
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
