//index.js
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    // 
    uimgUrls: [
      { img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', u: "u uone", url:"../avatarUpload/index/index"},
      { img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', u: "u utwo", url: "../avatarUpload/second/second"}
    ],
  },
  onLoad: function () {
    //设置全局变量    
    // app.globalData.imgArr = this.data.uimgUrls;
  },
  getIndex: function (option) {
    wx.navigateTo({
      url: option.currentTarget.dataset.url +'?index=' + option.currentTarget.dataset.i,
    })
  }
 

})