
Page({
  data:{
        Array: [{
              src: "../../../resources/flow.jpg",
              text: "励志loz积木大小颗粒拼装网具塑料智力益智",
              price: "￥98.00",
              id:0
            }, {
              src: "../../../resources/flow2.jpg",
              text: "励志loz积木大小颗粒拼装网具塑料智力益智",
              price: "￥98.00",
              id:1
            }, {
              src: "../../../resources/flow3.jpg",
              text: "励志loz积木大小颗粒拼装网具塑料智力益智",
              price: "￥98.00",
              id:2
            }],
  },
  goodsDetailTap:function(){
    wx.navigateTo({
      url:"../goodsDetail/goodsDetail"
    })
  },
  onLoad:function(options){
    console.log(options);
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