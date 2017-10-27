let hongbao ={
   open:function(e){
     let dataset = e.currentTarget.dataset;
     let obj = {};
     obj[dataset.openFlag] = true;
     this.setData(obj);
   }
}
module.exports = hongbao;