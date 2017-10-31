// pages/order/order.js
var Zan = require('../../component/zanui-weapp/dist/tab/index');

Page(Object.assign({}, Zan, {
  data: {
    tab: {
      list: [{
        id: 'all',
        title: '全部'
      }, {
        id: 'topay',
        title: '待付款'
      }, {
        id: 'tosend',
        title: '待发货'
      }, {
        id: 'send',
        title: '待收货'
      }, {
        id: 'sign',
        title: '已完成'
      }],
      selectedId: 'all',
      scroll: false,
      fixed:true
    },
    selectType:''//当前目录
  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    //控制选中样式
    this.setData({
      [componentId+`.selectedId`]: selectedId
    });
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
}))