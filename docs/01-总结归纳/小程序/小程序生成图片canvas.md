# 小程序生成图片 canvas

[新文档链接 🔗](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/canvas.html)

```js
// pages/partner/index.js
import req from "../../libs/Request.js";
import Wx from "../../libs/Wx.js";
import api from "../../libs/api.js";

let app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    page: 0, //请求页数

    currentIndex: 0,
    cardRightIn: false,
    cardLeftIn: false,

    tipOnoff: true,
    isMove: false, //是否滑动中
    nickName: "", // 昵称

    maskHidden: false,
    modalVisible: false,
    right: "",
  },

  // 获取图片卡
  getCards() {
    let { page } = this.data;
    let pg = page;
    pg++;
    return api
      .getCards(pg)
      .then((data) => {
        let oldImgUrls = this.data.imgUrls;
        this.setData({
          imgUrls: (oldImgUrls || []).concat(data),
          page: data.length ? pg : page,
        });
      })
      .then(() => {
        this.zanSync();
      });
  },
  getUserInfo(e) {
    let { backage, content, name } = e.currentTarget.dataset.item;
    if (!e.detail.userInfo) {
      this.setData({
        modalVisible: true,
        right: "userInfo",
      });
      return;
    }
    let { avatarUrl, nickName } = e.detail.userInfo;

    // 如果已经生成了，那么就显示
    if (this.SHARE_IMG) {
      // return wx.previewImage({
      //   urls: [this.SHARE_IMG],
      // })
      this.setData({
        maskHidden: true,
      });
      return;
    }
    this.setData({
      nickName,
      prevImage: backage,
      content,
      name,
    });
    wx.showLoading({
      title: "努力生成中...",
      mask: true,
    });
    console.log(avatarUrl);
    this.shareHandle(avatarUrl, backage);
  },
  // 弹框确认
  modalOk() {
    let self = this;
    wx.openSetting({
      success(res) {
        let { right } = self.data;
        if (res.authSetting[`scope.${right}`]) {
          wx.showToast({
            title: "授权成功",
            icon: "none",
          });
          self.modalCancel();
        } else {
          wx.showToast({
            title: "未授权",
            icon: "none",
          });
        }
      },
    });
  },
  // 弹框取消
  modalCancel() {
    this.setData({
      modalVisible: false,
    });
  },
  shareHandle(avatarUrl, backage) {
    let promise1 = new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: avatarUrl,
        success: function (res) {
          console.log(res);
          resolve(res);
        },
      });
    });
    let promise2 = new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: backage,
        success: function (res) {
          console.log(res);
          resolve(res);
        },
      });
    });
    Promise.all([promise1, promise2]).then((res) => {
      const ctx = wx.createCanvasContext("shareImg");

      const grd = ctx.createCircularGradient(80, 557, 667);
      grd.addColorStop(0, "#000");
      grd.addColorStop(1, "#fff");

      // ctx.setFillStyle(grd)
      ctx.fillRect(0, 0, 375, 667);

      new Promise((RES) => {
        ctx.drawImage(
          res[1].path,
          0,
          0,
          375,
          (375 * res[1].height) / res[1].width
        );
        console.log((375 * res[1].width) / res[1].height);
        RES();
      })
        .then(
          () =>
            new Promise((RES) => {
              this.canvasDraw(ctx, res);
              ctx.draw(false, RES());
            })
        )
        .then(() => {
          wx.showLoading({
            title: "再给我一秒钟...",
            mask: true,
          });
          setTimeout(() => this.toCanvas(), 1000);
        });
    });
  },
  // 画布canvas绘制
  toCanvas() {
    let self = this;
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 375,
      height: 667,
      canvasId: "shareImg",
      success: function (res) {
        self.SHARE_IMG = res.tempFilePath;
        var urls = [res.tempFilePath];
        self.setData({
          imagePath: res.tempFilePath,
          maskHidden: true,
        });
        // wx.previewImage({
        //   urls
        // });
        wx.hideLoading();
      },
      fail: function (res) {
        console.log(res);
      },
    });
  },
  // 点赞
  clickZan(e) {
    console.log("赞");
    let { idx, id, zan } = e.currentTarget.dataset,
      { imgUrls } = this.data;
    imgUrls.forEach((item, index) => {
      if (idx === index) {
        item.zan = !item.zan;
        let zanIds = wx.getStorageSync("zaned") || [];
        if (!zan) {
          zanIds.push(id);
        } else {
          zanIds = zanIds.filter((item) => item !== id);
        }
        wx.setStorageSync("zaned", zanIds);
      }
    });

    this.setData({
      imgUrls,
    });
  },
  // 同步点赞
  zanSync() {
    let zanIds = wx.getStorageSync("zaned") || [],
      { currentIndex, imgUrls } = this.data,
      id = imgUrls[currentIndex].id;

    imgUrls.forEach((img) => {
      if (zanIds.some((item) => item == img.id)) {
        img.zan = true;
      }
    });
    this.setData({
      imgUrls,
    });
    console.log(currentIndex, id);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let tipOnoff = wx.getStorageSync("tipOnoff");
    if (tipOnoff === false) this.setData({ tipOnoff });
    //this.shareHandle()
    this.getCards();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  //手指触摸动作开始 记录起点X坐标
  touchstart(e) {
    if (!e.changedTouches[0]) return;
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      isMove: false,
    });
  },
  //滑动事件处理
  touchmove: function (e) {
    let { isMove } = this.data;

    let idx = e.currentTarget.dataset.index;

    let startX = this.data.startX, //开始X坐标
      startY = this.data.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = this.angle(
        { X: startX, Y: startY },
        { X: touchMoveX, Y: touchMoveY }
      );

    //滑动超过45度角 return
    if (Math.abs(angle) < 45) return;

    if (touchMoveY > startY) {
      //下滑
      if (idx == 0) {
        wx.showToast({
          title: "已经到顶了",
          icon: "none",
        });
        return;
      }
      this.setData({
        currentIndex: idx == 0 ? 0 : idx - 1,
        cardRightIn: false,
        cardLeftIn: true,
      });
    } else {
      if (idx == this.data.imgUrls.length - 1) {
        wx.showToast({
          title: "已经到底了",
          icon: "none",
        });
        return;
      }
      this.setData({
        currentIndex: idx == this.data.imgUrls.length - 1 ? idx : idx + 1,
        cardRightIn: true,
        cardLeftIn: false,
      });

      let { currentIndex, imgUrls } = this.data;
      let imgLen = imgUrls.length;
      if (currentIndex + 1 === imgLen && !isMove) {
        if (!isMove) {
          this.setData({
            isMove: true,
          });
        }
        console.log("请求", currentIndex);
        this.getCards();
      }
    }
    this.SHARE_IMG = null;
    // wx.pageScrollTo({
    //   scrollTop: 0
    // })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y;
    //返回角度 /Math.atan()返回数字的反正切值
    return (360 * Math.atan(_Y / _X)) / (2 * Math.PI);
  },

  // 关闭提示框
  close() {
    this.setData(
      {
        tipOnoff: false,
      },
      () => {
        wx.setStorageSync("tipOnoff", false);
      }
    );
  },
  // 关闭mask蒙层
  closeMask() {
    this.setData({
      maskHidden: false,
    });
  },
  //点击保存到相册
  baocun() {
    var that = this;
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success(res) {
        wx.showModal({
          content: "图片已保存到相册，赶紧晒一下吧~",
          showCancel: false,
          confirmText: "好的",
          success: function (res) {
            if (res.confirm) {
              console.log("用户点击确定");
              /* 该隐藏的隐藏 */
              that.setData({
                maskHidden: false,
              });
              return;
            }
          },
        });
      },
      fail() {
        that.judgeScope("writePhotosAlbum").then((scope) => {
          if (!scope) {
            that.setData({
              modalVisible: true,
              right: "writePhotosAlbum",
            });
          }
        });
      },
    });
  },
  // 判断授权
  judgeScope(scope) {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success(res) {
          console.log(res);
          resolve(res.authSetting[`scope.${scope}`]);
        },
      });
    });
  },
  // 绘制canvas
  canvasDraw(ctx, res) {
    let canvasW = 375,
      canvasH = 667, // 画布宽高
      gapW = 10, // 间隔宽
      rightW = 120,
      blockH = rightW,
      leftW = canvasW - gapW * 3 - rightW, // 底部左右框的宽
      headR = 40, // 头像半径
      rectRadius = 10, // 矩形边角半径
      linkH = 10, // 中间连接件高
      headPad = 5, // 头像padding
      canvasTop = canvasH - gapW - blockH,
      canvasBottom = canvasH - gapW;

    let imgH = (375 * res[1].height) / res[1].width, // 图片的高度
      fontTop = (canvasTop - imgH - headR - 105) / 2 + imgH,
      { content, name } = this.data,
      fonts = content.slice(0, 48).split("");

    // 一行多少字
    var NUMBER_OF_LINE = 20;
    // 每个字多宽
    var FONT_WIDTH = 16.5;
    // 1. 进行分割，获取前三行
    var c_temps = content.split("\r\n");
    var line_counts = 0;
    // 如果超过三行，那么只取前三行
    if (c_temps.length > 3) {
      c_temps = c_temps.slice(0, 3);
    }

    for (var i in c_temps) {
      var c_data = c_temps[i];
      // 计算要换多少行
      var c_lines = parseInt(c_data.length / NUMBER_OF_LINE) + 1;
      for (var j = 0; j < c_lines; j++) {
        startDraw(
          c_data.slice(j * NUMBER_OF_LINE, (j + 1) * NUMBER_OF_LINE),
          line_counts
        );
        line_counts++;
      }
    }

    // 开始绘制文字
    // text绘制的文字，line在第几行
    function startDraw(text, line) {
      // 如果line > 3，则忽略
      // 因为line从0开始
      // 如果最后一行，并且文字还是那么多，那么就省略号代替
      if (line === 2 && text.length === NUMBER_OF_LINE) {
        text = text.slice(0, 13) + "..";
      } else if (line > 2) {
        return;
      }
      var y = fontTop + line * 35; // 200为文字初始y坐标
      console.log("[draw]", text, y);
      ctx.setFontSize(FONT_WIDTH - 2);
      ctx.setTextAlign("left");
      ctx.setTextBaseline("top");
      ctx.setFillStyle("#fff");
      for (var i in text) {
        var t = text[i];
        // 开始绘制
        ctx.fillText(
          t,
          (375 - FONT_WIDTH * NUMBER_OF_LINE) / 2 + i * FONT_WIDTH,
          y
        );
      }
    }
    ctx.setTextAlign("right");
    ctx.fillText(
      "—— " + name,
      (375 + FONT_WIDTH * NUMBER_OF_LINE) / 2,
      fontTop + 105
    );

    this.roundRect(ctx, gapW, canvasTop, leftW, blockH, rectRadius);
    this.roundRect(
      ctx,
      gapW * 2 + leftW,
      canvasTop,
      rightW,
      blockH,
      rectRadius
    );
    this.roundRect(
      ctx,
      gapW / 2 + leftW,
      canvasTop + (blockH - 2 * linkH) / 3,
      linkH * 2,
      linkH,
      0
    );
    this.roundRect(
      ctx,
      gapW / 2 + leftW,
      canvasTop + ((blockH - 2 * linkH) * 2) / 3 + linkH,
      linkH * 2,
      linkH,
      0
    );

    this.roundRect(
      ctx,
      gapW * 3 - headPad,
      canvasTop - headR - headPad,
      (headR + headPad) * 2,
      (headR + headPad) * 2,
      headR + headPad
    );

    ctx.save();
    ctx.beginPath();
    ctx.arc(gapW * 3 + headR, canvasTop, headR, 0, 2 * Math.PI);
    ctx.fill("#fff");
    ctx.clip();
    ctx.drawImage(
      res[0].path,
      gapW * 3,
      canvasTop - headR,
      2 * headR,
      2 * headR
    );
    ctx.restore();

    // 画线段
    ctx.beginPath();
    ctx.setStrokeStyle("#000");
    ctx.moveTo(gapW * 3 + headR * 2, canvasTop + 25);
    ctx.lineTo(gapW + leftW - gapW, canvasTop + 25);

    ctx.moveTo(gapW * 2, canvasBottom - 25);
    ctx.lineTo(gapW + leftW - gapW, canvasBottom - 25);
    ctx.stroke();

    ctx.setFillStyle("#000");
    ctx.setFontSize(15);
    ctx.setTextAlign("center");
    ctx.setTextBaseline("bottom");
    ctx.fillText(
      "健 / 康 / 生 / 活 / 每 / 一 / 天",
      gapW + leftW / 2,
      canvasBottom - 3,
      leftW
    );

    ctx.setTextAlign("left");
    ctx.fillText(this.data.nickName, gapW * 4 + headR * 2, canvasTop + 25);

    ctx.setTextAlign("center");
    ctx.setTextBaseline("middle");
    ctx.setFontSize(20);
    ctx.fillText(
      "我是第100位健康达人",
      gapW + leftW / 2,
      (canvasBottom + canvasTop) / 2,
      leftW
    );
  },
  // 绘制圆角矩形
  roundRect(ctx, x, y, w, h, r) {
    // 开始绘制
    ctx.beginPath();
    // 因为边缘描边存在锯齿，最好指定使用 transparent 填充
    ctx.setFillStyle("#fff");
    // ctx.setStrokeStyle('transparent')
    // 绘制左上角圆弧
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);

    // 绘制border-top
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.lineTo(x + w, y + r);
    // 绘制右上角圆弧
    ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);

    // 绘制border-right
    ctx.lineTo(x + w, y + h - r);
    ctx.lineTo(x + w - r, y + h);
    // 绘制右下角圆弧
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);

    // 绘制border-bottom
    ctx.lineTo(x + r, y + h);
    ctx.lineTo(x, y + h - r);
    // 绘制左下角圆弧
    ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);

    // 绘制border-left
    ctx.lineTo(x, y + r);
    ctx.lineTo(x + r, y);

    ctx.fill();
    ctx.closePath();
    // 剪切
    // ctx.clip()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let { currentIndex, imgUrls } = this.data;

    return {
      title: "",
      path: "pages/home/index",
      imageUrl: imgUrls[currentIndex].backage,
    };
  },
});
```
