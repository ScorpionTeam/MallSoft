
var Zan = require('../../component/zanui-weapp/dist/index');
// pages/wallet/wallet.js
Page(Object.assign({}, Zan.NoticeBar, {
  data: {
    movable: {
      text: '充值返现，充100返10 充300返回30 充500返100，多充多送。优惠多多，返现多多。'
    }
  },
  onShow() {
    // 滚动通告栏需要initScroll
    this.initZanNoticeBarScroll('movable');
  }
}),{

  /**
   * 页面的初始数据
   */
  data: {
  
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