/**
 * Created by Administrator on 2018-01-24.
 */
// 获取url参数
function Href_data(key) {
    var Href_Array = window.location.search.slice(1).split("&")
    var obj = {};
    for (var i = 0, b = Href_Array.length; i < b; i++) {
        var Key = Href_Array[i].split("=")
        obj[Key[0]] = Key[1]
    }
    return obj[key]
}
// 清缓存
if (!Href_data("v")) {
    if (window.location.href.indexOf("?") > -1) {
        //window.location.href = window.location.href + "&v=" + Math.random() * 1000
    } else {
        //window.location.href = window.location.href + "?v=" + Math.random() * 1000
    }
}
/**
 * 非空验证
 * @param {校验的值} value
 * @returns
 */
var Stock_info;

function NullEmpty(value) {
    if (value.replace(/(^\s*)|(\s*$)/g, "") == "") {
        return true
    } else {
        return false
    }
}

/**
 * 手机好吗格式校验
 * @param {校验的值} value
 * @returns
 */
function checkMobile(value) {
    if (!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(value))) {
        return true;
    } else {
        return false;
    }
}

/**
 * PlaceHolder兼容处理
 */
function PlaceHolder() {};
PlaceHolder.prototype = {
    // 判断兼容
    ability: function () {
        var input = document.createElement('input');
        return "placeholder" in input
    },
    // placeholder表单兼容处理(不包括密码表单)
    // 接收唯一参数 => obj:需要兼容的表单元素
    handling: function (obj) {
        if (!this.ability()) {
            obj.each(function (index, ele) {
                // 给表单添加value属性，值为placeholder的值
                $(ele).attr({
                    value: $(ele).attr("placeholder")
                })
                // 获取焦点/失去焦点
                $(ele).focus(function () {
                    if ($(ele).val() == $(ele).attr("placeholder")) {
                        $(ele).attr({
                            value: ""
                        });
                    };
                }).blur(function () {
                    if ($(ele).val() == "") {
                        $(ele).attr({
                            value: $(ele).attr("placeholder")
                        });
                    }
                })
            })

        }

    },
    // 对密码表单的特殊处理
    pwHandling: function (obj) {
        if (!$(this).ability) {
            obj.each(
                function (index, element) {
                    var pwdField = $(this);
                    var pwdVal = pwdField.attr('placeholder');
                    var pwdId = pwdField.attr('id');
                    // 在原本密码表单下面添加一个普通的文本表单
                    pwdField.after('<input id="' + pwdId + "" + index + '" type="text" value=' + pwdVal + ' autocomplete="off" />');
                    // 获取创建出来的文本表单
                    var pwdPlaceholder = $('#' + pwdId + "" + index);
                    // 显示文本表单
                    pwdPlaceholder.show();
                    // 隐藏原本的密码表单
                    pwdField.hide();

                    // 获得焦点时
                    pwdPlaceholder.focus(function () {
                        // 将文本表单隐藏
                        pwdPlaceholder.hide();
                        // 原本的密码表单显示
                        pwdField.show();
                        // 密码表单获取焦点
                        pwdField.focus();
                    });

                    // 失去焦点时
                    pwdField.blur(function () {
                        // 如果密码表单没有内容
                        if (pwdField.val() == '') {
                            // 则显示文本表单
                            pwdPlaceholder.show();
                            // 隐藏密码表单
                            pwdField.hide();
                        }
                    });
                }
            );
        }
    }
}
var ph = new PlaceHolder()
$(function () {
    ph.handling($("input").not("input[type='password']"))
    ph.pwHandling($('input[type="password"]'))
})


/**
 * 判断用户是否为PC端
 * @returns
 */
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

/**
 * 监测微信拷贝行为
 * @param {any} text
 */
