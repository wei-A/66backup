// pages/personal/order/order.js
Page({
  data:{
    commodityList:[{
      orderNum: "14999752",
      orderTime: "1/18/2017"+","+"10:02:16 AM",
      orderSrc: "../../../resources/logo.png",
      orderName: "【预售】海尔空气净化器|家用车载两用",
      orderAmount: "1"+"件",
      orderValue: "299.00",
      totalPrice:"299.00"
    }]
  },
  bindPaymentTap: function(){
    wx.redirectTo({
      url: "../payment/payment"
    })
  },
  bindDeliveryTap: function(){
    wx.redirectTo({
      url: "../delivery/delivery"
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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