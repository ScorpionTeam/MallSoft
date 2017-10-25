// pages/order/order.js

var Zan = require('../../component/zanui-weapp/dist/index');

Page({
  data: {
    tab1: {
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
      scroll: false
    },
    tab2: {
      list: [{
        id: '1',
        title: '最新商品1'
      }, {
        id: '2',
        title: '最新商品2'
      }, {
        id: '3',
        title: '最新商品3'
      }, {
        id: '4',
        title: '最新商品4'
      }, {
        id: '5',
        title: '最新商品5'
      }, {
        id: '6',
        title: '最新商品6'
      }],
      selectedId: '1',
      scroll: true,
      height: 45
    },
    tab3: {
      list: [{
        id: '1',
        title: '商品1'
      }, {
        id: '2',
        title: '商品2'
      }, {
        id: '3',
        title: '商品3'
      }, {
        id: '4',
        title: '商品4'
      }, {
        id: '5',
        title: '商品5'
      }, {
        id: '6',
        title: '商品6'
      }],
      selectedId: '1',
      scroll: true,
      height: 45
    }
  },

  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    console.log('sit')
    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }
},{
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