function CopyDetection(text, callback) {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var lock = true
    if (isAndroid) {
        var touch;
        $(".DJC_WeChat").on("touchstart", function () {
            // 长按则预判为是复制行为
            touch = setTimeout(function () {
                if (lock) {
                    lock = false;
                    var data_2 = {
                        WXNumber: text,
                        OperID: 2
                    }
                    s_data.setOperInfo(data_2);
                    if (callback) {
                        callback()
                    }
                }
            }, 680)
        })
        $(".DJC_WeChat").on("touchmove", function () {
            clearTimeout(touch)
        })
        $(".DJC_WeChat").on("touchend", function () {
            clearTimeout(touch)
        })
    } else {
        $("body").on("copy", function () {
            if (getSelectionText().indexOf(text) > -1) {
                if (lock) {
                    lock = false;
                    var data_2 = {
                        WXNumber: text,
                        OperID: 2
                    }
                    s_data.setOperInfo(data_2);
                    if (callback) {
                        callback()
                    }
                }
            }
        })
    }
    //  获取页面选中的文本内容
    function getSelectionText() {
        if (window.getSelection) {
            return window.getSelection().toString();
        } else if (document.selection && document.selection.createRange) {
            return document.selection.createRange().text;
        }
        return '';
    }
}
/**
 * 监测通过点击直接拷贝微信得行为
 * @param {any} text
 * @param {any} callback
 */
function ClickCopy(text, callback) {
    var data_2 = {
        WXNumber: text,
        OperID: 2
    }
    s_data.setOperInfo(data_2);
    if (callback) {
        callback()
    }
}
/**
 * 获取股票数据，在全局暴露一个Scock_info接收股票代码信息
 * @param {股票代码渲染的元素} gpcode_dom
 * @param {页面渲染类型} type
 * @param {code:指定的股票代码,callback:回掉} Obj
 */
