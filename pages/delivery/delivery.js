// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deliveryList: [
      {
        id: 1,
        name: "你好",
        mobile: "15757135983",
        address: "中国武林路346号"
      },
      {
        id: 2,
        name: "你好",
        mobile: "15757135983",
        address: "中国武林路346号"
      },
      {
        id: 3,
        name: "你好",
        mobile: "15757135983",
        address: "中国武林路346号"
      },
    ],
    selectId:0
  },
  /**
   * input输入
   */
  getData(val) {
    let obj = {};
    let n = val.target.dataset.name;
    obj[n] = val.detail.value;
    this.setData(obj);
  },
  /**
   * 
   */
  select(val) {
    this.setData({
      selectId:val.currentTarget.dataset.index
    })
  },
  /**
   * 跳转
   */
  skipPage(val){
    let url = val.currentTarget.dataset.url
    wx.navigateTo({
      url: url,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})