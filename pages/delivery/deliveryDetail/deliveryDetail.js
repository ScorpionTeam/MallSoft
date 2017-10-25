// pages/delivery/deliveryDetail/deliveryDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeFlag:"0",//页面标识：0,编辑;1,新增
    goodId: '',
    deliveryId: '',
    provList: ['选择省份', '浙江', '江苏', '安徽', '上海'],
    cityList: ['选择城市', '杭州', '南京', '合肥', '上海'],
    csideList: ['选择地区', '主城区', '鼓楼', '合肥', '徐家汇'],
    baseUrl: 'http://mall.test.com:8088/mall/',
    index: '0'
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
  submit() {
    let params = {};
    params.recipients = this.data.name;
    params.phone = this.data.phone;
    params.province = this.data.province;
    params.city = this.data.city;
    params.area = this.data.countrySide;
    params.address = this.data.address;
    params.postCode = this.data.code;
    wx.request({
      url: this.data.baseUrl + 'delivery/add',
      method: 'POST',
      data: params,
      success: function (res) {
        console.log(res);
        this.setData({
          deliveryId: res.data.data.id
        })
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },
  xd() {
    let url = this.data.baseUrl + 'order/order-confirm?deliveryId=' + Number(this.data.deliveryId) + '&goodId=' + Number(this.data.goodId);
    console.log(urlT);
    wx.request({
      url: url,
      method: 'POST',
      success: function (res) {
        console.log(res);
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goodId: options.goodId
    })
    if(options.flag=="1"){
      wx.setNavigationBarTitle({
        title: '新增收获地址',
      })
    }
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