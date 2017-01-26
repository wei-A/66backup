// pages/cart/cart.js
Page({
 data: {
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ],
    count:1
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
  goPayment:function(){
    wx.navigateTo({
      url:'payment/payment'
    })
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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