
var Zan = require('../../component/zanui-weapp/dist/index');
// pages/wallet/wallet.js
Page(
        Object.assign({}, Zan.NoticeBar, {
                data: {
                        movable: {
                                text: '充值返现，充100返10 充300返回30 充500返100，多充多送。优惠多多，返现多多。'
                        }
                }
                ,
                /**
                 * 用户点击右上角分享
                 */
                onShareAppMessage: function () {
                        return {
                                title: "xxxxx",
                                desc: "红肉提交意见同意就"
                        }
                },
                onShow() {
                        // 滚动通告栏需要initScroll
                        this.initZanNoticeBarScroll('movable');
                }, pageSkip: function (event) {
                        let url = event.currentTarget.dataset.url;
                        wx: wx.navigateTo({
                                url: url
                        })
                }
        }))