function Stock_find(gpcode_dom, type, Obj) {
    // 如果有传指定股票代码，则渲染指定股票
    if (Obj && Obj.code) {
        if (type == "code") {
            //未定义isDJC或者isDJC=1默认是大决策的
            if(urldata.isDJC==1){
                $.getJSON("http://119.23.58.158:8081/control/getdata/selectStockJYDataObj?StockCode=" + Obj.code + "&callback=?", function (msg) {
                    if (msg.status == "Success") {
                        var Stock_info = JSON.parse(msg.data.dataStr).items;
                        $(".date").html(msg.data.createTime.slice(0, 11))
                        gpcode_dom.html(Obj.code)
                        apply_1(Stock_info);
                        if (Obj.callback) {
                            Obj.callback()
                        }
                    }
                })
                //此处为其它公司
            }else if(urldata.isDJC==0){
                var temp1;
                //判断是什么开头加相应后缀
                if(/^0/.test(Obj.code)||/^3/.test(Obj.code)){
                    temp1='2'
                }else if(/^6/.test(Obj.code)){
                    temp1='1'
                }
                $.ajax({
                    url:'http://nuff.eastmoney.com/EM_Finance2015TradeInterface/JS.ashx?token=4f1862fc3b5e77c150a2b985b12db0fd&cb=jQuery&_=1512609819932&id='+Obj.code+temp1,
                    type:'get',
                    dataType:'jsonp',
                    jsonp:'cb',
                    success:function(res){
                        if(res.Value.length==0) return;
                        //把数据处理一致
                        var record_19;
                        if(res.Value[35].indexOf('万')>0){
                            record_19=parseFloat(res.Value[35])*10000;
                        }else if(res.Value[35].indexOf('亿')>0){
                            record_19=parseFloat(res.Value[35])*100000000;
                        }else{
                            record_19=res.Value[35];
                        }
                        var stock_data={
                            status:'Success',
                            msg:'',
                            data:{
                                createTime: res.Value[49],
                                dataStr:'{"items":{'+
                                '"name":"'+res.Value[2]+'","6":"'+res.Value[34]+'","7":"'+res.Value[28]+'","8":"'+res.Value[30]+'","9":"'+res.Value[32]+'","10":"'+res.Value[3]+'","13":"'+res.Value[31]+'","19":"'+
                                record_19+'","69":"'+res.Value[23]+'","70":"'+res.Value[24]+'","199112":"'+res.Value[29]+'","264648":"'+res.Value[27]+'","526792":""'+',"592920":"'+res.Value[43]+'","1968584":"'+
                                res.Value[37]+'","2034120":"'+res.Value[38]+'","3475914":"'+res.Value[45]+'","3541450":"'+res.Value[46]+'"}}',
                                id:0,
                                stockCode:res.Value[1]
                            }
                        }
                        //继续沿用之前的方法
                        if (stock_data.status == "Success") {
                            var Stock_info = JSON.parse(stock_data.data.dataStr).items;
                            $(".date").html(stock_data.data.createTime.slice(0, 11))
                            gpcode_dom.html(Obj.code)
                            apply_1(Stock_info);
                            if (Obj.callback) {
                                Obj.callback()
                            }
                        }
                    },
                    error:function(res){
                        console.log('get Code Failed');
                    }
                })

            }
        } else {
            $.getJSON("http://119.23.58.158:8081/control/getdata/selectStockInfoTHS?StockCode=" + default_number + "&callback=?", function (msg) {
                if (msg.status == "Success") {
                    apply_2(msg)
                } else if (msg.status == "Fail") {
                    // 如果没数据，则查询默认000002
                    $.getJSON("http://119.23.58.158:8081/control/getdata/selectStockInfoTHS?StockCode=000002&callback=?", function (msg) {
                        if (msg.status == "Success") {
                            apply_2(msg)
                        } else if (msg.status == "Fail") {
                            console.log("Fail")
                        }
                    })
                }
            })
        }
        // 参数中有stockcode
    } else if (Href_data("gp")) {
        createHtml({
            stockCode: Href_data("gp"),
            stockName: ""
        }, gpcode_dom, type, Obj);

        // 参数中没有stockcode
    } else if(Href_data("k")){
        // 调用java后台
        s_data.getKeywordName(function (r_data) {
            if (r_data.status == "Success") {
                createHtml(r_data.data, gpcode_dom, type, Obj);
            }
        }, function () {
            // 如果java后台数据中也查询不到，则使用默认的
            createHtml({
                stockCode: "000002",
                stockName: "万科A"
            }, gpcode_dom, type, Obj); // 默认
        });
    } else {
        // 如果java后台数据中也查询不到，则使用默认的
        createHtml({
            stockCode: "000002",
            stockName: "万科A"
        }, gpcode_dom, type, Obj); // 默认
    }


    // 数据获取，页面渲染
    function createHtml(Stock_data, gpcode_dom, type, call) {
        if (!Stock_data || Object.prototype.toString.call(Stock_data) != "[object Object]") {
            Stock_data = {
                stockCode: "000002",
                stockName: "万科A"
            }
        }
        // 动态渲染股票数据
        gpcode_dom.html("(" + Stock_data.stockCode + ")")

        if (type == "code") {
            //未定义isDJC或者isDJC=1默认是大决策的
            if(urldata.isDJC==1){
                $.getJSON("http://119.23.58.158:8081/control/getdata/selectStockJYDataObj?StockCode=" + Stock_data.stockCode + "&callback=?", function (msg) {
                    if (msg.status == "Success") {
                        var Stock_info = JSON.parse(msg.data.dataStr).items;
                        $(".date").html(msg.data.createTime.slice(0, 11))
                        apply_1(Stock_info);
                        if (call && call.callback) {
                            call.callback()
                        }
                    }
                    if (msg.status == "Fail") {
                        alert(msg.msg);
                    }
                })
                //此处为其它公司获取的
            }else if(urldata.isDJC==0){
                var requestCode;
                if(/^0/.test(Stock_data.stockCode)||/^3/.test(Stock_data.stockCode)){
                    requestCode='2';
                }else if(/^6/.test(Stock_data.stockCode)){
                    requestCode='1';
                }

                $.ajax({
                    url:'http://nuff.eastmoney.com/EM_Finance2015TradeInterface/JS.ashx?token=4f1862fc3b5e77c150a2b985b12db0fd&cb=jQuery&_=1512609819932&id='+Stock_data.stockCode+requestCode,
                    type:'get',
                    dataType:'jsonp',
                    jsonp:'cb',
                    success:function(res){
                        if(res.Value.length==0) return;
                        //把数据处理一致
                        var record_19;
                        if(res.Value[35].indexOf("万")>0){
                            record_19=parseFloat(res.Value[35])*10000;
                        }else if(res.Value[35].indexOf('亿')>0){
                            record_19=parseFloat(res.Value[35])*100000000;
                        }else{
                            record_19=res.Value[35];
                        }
                        var stock_data={
                            status:'Success',
                            msg:'',
                            data:{
                                createTime: res.Value[49],
                                dataStr:'{"items":{'+
                                '"name":"'+res.Value[2]+'","6":"'+res.Value[34]+'","7":"'+res.Value[28]+'","8":"'+res.Value[30]+'","9":"'+res.Value[32]+'","10":"'+res.Value[3]+'","13":"'+res.Value[31]+'","19":"'+
                                record_19+'","69":"'+res.Value[23]+'","70":"'+res.Value[24]+'","199112":"'+res.Value[29]+'","264648":"'+res.Value[27]+'","526792":""'+',"592920":"'+res.Value[43]+'","1968584":"'+
                                res.Value[37]+'","2034120":"'+res.Value[38]+'","3475914":"'+res.Value[45]+'","3541450":"'+res.Value[46]+'"}}',
                                id:0,
                                stockCode:res.Value[1]
                            }
                        }

                        var Stock_info = JSON.parse(stock_data.data.dataStr).items;
                        $(".date").html(stock_data.data.createTime.slice(0, 11))
                        apply_1(Stock_info);
                        if (call && call.callback) {
                            call.callback()
                        }

                    },
                    error:function(res){
                        console.log('get Code Failed');
                    }
                })
            }
        } else {
            $.getJSON("http://119.23.58.158:8081/control/getdata/selectStockInfoTHS?StockCode=" + Stock_data.stockCode + "&callback=?", function (msg) {
                if (msg.status == "Success") {
                    apply_2(msg)
                } else if (msg.status == "Fail") {
                    // 如果没数据，则查询默认000002
                    $.getJSON("http://119.23.58.158:8081/control/getdata/selectStockInfoTHS?StockCode=000002&callback=?", function (msg) {
                        if (msg.status == "Success") {
                            apply_2(msg)
                        } else if (msg.status == "Fail") {
                            console.log("Fail")
                        }
                    })
                }
            })
        }
    }
    // 获取URL的传参值
    function Href_data(key) {
        var Href_Array = window.location.search.slice(1).split("&")
        var obj = {};
        for (var i = 0, b = Href_Array.length; i < b; i++) {
            var Key = Href_Array[i].split("=")
            obj[Key[0]] = Key[1]
        }
        return obj[key]
    }
    // 数据页面渲染代码
    function apply_1(Stock_info) {
        // 输出过滤器
        function filter(value) {
            var txt = "-"
            if (!isNaN(value) && value !== "") {
                txt = value
            }
            return txt
        }
        $(".gpname").html(Stock_info['name'])
        // 股票指数00
        $(".items-10").html(Stock_info["10"])
        // 股票指数01
        $(".items-264648").html(filter(parseFloat((Stock_info["264648"])).toFixed(2)))
        // 股票指数02
        $(".items-199112").html(Stock_info["199112"] == "" ? "" : filter(parseFloat((Stock_info["199112"])).toFixed(2)) + "%")
        // 今开
        $(".items-7").html(Stock_info["7"] == "" ? "-" : filter(parseFloat((Stock_info["7"])).toFixed(2)))
        // 昨收
        $(".items-6").html(Stock_info["6"] == "" ? "-" : filter(parseFloat((Stock_info["6"])).toFixed(2)))
        // 成交量
        $(".items-13").html(Stock_info["13"] == "" ? "-" : filter((parseFloat((Stock_info["13"])) / 10000).toFixed(2)) + "万")
        // 换手率
        $(".items-1968584").html(Stock_info["1968584"] == "" ? "-" : filter(parseFloat((Stock_info["1968584"])).toFixed(2)) + "%")
        // 最高
        $(".items-8").html(Stock_info["8"] == "" ? "-" : Stock_info["8"])
        // 最低
        $(".items-9").html(Stock_info["9"] == "" ? "-" : Stock_info["9"])
        // 涨停
        $(".items-69").html(Stock_info["69"] == "" ? "-" : Stock_info["69"])
        // 跌停
        $(".items-70").html(Stock_info["70"] == "" ? "-" : Stock_info["70"])
        // 成交额
        $(".items-19").html(Stock_info["19"] == "" ? "-" : Stock_info["19"] == "" ? "-" : filter((parseFloat((Stock_info["19"])) / 100000000).toFixed(2)) + "亿")
        // 振幅
        $(".items-526792").html(Stock_info["526792"] == "" ? "-" : filter(parseFloat((Stock_info["526792"])).toFixed(2)) + "%")
        // 流通市值
        $(".items-3475914").html(Stock_info["3475914"] == "" ? "-" : filter((parseFloat((Stock_info["3475914"])) / 100000000).toFixed(2)) + "亿")
        // 总市值
        $(".items-3541450").html(Stock_info["3541450"] == "" ? "-" : filter((parseFloat((Stock_info["3541450"])) / 100000000).toFixed(2)))
        // 市盈率（动）
        $(".items-2034120").html(Stock_info["2034120"] == "" ? "-" : filter(parseFloat((Stock_info["2034120"])).toFixed(2)))
        // 市净率（动）
        $(".items-592920").html(Stock_info["592920"] == "" ? "-" : filter(parseFloat((Stock_info["592920"])).toFixed(2)))
        if (parseFloat(Stock_info["264648"]) < 0) {
            $(".items-10,.items-199112,.items-264648").css("color", "#1dbf60")
        } else {
            $(".items-10,.items-199112,.items-264648").css("color", "#EC401E")
        }
    }
    // 分析页面渲染代码
    function apply_2(data) {
        // 评级
        if (data.data.oper == "中性") {
            $(".advise span").addClass("blue")
        } else if (data.data.oper == "卖出" || data.data.oper == "减持") {
            $(".advise span").addClass("green")
        } else {
            $(".advise span").addClass("red")
        }
        $(".advise span").html(data.data.oper)
        // 短期趋势
        $(".td1").html(data.data.short)
        // 中期趋势
        $(".td2").html(data.data.mid)
        // 长期趋势
        $(".td3").html(data.data.long)
        // 分析标题
        $(".hb-1").html(data.data.title)
        // 分析内容
        $(".hb-2").html(data.data.content)
        // 股票名称
        $(".gpname").html(data.data.stockname.slice(0, -8))
    }
}

