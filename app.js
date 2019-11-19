//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function (options) {
    var that = this;
    // console.log("app-onShow");
    //设置场景值
    setTimeout(function () {
      that.globalData.scene = options.scene;
      // store.update();
      // console.log("当前场景值："+store.data.scene);
    }, 200)
    //获取系统参数
    wx.getSystemInfo({
      success: res => {
        console.log(res);
        let modelmes = res.model;
        // console.log(modelmes);
        that.globalData.getSystemInfo.screenWidth = res.screenWidth;
        that.globalData.getSystemInfo.screenHeight = res.screenHeight;
        that.globalData.getSystemInfo.statusBarHeight = res.statusBarHeight;
        that.globalData.getSystemInfo.model = modelmes;
        that.getSystemInfoCalback && that.getSystemInfoCalback({
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight,
          statusBarHeight: res.statusBarHeight
        });
      }
    })
  },
  globalData: {
    userInfo: null,
    scene:null,
    getSystemInfo:{},//sheibei
  }
})