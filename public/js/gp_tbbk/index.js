/**
 * Created by Administrator on 2018-01-24.
 */


$(function () {

    var params = { "code": "1025" };
    var url = "http://vip.nanhong800.com/ashx/StockQRcodeSerices.ashx";
    // $(".wechat-num").html();
    // $(".wechat-ewm").attr("src", "");

    $.ajax({
        type: "GET",
        url: url,
        data: params,
        datatype: "json",
        processData: true,
        success: function (json) {
            var obj = eval("(" + json + ")");
            $(".wechat-num").html("微信号:" + obj[0].name);
            $(".wechat-ewm").attr("src", obj[0].src);
        },
        error: function (err) {

            alert(2);
        }
    });



});
