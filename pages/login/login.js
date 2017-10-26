// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disableFlag:false,
    sendTxt:"获取验证码",
    mobile:"",
    code:""
  },
  /**
   * 获取数据
   */
  getData(val){
    let obj={};
    obj[val.currentTarget.dataset.name] = val.detail.value;
    this.setData(obj);
  },
  /**
   * 验证码发送
   */
  sendCode(){
    for(let key in this.data){
      if (key =="disableFlag"){
        continue;
      }
      if (this.data[key]=="" || this.data[key] == undefined){
        return ;
      }
    }

    //验证码成功发送后的回调
    let self = this;
    this.setData({
      disableFlag:true,
      sendTxt: "60s",
    });
    let count = 59;
    let countHandler = setInterval(function(){
      if(count==0){
         self.setData({
           sendTxt:"获取验证码",
           disableFlag:false
        })
         clearInterval(countHandler);
         return;
      }else{
        self.setData({
          sendTxt: count + 's'
        })
      }
      count--;
    },1000);

    // 成功后跳转用reLaunch
    // wx.reLaunch({
    //   url: '/pages/index/index'
    // })
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