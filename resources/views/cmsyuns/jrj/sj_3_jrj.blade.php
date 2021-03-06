<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>金融界一站式app</title>
    <link rel="stylesheet" type="text/css" href="{{url('css/share.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('css/jrj/sj_jrj.css')}}">
    <link rel="stylesheet" href="{{url('css/sj_form.css')}}">
    <script src="{{url('js/jquery.js')}}"></script>
</head>
<body>
<div class="div-1">
    <h1>金融界</h1>
    <h2>您的智能投资助理</h2>
    <img class="img1" src="http://img.zengwf.com/images/jrj/btn_01.png" alt="" />
    <img class="img2" src="http://img.zengwf.com/images/jrj/btn_02.png" alt="" />
</div>
<div class="div-2">
    <div class="left-l">
        <img src="http://img.zengwf.com/images/jrj/section-1-pic-1.png" alt="" />
    </div>
    <div class="right-l">
        <h1><b>智头条</b></h1>
        <ul>
            <li>智能聚合一手财经情报</li>
            <li>只给你看最重要的</li>
        </ul>
    </div>
</div>
<div class="div-3">
    <div class="left-r">
        <h1><b>大V直播</b></h1>
        <ul>
            <li>数千专业分析师在线实时解盘</li>
            <li>做单不懂就问</li>
        </ul>
    </div>
    <div class="right-r">
        <img src="http://img.zengwf.com/images/jrj/section-2-pic-1.png" alt="" />
    </div>
</div>
<div class="div-4">
    <div class="left-l">
        <img src="http://img.zengwf.com/images/jrj/section-3-pic-1.png" alt="" />
    </div>
    <div class="right-l">
        <h1><b>智能做单</b></h1>
        <ul>
            <li>智能做单  操盘不求人</li>
        </ul>
    </div>
</div>
<div class="div-5">
    <div class="left-r">
        <h1><b>做单比赛</b></h1>
        <ul>
            <li>每天收益为正就能瓜分现金红包</li>
            <li>百万大奖等你来领</li>
        </ul>
    </div>
    <div class="right-r">
        <img src="http://img.zengwf.com/images/jrj/section-5-pic-1.png" alt="" />
    </div>
</div>
<div class="div-6">
    <div class="left-l">
        <img src="http://img.zengwf.com/images/jrj/section-6-pic-1.png" alt="" />
    </div>
    <div class="right-l">
        <h1><b>秒级行情</b></h1>
        <ul>
            <li>全市场行情实时刷新</li>
        </ul>
    </div>
</div>
<div class="div-7">
    <div class="left-r">
        <h1><b>套单诊断</b></h1>
        <ul>
            <li>智能做单 趋势研判  及时获知买卖参考</li>
        </ul>
    </div>
    <div class="right-r">
        <img src="http://img.zengwf.com/images/jrj/section-7-pic-1.png" alt="" />
    </div>
</div>
<div class="div-8">
    <div class="left-l">
        <img src="http://img.zengwf.com/images/jrj/section-8-pic-1.png" alt="" />
    </div>
    <div class="right-l">
        <h1><b>万2.5极速开户</b></h1>
        <ul>
            <li>交易佣金低至万2.5   三分钟极速开户</li>
        </ul>
    </div>
</div>
<div class="div-9">
    <img src="http://img.zengwf.com/images/jrj/btn-gotop_01.png" alt="" />
    <img src="http://img.zengwf.com/images/jrj/btn-gotop_02.png" alt="" />
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
        <img src="http://img.zengwf.com/images/wxh/HX201805.jpg" alt="" width="200">
    </div>
    <p class="tishi">如安装过程中遇到问题，请扫描二维码添加您的专属客服或添加微信号<span style="color:red">HX201805</span ></p>
    <p style="margin-top: 1rem;font-size: 2rem;text-align: center;" class="weix_colse">
        <a href="javascript:void(0)" class="wx_colse">关闭</a>
    </p>
</div>
</body>
<script>
    //获取所有的点击li标签，出现表单
    var Btns = $('.div-1 img,.div-9 img');
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