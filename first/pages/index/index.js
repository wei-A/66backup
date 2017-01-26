var Data = require('../../data/data.js');
//获取应用实例
Page({
  data: {
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  onLoad: function () {
    var  that = this;
    wx.getStorage({
      key: 'key',
      success: function(res) {
           var appData = res.data;
           that.setData({
              appData:appData
            })
      },
      fail:function(){
          wx.setStorage({
            key:"key",
            data:Data
          }),
          that.setData({
            appData:Data
          })
      }
    })
  console.log(this.data);
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  scrollClassfiyTap: function (event) {
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../classfiy/goodsList/goodsList?id=' + id
    })
  },
  goodsDetailTap: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../classfiy/goodsDetail/goodsDetail?classfiy=goodsListData&id=' + id
    })
  },
  goodsDetailTapB: function (event) {
    console.log(111);
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../classfiy/goodsDetail/goodsDetail?classfiy=tabData&id=' + id
    })
  },
  getHeart: function (event) {
    var thisId = event.target.dataset.id;
    console.log(thisId);
    var thisData = this.data.appData;
    var heart = thisData.goodsListData[thisId].heart;
    heart = !heart;
    thisData.goodsListData[thisId].heart = heart;
    this.setData({
      appData: thisData
    })
    wx.setStorage({
      key:"key",
      data:thisData
    })
    console.log(heart);
  }

})
