// pages/good/good.js
let quantity = require("../../component/zanui-weapp/dist/quantity/index.js")
Page(Object.assign({},quantity,{

  /**
   * 页面的初始数据
   */
  data: {
      goodInfo:{},
      url:'http://mall.test.com:8088/mall/good/goodInfo?goodId=',
      showDialog:false,//dialog开关
      quantity:1,//件数
      specs:[]
  },
  /**
   *跳转付款页面 
   */
  skipToPay(){
    wx.navigateTo({
      url: '/pages/pay/pay?id=1',
    })
  },
  /**
   * 购物数量事件
   */
  handleZanQuantityChange(e){
    this.setData({
      quantity:e.quantity
    })
  },
  /**
   * 打开dialog
   */
  toggleDialog(){
    this.setData({
      showDialog:!this.data.showDialog
    })
  },
  chickAction(e){
    console.log(e)
    for(var i = 0; i <this.data.specs.length;i++){
      if(e.currentTarget.id == i){
        this.data.specs[i].showSelect = true
      }else{
        this.data.specs[i].showSelect = false
      }
    }
    this.setData(this.data)
    console.log(this.data.specs)
  },
  /**
   * 打开选择数量页面
   */
  openDialog(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      specs:[{
        id:0,
        name:"100",
        showSelect:false
      }, {
        id:1,
        name: "200",
        showSelect:false
      },{
        id:2,
        name:"300",
        showSelect:false
      },]
    })

    this.setData({
      goodInfo:{
        id:options.goodId
      }
    })
      wx.request({
        url: this.data.url+options.goodId,
        method:'GET',
        success:res=>{
          this.setData({
            goodInfo:res.data.data
          })
          console.log(res.data.data)
        }
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