/**
 * 获取页面归属信息
 * @returns
 */
function SetRefer() {
    var _Array = window.location.pathname.split("/")
    var refer = _Array[2] + _Array[3]
    return refer
}

/**
 * 手机号码，股票代码提交方法
 * @param {手机号码表单Dom} Dom
 * @param {存储股票代码的变量} stock
 */
function FormSubmit(Dom, stock) {
    // java
    var data = {
        PhoneNumber: Dom,
        StockCode: stock,
        OperID: 1
    }
    s_data.setOperInfo(data);
}

/**
 *
 * formSubmit
 * @param {any} dom
 * @param {any} P
 * @param {any} C
 * @param {any} tips
 */
function userOpt(dom, P, C, tips) {
    // 判断当前用户输入的是手机号码还是股票关键字
    if ($("" + dom).attr("placeholder") == (tips.t2 || "请输入手机号码")) {
        // 如果是手机号码，校验手机号码格式
        if (checkMobile(P)) {
            // // 格式错误则弹窗提示用户输入正确手机号码
            alert(tips.t2_err || "请输入正确的手机号码")
            return
        } else {
            // 表单数据提交
            FormSubmit(P, stock)
            // 如果正确则提示用户查询成功
            alert(tips.t2_suc || "提交成功，稍后客服人员与您联系")
            // 将输入框清空
            $("" + dom).val("").attr({
                placeholder: tips.t1 || "请输入股票代码"
            })
            ph.handling($("" + dom))
        }
    } else {
        // 如果是输入股票代码则验证输入框是否为空
        if (NullEmpty(C) || C == (tips.t1 || "请输入股票代码")) {
            alert(tips.t1_err || "请输入要查询的股票代码")
            return
        } else {
            // 如果输入正确则将存储输入框的值，方便下次发送到后台，并将下次的判断条件改为输入手机号码
            stock = C
            $("" + dom).val("").attr({
                "placeholder": tips.t2 || "请输入手机号码"
            })
            ph.handling($("" + dom))
        }
    }
}
/**
 * 页面信息提交方法
 * @param {any} PageName 页面名字
 * @param {any} PhpRefer php页面来源
 * @param {any} JavaRefer java页面来源
 * @param {any} Token  java Token标识
 */
