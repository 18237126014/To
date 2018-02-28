/**
 * Created by Administrator on 2018-01-24.
 */
PageInfo("微信领股10", "sll07Page01", "sll/97/page02", "63-wxlg34")


function autoScroll(obj) {
    $(obj).find("ul").animate({
        marginTop: "-36px" //这里写LI的高度
    }, 500, function() {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this);
    })
}
$(function() {

    CopyDetection("djc5958")



    $('.btn img,.bot p').click(function() {
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            shadeClose: true,
            shade: 0.8,
            area: '462px',
            content: $(".popBox"),
            skin: 'demo-class'
        })
    })

    $('.pclose').click(function(){
        layer.closeAll();
    })

    setInterval('autoScroll(".gun")', 3000);
    setInterval(function() {
        $(".yu").addClass("headerp");
        if($(".yu").hasClass("headerp")) {
            setTimeout(function() {
                $(".yu").removeClass("headerp")
            }, 2000)
        }
    }, 3000);

    setTimeout(function(){
        $(".posBottom").animate({
            width: "0px"
        }, 500, '', function() {
            $(".yu").animate({
                left: "0px"
            }, 500);
        })
    },10000)


    $('.yu').click(function() {
        $(".yu").animate({
            left: "-300px"
        }, 500, '', function() {
            $(".posBottom").animate({
                width: "100%"
            }, 500);
        })
    })

    $('.bot span').click(function() {
        $(".posBottom").animate({
            width: "0px"
        }, 500, '', function() {
            $(".yu").animate({
                left: "0px"
            }, 500);
        })
    })
    function ss() {
        var s = $(window).scrollTop();
        if(s > 420) {
            $(".posRight").show();
        } else {
            $(".posRight").hide();
        }
    }

    $(window).scroll(function() {
        ss();
    });
    $('.close').click(function() {
        $('.posRight').hide()
        $(window).unbind('scroll')
    })

})