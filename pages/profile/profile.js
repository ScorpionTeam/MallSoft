const app = getApp()
var Zan = require('../../component/zanui-weapp/dist/index')
// pages/my/my.js
Page(Object.assign({},Zan.Toast,{

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:{}
  },
  /**
   * 页面跳转
   */
  pageSkip(val){
    let url = val.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },
  showToast(){
    this.showZanToast('toast的内容')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo:app.globalData.userInfo
    })
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
}))