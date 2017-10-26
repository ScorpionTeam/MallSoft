// pages/ticket/ticket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticketList:[
      {
        money:120,
        range:"仅可购买自营键鼠、游戏设备分类制定商品",
        least:1000,
        type:"全平台",
        timeRange:"2017.11.1-2017.11.10"
      },
      {
        money: 1000,
        range: "仅可购买自营键鼠、游戏设备分类制定商品",
        least: 5000,
        type: "全平台",
        timeRange: "2017.11.1-2017.11.10"
      },
      {
        money: 500,
        range: "仅可购买自营键鼠、游戏设备分类制定商品",
        least: 2000,
        type: "全平台",
        timeRange: "2017.11.1-2017.11.10"
      }
    ],//卡券列表

  },
  /**
   * 初始化
   */
  init(){
    // 根据用户id获取卡券列表
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