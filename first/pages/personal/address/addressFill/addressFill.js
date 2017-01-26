// pages/personal/address/addressFill/addressFill.js
var Data = require('../../../../data/ChineseCities.js');
Page({
  data: {
    "province": "省",
    "city": "市",
    "area": "区",
    "pickerSrc": "../../../../resources/right_arrow.png",
    "provinceFlag": false,
    "provinceIndex": 0,
    "provinceArray": [],
    "cityFlag": false,
    "cityIndex": 0,
    "cityArray": [],
    "cityDisabled": true,
    "areaFlag": false,
    "areaIndex": 0,
    "areaArray": [],
    "areaDisabled": true,
  },
  onLoad: function () {
    var provinceArray = []
    for (var i = 0; i < Data.ChineseCities.length; i++) {
      provinceArray.push(Data.ChineseCities[i].name);
    }
    this.setData({
      provinceArray: provinceArray,
    });
  },
  bindProvinceChange: function (e) {
    var cityArray = []
    for (var i = 0; i < Data.ChineseCities[e.detail.value].city.length; i++) {
      cityArray.push(Data.ChineseCities[e.detail.value].city[i].name);
    }
    this.setData({
      provinceIndex: e.detail.value,
      provinceFlag: true,
      cityArray: cityArray,
      cityFlag: false,
      areaFlag: false,
      cityDisabled: false,
      areaDisabled: true
    })
  },
  bindCityChange: function (e) {
    var areaArray = Data.ChineseCities[this.data.provinceIndex].city[e.detail.value].area
    this.setData({
      cityIndex: e.detail.value,
      cityFlag: true,
      areaArray: areaArray,
      areaFlag: false,
      areaDisabled: false
    })
  },
  bindAreaChange: function (e) {
    this.setData({
      areaIndex: e.detail.value,
      areaFlag: true
    })
  },
  formSubmit: function (e) {
    var userName = e.detail.value.userName;
    var userNumber = e.detail.value.userNumber;
    var province = this.data.provinceArray[e.detail.value.province];
    var city = this.data.cityArray[e.detail.value.city];
    var area = this.data.areaArray[e.detail.value.area];
    var detailedAddress = e.detail.value.detailedAddress;
    var userAddress = province + city + area + detailedAddress;
    var res = /^1\d{10}$/
    if (userName == "") {
      wx.showModal({
        title: '提示',
        showCancel: false,
        confirmColor: "#ffa500",
        content: '请输入收货人名字'
      })
      }else if (!res.test(userNumber)||userNumber == "") {
        wx.showModal({
          title: '提示',
          showCancel: false,
          confirmColor: "#ffa500",
          content: '请输入正确的手机号码'
        })
    } else if (province == undefined) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        confirmColor: "#ffa500",
        content: '请选择省份'
      })
    } else if (city == undefined) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        confirmColor: "#ffa500",
        content: '请选择城市'
      })
    } else if (area == undefined) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        confirmColor: "#ffa500",
        content: '请选择区'
      })
    } else if (detailedAddress == "") {
      wx.showModal({
        title: '提示',
        showCancel: false,
        confirmColor: "#ffa500",
        content: '输入收货人详细地址'
      })
    } else {
      wx.redirectTo({
        url: "../address?userinfo=userinfo&userName=" + userName + "&userNumber=" + userNumber + "&userAddress=" + userAddress
      });
      var addressArr = [];
      var userInfo = {
        userName: userName,
        userNumber: userNumber,
        userAddress: userAddress,
        userAddressDefault:false
      }
      addressArr.push(userInfo);
      var userInfo1 = {}
      var temp = wx.getStorageSync('userInfo');
          for (var i = 0; i < temp.length; i++) {
            userInfo1 = {
              userName: temp[i].userName,
              userNumber: temp[i].userNumber,
              userAddress: temp[i].userAddress,
              userAddressDefault: temp[i].userAddressDefault
            }
            addressArr.push(userInfo1);
          }
      wx.setStorageSync('userInfo', addressArr);
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})