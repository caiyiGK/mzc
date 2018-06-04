Component({
    // 组件对外部数据
    properties: {
        indicatorDots: { // 是否显示面板指示点
            type: Boolean,
            value: true
        },
        autoplay: { // 是否自动切换
            type: Boolean,
            value: true
        },
        interval: { // 自动切换时间间隔
            type: Number,
            value: 3000
        },
        circular: { // 是否采用衔接滑动
            type: Number,
            value: true
        },
        duration: { // 滑动动画时长
            type: Number,
            value: 500
        },
        indicatorColor: {  // 指示点颜色
            type: String,
            value: '#adcee2'
        },
        indicatorActiveColor: {  // 当前选中的指示点颜色
            type: String,
            value: '#0082cd'
        },
        imgUrls: {  // 图片数据
            type: Array,
            value: [1, 2, 3, 4]
        },
    },

    // 组件对内部数据
    data: {
        screenWidth: 0,   // 屏幕宽度
        screenHeight: 0,  // 屏幕高度
        imgwidth: 0,      // 图片宽度
        imgheight: 0,     // 图片高度
        isLoad: false,    // 计算是否完成
    },

    // ready
    ready () {
        let _ = this;
        wx.getSystemInfo({
            success: function(res) {
                console.log('getSystemInfo')
                _.setData({
                    screenHeight: res.windowHeight,
                    screenWidth: res.windowWidth,
                });
            }
        });
    },

    methods: {
        // 图片宽高比例计算
        imageLoad (e) {
            if (this.data.isLoad) return;
            let _ = this;
            let $width = e.detail.width,                  //获取图片真实宽度
                $height = e.detail.height,
                ratio = $width/$height;                   //图片的真实宽高比例
            let viewWidth = _.data.screenWidth - 25,      //设置图片显示宽度，
                viewHeight = _.data.screenWidth/ratio;    //计算的高度值
            _.setData({
                imgwidth: viewWidth,
                imgheight: viewHeight,
                isLoad: true
            })
        }
    }
})