function PageInfo(PageName, PhpRefer, JavaRefer, Token) {
    s_data.init({
        url: JavaRefer,
        token: Token
    });
}


// 模拟数据上升
/**
 * @param {number} initiaNumber 数据初始值
 */
function UpData(initiaNumber, dom) {
    var num2 = initiaNumber;
    var time =""
    timeout()

    function timeout() {
        var Time=setTimeout(function () {
            num2++;
            $("" + dom).html(num2)
            clearTimeout(Time)
            // 更新定时器时间
            time = Math.floor(Math.random() * 4000) + 200
            // 再次调用定时器
            timeout()
        }, time)
    }
}

// 模拟数据下降
/**
 * @param {number} initiaNumber 数据初始值
 */
function DownData(initiaNumber, dom) {
    $(dom).html(initiaNumber+1)
    var num2 = initiaNumber;
    var time = Math.floor(Math.random() * 4000) + 600

    function timeout() {
        setTimeout(function () {
            $("" + dom).html(num2)
            num2--;
            // 更新定时器时间
            time = Math.floor(Math.random() * 6000) + 200
            // 再次调用定时器
            if (num2 >= 0) {
                timeout()
            }
        }, time)
    }
    timeout()
}
// 隐藏站长样式
$(window).load(function () {
    $("body>a").css("display", "none")
})

