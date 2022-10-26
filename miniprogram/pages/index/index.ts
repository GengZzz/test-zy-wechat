// pages/index/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
      navList:[
        {
          title:'功能1',
          icon:'friends',
          color:'#1289A7'
        },
        {
          title:'功能2',
          icon:'shopping-cart',
          color:'#EE5A24'
        },
        {
          title:'功能3',
          icon:'comment',
          color:'#FFC312'
          
        },
        {
          title:'功能4',
          icon:'video',
          color:'#833471'
        },
        {
          title:'功能5',
          icon:'alipay',
          color:'#006266'
        }
      ],
      //轮播图
      dialogShow:[
        {
          img:'../../assets/show-01.png'
        },
        {
          img:'../../assets/show-02.png'
        },
        {
          img:'../../assets/show-03.png'
        },
        {
          img:'../../assets/show-04.png'
        },
        {
          img:'../../assets/show-05.png'
        }
      ],
      funAll:[
        {
          title:"功能A",
          icon:"../../assets/fun-01.png"
        },
        {
          title:"功能B",
          icon:"../../assets/fun-02.png"
        },
        {
          title:"功能C",
          icon:"../../assets/fun-03.png"
        },
        {
          title:"功能D",
          icon:"../../assets/fun-04.png"
        },
        {
          title:"功能E",
          icon:"../../assets/fun-05.png"
        },
        {
          title:"功能F",
          icon:"../../assets/fun-06.png"
        },
        {
          title:"功能G",
          icon:"../../assets/fun-07.png"
        },
        {
          title:"功能H",
          icon:"../../assets/fun-08.png"
        },
        {
          title:"功能I",
          icon:"../../assets/fun-09.png"
        },
        {
          title:"功能J",
          icon:"../../assets/fun-10.png"
        }
      ],
      show: false,
      currentTitle:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  /**
   * 弹窗处理
   */
  onClickShow(e:any) {
    this.setData({
      currentTitle:e.currentTarget.dataset.item
    })
    this.setData({ show: true });
  },

  onClickHide() {
    this.setData({ show: false });
  },

  noop() {},
})