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
      fixed: true
    },
    goods: [],
    selectType: '',//当前目录
    goodsTest: '',
  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    //控制选中样式
    this.setData({
      [componentId + `.selectedId`]: selectedId
    });
    this.getDataFromNet(selectedId)
  },
  /**
   * 去付款
   */
  goodsAction(e) {
    var dataItem = e.currentTarget.dataset;
    console.log(dataItem.item)
    if (dataItem.item.buttonTitle == "去付款") {
      // let goodsId = dataItem.item.goodId
      let goodsId = e.currentTarget.id
      wx.navigateTo({
        url: '/pages/pay/pay?id='+goodsId,
      })
    }
  },
  getDataFromNet(id) {
    this.setData({
      goods: [
        {
          goodId: "2030",
          goodsImg: "https://img10.360buyimg.com/n5/jfs/t3394/97/927974603/289198/faa13081/5816f2e5Nab3d62be.jpg",
          goodsStr: "清风(APP)抽纸 原木纯品金装系列3层130抽*16包纸巾(整箱销售)",
          goodsSttus: "已完成",
          price: "40",
          buttonTitle: "再次购买"
        }, {
          goodId: "2031",
          goodsImg: "https://img11.360buyimg.com/n5/jfs/t11401/34/504898878/183378/5a6a8a48/59f1c3a1N2174c8cc.jpg",
          goodsStr: "清风(APP)抽纸 原木纯品金装系列3层130抽*16包纸巾(整箱销售)",
          goodsSttus: "待付款",
          price: "50",
          buttonTitle: "去付款"
        }, {
          goodId: "2032",
          goodsImg: "https://img11.360buyimg.com/n5/jfs/t9853/275/2215551794/187986/425288fd/59f1c3a2Ne3576868.jpg",
          goodsStr: "清风(APP)抽纸 原木纯品金装系列3层130抽*16包纸巾(整箱销售)",
          goodsSttus: "待发货",
          price: "60",
          buttonTitle: "再次购买"
        }, {
          goodId: "2033",
          goodsImg: "https://img10.360buyimg.com/n5/jfs/t3394/97/927974603/289198/faa13081/5816f2e5Nab3d62be.jpg",
          goodsStr: "清风(APP)抽纸 原木纯品金装系列3层130抽*16包纸巾(整箱销售)",
          goodsSttus: "待收货",
          price: "70",
          buttonTitle: "确认收货"
        },
      ]
    })
    let params = {}

    wx.request({
      url: '',
      method:'GET',
      data :params,
      success: function(res){
        console.log(res)
      },
      fail: function (err){
        console.log(err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options");
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
    this.getDataFromNet()
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