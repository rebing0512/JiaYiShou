//index.js
//获取应用实例
const app = getApp()


Page({
    data: {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      goodsType: '1',
      imgUrls: [
        "/images/haibao1.jpg",
        "/images/haibao2.jpg"
      ],
      list: [
        {
          img1: "/images/haibao2.jpg",
          img2: "/images/haibao2.jpg",
          text: "S925银镀金 石榴石戒指",
          money: "￥3200",
          time: "13:55:00"
        },
        {
          img1: "/images/haibao2.jpg",
          img2: "/images/haibao2.jpg",
          text: "S925银镀金 石榴石戒指",
          money: "￥3200",
          time: "13:55:00"
        }
      ],
      list1: [
        {
          img1: "/images/haibao2.jpg",
          img2: "/images/haibao2.jpg",
          text: "S925银镀金 石榴石戒指",
          money: "￥3200",
          time: "13:55:00"
        },
        {
          img1: "/images/haibao2.jpg",
          img2: "/images/haibao2.jpg",
          text: "S925银镀金 石榴石戒指",
          money: "￥3200",
          time: "13:55:00"
        }
      ],
      list2: [
        {
          img1: "/images/haibao1.jpg",
          img2: "/images/haibao1.jpg",
          text: "S925银镀金 石榴石戒指",
          money: "￥3200",
          time: "13:55:00"
        },
        {
          img1: "/images/haibao1.jpg",
          img2: "/images/haibao1.jpg",
          text: "S925银镀金 石榴石戒指",
          money: "￥3200",
          time: "13:55:00"
        }
      ],
      list3: [
        {
          img1: "/images/haibao1.jpg",
          img2: "/images/haibao1.jpg",
          text: "古兽印章",
          money: "￥4500",
          time: "13:55:00"
        },
      ],
      list4: [
        {
          img1: "/images/haibao2.jpg",
          img2: "/images/haibao2.jpg",
          text: "S925银镀金 石榴石戒指",
          money: "￥3200",
          time: "13:55:00"
        },
      ],
      getSystemInfo: app.globalData.getSystemInfo
  },

  goodsTypeChange: function (event) {
    //console.log(this.data.isLoadingGoodslist);
    if (this.data.isLoadingGoodsList) return;
    var that = this;
    var type = event.currentTarget.dataset.id;
    this.setData({
      goodsType: type,
    });
    if (type == 1){
      that.setData({
        list: that.data.list1
      })
    }else{
      that.setData({
        list: that.data.list2
      })
    };
   
  },
  subGoodsTypeChange: function (event) {
    if (this.data.isLoadingGoodsList) return;
    var that = this;
    var type = event.currentTarget.dataset.id;
    this.setData({
      goodsType: type,
    });
    if (type == 3) {
      that.setData({
        list: that.data.list3
      })
    } else {
      that.setData({
        list: that.data.list4
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    if (app.globalData.getSystemInfo) {
      this.setData({
        getSystemInfo: app.globalData.getSystemInfo,
      })
    } else{
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.getSystemInfoCalback = res => {
        this.setData({
          getSystemInfo: res,
        })
      }
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  switchNav: function (e) {
    var id = e.currentTarget.id;
    this.setData({ currentTab: id });
  },
})