/*响应式布局 start*/
function autosize() {
    var dw = $(window).width();
    if (dw >= 640) {
        dw = 640
    };
    var fz = (dw / 320 * 12);
    $('html').css({
        'font-size': fz + 'px'
    });
}


// 股票代码模糊查询
/**
 * @param {any} Dom 查询输入的表单Dom
 * @param {any} Arr 查询的数据
 * @param {any} callback 回调
 */
function FzSearch(Dom, Arr, callback) {
    // 1.形参
    this.Dom = Dom
    this.Arr = Arr
    // 2.输入框的宽
    this.D_width = $(Dom).outerWidth()
    // 3.输入框的高
    this.D_height = $(Dom).outerHeight()
    // 4.输入框的坐标
    this.D_top = $(Dom).offset().top
    this.D_left = $(Dom).offset().left
    // 5.成功匹配的数组
    this.Succ_num = [];
    // 6.Dom初始化
    $("body").append($("<div id=\"SearchBox\" style=\"display:none;width:" + this.D_width +
        "px;position:absolute;z-index:10000;top:" + (this.D_top +
        this.D_height) + "px;left:" + this.D_left + "px;background:#fff;font-weight:bolder\"></div>").html(
        "<table border=\"0\" cellpadding=\"2\" cellspacing=\"0\" width=\"100%\">" +
        "<thead>" +
        "<tr style=\"height:35px;line-height:35px;background:#333;color:#fff;\">" +
        "<th align=\"center\" title=\"股票代码\" width=\"30%\">股票代码</th>" +
        "<th align=\"center\" title=\"股票名称\" width=\"40%\">股票名称</th>" +
        "<th align=\"center\" title=\"股票简称\" width=\"30%\">股票简称</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>" +
        "</table>"
    ))
}
FzSearch.prototype = {
    Match: function () {
        var This = this
        var selectNum = -1;
        $(this.Dom).keyup(function (e) {
            var KeyCode = e.keyCode;
            if (KeyCode == 40 || KeyCode == 39) {
                selectNum == $("#SearchBox tbody tr").length - 1 ? selectNum = -1 : "";
                selectNum++;
                This.PickOn(selectNum)
            } else if (KeyCode == 38 || KeyCode == 37) {
                selectNum <= 0 ? selectNum = $("#SearchBox tbody tr").length : "";
                selectNum--;
                This.PickOn(selectNum)
            } else if (KeyCode == 13 && selectNum != -1) {
                This.Check(selectNum)
            } else {
                //初始化成功匹配的数组
                This.Succ_num = []
                //初始化高亮索引
                selectNum = -1;
                // 获取表单的文本
                var IP_txt = $(this).val()
                // 匹配文本
                for (var i = 0, k = This.Arr.length; i < k; i++) {
                    i == 3004 ? i = 3005 : i = i
                    if (JSON.stringify(This.Arr[i]).indexOf(IP_txt) > -1) {
                        This.Succ_num.push(This.Arr[i])
                        if (This.Succ_num.length >= 4) {
                            break;
                        }
                    }
                }
                var Str = "";
                // 生成html代码
                for (var i = 0, k = This.Succ_num.length; i < k; i++) {
                    var bgc = ""
                    i % 2 == 0 ? bgc = "#efefef" : bgc = "#FFF";
                    var a = This.Succ_num[i].c;
                    var b = This.Succ_num[i].n;
                    var c = This.Succ_num[i].p;
                    a.indexOf(IP_txt) > -1 ? a = This.Matched(a, IP_txt) : "";
                    b.indexOf(IP_txt) > -1 ? b = This.Matched(b, IP_txt) : "";
                    c.indexOf(IP_txt) > -1 ? c = This.Matched(c, IP_txt) : "";
                    Str += "<tr style=\"height:35px;line-height:35px;background:" + bgc +
                        ";color:#333;cursor:pointer\" title=\"" + This.Succ_num[i].c + "-" + This.Succ_num[i].n + "\">" +
                        "<td align=\"center\" width=\"30%\">" + a + "</td>" +
                        "<td align=\"center\" width=\"30%\">" + b + "</td>" +
                        "<td align=\"center\" width=\"30%\">" + c + "</td>" +
                        "</tr>"
                }
                $("#SearchBox tbody").html(Str)
                $("#SearchBox tbody tr").click(function () {
                    $(This.Dom).val($(this).attr("title"))
                    $("#SearchBox").css("display", "none")
                })
            }
        }).click(function (e) {
            $("#SearchBox").css("display", "block")
            return false
        })
        $("body").not($("#SearchBox")).click(function (e) {
            $("#SearchBox").css("display", "none")
        })
    },
    // 选中样式
    PickOn: function (selectNum) {
        $("#SearchBox tbody tr:even").css("background", "#efefef")
        $("#SearchBox tbody tr:odd").css("background", "#fff")
        $("#SearchBox tbody tr:eq(" + selectNum + ")").css("background", "#ffd2d6")
    },
    // 匹配高亮
    Matched: function (content, MatchedVal) {
        // 匹配文本长度
        var MatchedVal_length = MatchedVal.length
        // 被匹配文本长度
        var Content_length = content.length
        if (content.indexOf(MatchedVal) > -1) {
            var i = content.indexOf(MatchedVal)
            content = "<span>" + content.slice(0, i) + "</span><span style=\"color:red;\">" + MatchedVal + "</span><span>" + content.slice(content.indexOf(MatchedVal) + MatchedVal.length, Content_length) + "</span>"
        }
        return content
    },
    // 确定选中
    Check: function (selectNum) {
        $(this.Dom).val($("#SearchBox tbody tr:eq(" + selectNum + ")").attr("title"))
        $("#SearchBox").css("display", "none")
    }
}