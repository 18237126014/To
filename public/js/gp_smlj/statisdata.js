/**
 * Created by Administrator on 2018-01-24.
 */
var s_data = {
    id: 247244,
    loadingTime: "",
    init: function (setting) {
        if (setting == undefined || setting.url == undefined || setting.token == undefined) {
            return;
        };
        //加载前
        this.httpRequest({
            url: "/control/addData/openPage",
            type: "get",
            data: {
                token: setting.token,
                url: setting.url
            },
            succfun: function (resultdata) {
                s_data.id = resultdata.data;
                if (s_data.loadingTime != "") {
                    s_data.setloadingTime();
                }
            }
        });

        //加载完成后
        $(window).load(function () {
            if (s_data.id != 247244) {
                s_data.setloadingTime();
            } else {
                s_data.loadingTime = new Date().getTime();
            }
        });

        //页面关闭时
        $(window).bind("beforeunload",
            function () {
                s_data.httpRequest({
                    url: "/control/addData/pageclose",
                    type: "get",
                    data: {
                        id: s_data.id
                    },
                    succfun: function (resultdata) {

                    }
                });
            }
        )
    },
    setloadingTime: function () {
        this.httpRequest({
            url: "/control/addData/pageLoding",
            type: "get",
            data: {
                id: this.id
            },
            succfun: function (resultdata) {

            }
        })
    },
    httpRequest: function (setting) {
        //setting={type:"",url:"",data:"",succfun:"",errfun:""}
        $.ajax({
            type: setting.type,
            // url: "http://10.2.0.101:8081" + setting.url,
            url: "http://119.23.58.158:8081" + setting.url,
            data: setting.data,
            dataType: "jsonp",
            success: function (msg) {
                if (msg.status == "Success") {
                    setting.succfun(msg);
                }
                if (msg.status == "Fail" && setting.errfun != undefined) {
                    setting.errfun(msg);
                }
            },
            error: function (xhr) {
                if (setting.errfun != undefined) setting.errfun();
            }

        });

    },
    getUrlPara: function (name) {
        var burl = decodeURI(window.location.href);
        var para = burl.substr(burl.indexOf("?") + 1)
        var paraarr = new Array()
        var paraarr = para.split("&")
        var parakey = new Array()
        var parabvalue = new Array()

        for (var i = 0; i < paraarr.length; i++) {
            parakey[i] = paraarr[i].substr(0, paraarr[i].indexOf("="));
            parabvalue[i] = paraarr[i].substr(paraarr[i].indexOf("=") + 1);
        }
        for (var i = 0; i < paraarr.length; i++) {
            if (parakey[i] == name) {
                return parabvalue[i];
            }
        }
    },

    setOperInfo: function (param) {
        var data = {
            SPLDID: this.id,
            OperID: param.OperID,
            StockCode: param.StockCode,
            PhoneNumber: param.PhoneNumber,
            WXNumber: param.WXNumber
        };
        this.httpRequest({
            url: "/control/addData/setpageoperinfo",
            type: "get",
            data: data,
            succfun: function (resultdata) {

            }
        })

    },
    getKeywordName: function (callfun, errfun) {
        this.httpRequest({
            url: "/control/getdata/getkeyword",
            type: "get",
            data: {
                k: s_data.getUrlPara('k')
            },
            succfun: function (resultdata) {
                callfun(resultdata);
            },
            errfun: function () {
                errfun();
            }
        })
    }
};