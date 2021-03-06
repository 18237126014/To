<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>黄金白银行情分析软件</title>
    <link rel="stylesheet" href="{{url('css/share.css')}}">
    <link rel="stylesheet" href="{{url('css/gold/sj_gold.css')}}">
    <link rel="stylesheet" href="{{url('css/sj_form.css')}}">
    <script src="{{url('js/jquery.js')}}"></script>
</head>
<body>
<div class="bg topbg">
    <img src="http://img.zengwf.com/images/gold/top.png" alt="" class="top-content">
    <ul class="downs">
        <li><a href="javascript:void(0)"><img src="http://img.zengwf.com/images/gold/icon.gif" alt=""></a></li>
        <li><a href="javascript:void(0)"><img src="http://img.zengwf.com/images/gold/icon2.gif" alt=""></a></li>
    </ul>
</div>
<div class="bg" style="background-color:#f8f8f8;text-align: center;">
    <img src="http://img.zengwf.com/images/gold/mid.png" alt="" style="width:49rem">
</div>

<div class="bg clearfix middle_bg">
    <div class="wrapper clearfix">
        <div class="dv_left">
            <a href="javascript:void(0)" class="ico1 icon1 cur" idx="1"></a>
            <a href="javascript:void(0)" class="ico1 icon2" idx="2"></a>
            <a href="javascript:void(0)" class="ico1 icon3" idx="3"></a>
        </div>
        <div class="dv_middle">
            <img src="http://img.zengwf.com/images/gold/imgc1.png" alt="" id="slide"  style="width:32rem">
        </div>
        <div class="dv_right">
            <a href="javascript:void(0)" class="ico2 icon4" idx="4"></a>
            <a href="javascript:void(0)" class="ico2 icon5" idx="5"></a>
        </div>
    </div>
</div>
<div class="bg footer_bg">
    <span>尊享智能曾经炒金利器带来的简单盈利体验</span>
    <a href="javascript:void (0)">
        <img src="http://img.zengwf.com/images/gold/footerdown.png" alt="">
    </a>
</div>


<div class="copyright">
    <h2 style="margin-bottom: 0;font-size: 0.1rem;">投资有风险,入市需谨慎</h2>
    <p>&copy; 版权所有：韩城集升商贸有限公司</p>
</div>
{{--写跳转过来的页面--}}
<input type="hidden" name="referr" value="<?= isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] :'' ?>">
<!--遮罩层-->
<div class="layui-layer-shade" id="layui-layer-shade3" time="3" style="display:none;"></div>
<!--表单-->
<div class="layui-layer layui-layer-page layer-form layer-anim" id="layui-layer3" type="page" showtime="0"time="3" contype="object" style="display: none;left:13rem;top:25rem;">
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
        <img src="http://img.zengwf.com/images/wxh/01.jpg" alt="" width="200">
    </div>
    <p class="tishi">如安装过程中遇到问题，请扫描二维码添加您的专属客服或添加微信号<span style="color:red">HX201805</span ></p>
    <p style="margin-top: 1rem;font-size: 2rem;text-align: center;" class="weix_colse">
        <a href="javascript:void(0)" class="wx_colse">关闭</a>
    </p>
</div>
</body>
<script>
    (function (doc, win) {
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
    })
</script>
<script>
    //获取所有的点击li标签，出现表单
    var Btns = $('.downs li a,.footer_bg a');
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
<script src="{{url('js/gold/sj_gold.js')}}"></script>
</html>
