let hongbao ={
   open:function(e){
     console.log(e)
     let dataset = e.currentTarget.dataset;
     let obj = {};
     obj[dataset.openFlag] = true;
     this.setData(obj);
   },
   // 红包动画
   hbSkip() {
     var animation = wx.createAnimation({
       duration: 500,
       timingFunction: 'linear',
     })
     //上下跳动红包
     animation.translateY(-15).step().translateY(0).step();
     this.setData({
       animationData: animation.export()
     })
   }
}
module.exports = hongbao;