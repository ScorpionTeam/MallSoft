// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customerOpt:{
      isMessage:true,
      word:''
    },
    showTokenDialog:false,//token优惠券Dialog开关
    deliveryFlag:true
  },
  /**
   * 获取数据
   */
  getData(e){
    let obj = {
      customerOpt:{}
    }
    obj.customerOpt[e.currentTarget.dataset.name] = e.detail.value;
    this.setData(obj);
    console.log(this.data.customerOpt);
  },
  /**
   * 页面跳转
   */
  skipToPage(e){
    console.log(e);
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },
  /**
   * 打开token列表
   */
  toggleDialog(){
    this.setData({
      showTokenDialog: !this.data.showTokenDialog
    })
  },
  /**
   * 是否发送短信
   */
  isSendMessage(e){
    this.setData({
      customerOpt:{
        isMessage:e.detail.value
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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