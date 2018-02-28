<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>每天一个涨停股</title>
    <link rel="stylesheet" href="{{url('css/share.css')}}">
    <link rel="stylesheet" href="{{url('css/everztg/sj_everztg.css')}}">
    <link rel="stylesheet" href="{{url('css/everztg/layer.css')}}">
    <script src="{{url('js/jquery.js')}}"></script>
    <script src="{{url('js/everztg/layer.js')}}"></script>
    <script src="{{url('js/everztg/sj_everztg.js')}}"></script>
</head>
<body>
    <div class="top">
        <img src="{{url('images/everztg/top_02a1.jpg')}}" alt="">
        <img src="{{url('images/everztg/top_03a.jpg')}}" alt="" style="margin-top: -.2rem;">
        <img src="{{url('images/everztg/top_04.jpg')}}" alt="">
        <img src="http://img.zengwf.com/images/wxtg/kenan198808.jpg" class="wxh">
        <span class="wxnumber">kenan198808</span>
    </div>
    <div class="content">
        <p>12月历史战绩！这些股，领到的都赚大发了！</p>
        <div class="yii_template" >
            <table border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                    <th>股票名称</th>
                    <th>代码</th>
                    <th>题材</th>
                    <th>关注日期</th>
                    <th>收益</th>
                </tr>
                <tr class="fs1">
                    <td>复星医药</td>
                    <td>600196</td>
                    <td>医药龙头</td>
                    <td>12月01日</td>
                    <td>26.5%</td>
                </tr>
                <tr>
                    <td>长川科技	</td>
                    <td>300604</td>
                    <td>集成电路</td>
                    <td>12月06日</td>
                    <td>22.3%</td>
                </tr>
                <tr>
                    <td>文一科技	</td>
                    <td>600520</td>
                    <td>紫光集团举牌</td>
                    <td>12月09日</td>
                    <td>55.6%</td>
                </tr>
                <tr>
                    <td>青岛啤酒	</td>
                    <td>002380</td>
                    <td>复星医药收购成为第二大股东</td>
                    <td>12月13日</td>
                    <td>23.3%</td>
                </tr>
                <tr>
                    <td>重庆燃气</td>
                    <td>600917</td>
                    <td>天然气涨价</td>
                    <td>12月20日</td>
                    <td>35.5%</td>
                </tr>
                <tr class="bot">
                    <td>贵州燃气</td>
                    <td>600903</td>
                    <td>天然气涨价</td>
                    <td>12月20日</td>
                    <td>61.5%</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="content_t">
        <div class="content_1">
            <div class="txt_1 yii_template" type="edit" name="t5">
                <p>高手布局  1月潜力牛股</p>
                <p>1月第一批牛股已送出，名额有限，欲领从速</p>
            </div>

        </div>
        <div class="content_2"></div>
        <div class="content_3"></div>
        <div class="content_4">
            <div class="txt_2">
                <p class=" yii_template" >这3只股已经跌无可跌，即将爆发</p>
            </div>
        </div>
        <div class="content_5">
            <a href="javascript:;" class="btn"></a>
            <p class=" yii_template" type="edit" name="t7">仅剩<span id="num2">202</span>名额</p>
        </div>
    </div>
    <div class="footer">
        <p>
            投资有风险，入市须谨慎
            <br>
            金创互动科技（深圳）有限公司
            <br>
            工信部备案：粤ICP备16102840号 <br>
        </p>
    </div>
    <div class="fixd_box">
        <div class="tex yii_template" type="edit" name="t9">
            <p>扫码免费领取</p>
            <p>已有<span id="num">460</span>人 领取</p>
        </div>
        <div class="ewm_1">
            <img src="http://img.zengwf.com/images/wxtg/kenan198808.jpg" class="wxqrcode">
        </div>
    </div>
    <div class="layer_box layui-layer-wrap" style="display: none;">
        <img src="http://img.zengwf.com/images/wxtg/kenan198808.jpg" class="wxqrcode">
        <div class="close_x"></div>
        <p>还可搜索微信号：<span class="wxnumber">kenan198808</span>领取牛股</p>
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
</html>