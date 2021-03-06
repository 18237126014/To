<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>交易侠</title>
    <link rel="stylesheet" href="{{url('css/jyx/sj_jyx.css')}}">
    <link rel="stylesheet" href="{{url('css/sj_form.css')}}">
    <script src="{{url('js/jquery.js')}}"></script>
</head>
<body>
<div class="head">
    <div class="h-img">
        <div class="h-img1">
            <img src="http://img.zengwf.com/images/jyx/sj/a1.png" alt=" ">
        </div>
        <ul class="downs">
            <li><a href="javascript:void(0)"><img src="http://img.zengwf.com/images/jyx/sj/dx.png" alt=""></a></li>
            <li><a href="javascript:void(0)"><img src="http://img.zengwf.com/images/jyx/sj/sx.png" alt=""></a></li>
        </ul>
    </div>
</div>
<div class="center">
    <div class="add">
        <h1>金十行情软件v1.0正式版上线，超酷图表体验，为您关注行情，增加一利器!</h1>
        <div class="img"><img src="http://img.zengwf.com/images/jyx/sj/pre_bg.jpg" alt=" "></div>
    </div>
    <div class="more">
        <div class="m-img">
            <div class="m-img1">
                <img src="http://img.zengwf.com/images/jyx/sj/B-imac1.png" alt="">
            </div>
            <div class="m-img2">
                <img src="http://img.zengwf.com/images/jyx/sj/B-imac2.png" alt="">
            </div>
            <div class="m-img3">
                <img src="http://img.zengwf.com/images/jyx/sj/B-imac3.png" alt="">
            </div>
        </div>
        <h2>拥有多种图表模式，简洁明了，可根据个人需求任意切换</h2>
    </div>
    <div class="price">
        <div class="p-img"><img src="http://img.zengwf.com/images/jyx/sj/C.png" alt=""></div>
        <h1>提供100多个常用品种交易报价，报价精准</h1>
    </div>
    <div class="use">
        <div class="p-img"><img src="http://img.zengwf.com/images/jyx/sj/D.jpg" alt=""></div>
        <h2>具备实用性极强的图形绘制功能，操作简单方便，一用就会</h2>
    </div>
    <div class="line">
        <div class="l-img">
            <div class="l-img1">
                <img src="http://img.zengwf.com/images/jyx/sj/E1.png" alt="">
            </div>
            <div class="l-img2">
                <img src="http://img.zengwf.com/images/jyx/sj/E2.png" alt="">
            </div>
        </div>

        <h2>提供多种常用的技术分析指标，包括布林线、KDJ指标、MACD指标、成交量和MA移动平均线等</h2>
    </div>
</div>
<div class="copyright">
    <h2 style="margin-bottom: 0;">投资有风险,入市需谨慎</h2>
    <p>&copy; 版权所有：韩城集升商贸有限公司</p>
</div>
{{--写跳转过来的页面--}}
<input type="hidden" name="referr" value="<?= isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] :'' ?>">
<!--遮罩层-->
<div class="layui-layer-shade" id="layui-layer-shade3" time="3" style="display:none;"></div>
<!--表单-->
<div class="layui-layer layui-layer-page layer-form layer-anim" id="layui-layer3" type="page" showtime="0"time="3" contype="object" style="display: none;left:12rem;top:23rem;">
    <div id="" class="layui-layer-content">
        <div class="modal-form layui-layer-wrap" id="modal-form" style="display: block;">
            <p style="font-size: 40px;color:#41A5DD ;text-align: center;padding-top: 40px;">免费下载</p>
            <p style="font-weight:normal; color:#999; font-family:宋体; font-size:14px;text-align: center;padding-top:10px;">（请正确填写手机号码，以便获取软件账号和密码！）</p>
            <form id="form-1" class="validate nice-validator n-default" action="index1.html#" method="post" novalidate="novalidate">

                <input type="hidden" name="_token" value="{{csrf_token()}}" id="_token">
                <div class="form-content">
                    <div class="form-group">
                        <label for="txtName1" class="form-label">姓&nbsp;&nbsp;&nbsp;&nbsp;名</label>
                        <div class="form-input">
                            <input type="text" name="txtName1" id="txtName1" aria-required="true">
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="form-group">
                        <label for="txtPhone1" class="form-label">手机号</label>
                        <div class="form-input">
                            <input type="text" name="txtPhone1" id="txtPhone1" placeholder="" aria-required="true">
                        </div>
                        <div class="clear"></div>
                    </div>



                    <div class="form-group">
                        <label for="txtSmsCode1" class="form-label">验证码</label>
                        <div class="form-input">
                            <input type="text" name="txtSmsCode1" id="txtSmsCode1" class="input-vcode" maxlength="6">

                            <button id="btnYzm1" class="dz_yzm" value="免费获取验证码" onclick="javascript:return false;">
                                <span id="SendTxt1">免费获取验证码 </span>
                            </button>
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div class="form-group" style="height: 70px">
                        <span class="form-group_button " id="btn-submit" type="button" onclick="">立即下载</span>

                    </div>
                    <div class="form-footer-text">
                        <p>我们采用加密技术确保您的信息安全，您的联系信息仅用于发送技术指标，请放心提交</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <span class="layui-layer-setwin"><a class="layui-layer-ico layui-layer-close layui-layer-close2" href="javascript:void (0);"></a></span>
    <span class="layui-layer-resize"></span>
</div>
<!--微信二维码-->
<div class="weixin" style="display: none">
    <div class="wxewm">
        <img src="http://img.zengwf.com/images/wxh/HX201805.jpg" alt="" width="200">
    </div>
    <p class="tishi">如安装过程中遇到问题，请扫描二维码添加您的专属客服或添加微信号<span style="color:red">HX201805</span ></p>
    <p style="margin-top: 1rem;font-size: 2rem;text-align: center;" class="weix_colse">
        <a href="javascript:void(0)" class="wx_colse">关闭</a>
    </p>
</div>
</body>

<script>
    $(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if (clientWidth >= 640) {
                    docEl.style.fontSize = '100px';
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    });
</script>
<script>
    //获取所有的点击li标签，出现表单
    var Btns = $('.downs li a');
    //获取遮罩层和表单元素
    var mask = $('#layui-layer-shade3');
    var Form = $('#layui-layer3');
    $(Btns).click(function()
    {
        $(mask).css('display','block');
        $(Form).css('display','block');
    });
</script>
<script src="{{url('js/form.js')}}"></script>
</html>
