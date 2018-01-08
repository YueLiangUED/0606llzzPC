/* 
* @Author: Marte
* @Date:   2017-05-26 12:59:43
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-07 21:46:10
*/

$(document).ready(function(){
    // 页签切换
    $.fn.zztab = function (options) {
        $(this).each(function () {
            var $tab = $(this);
            var $btn = $(this).find(options.tabBtn);
            var $cont = $(this).find(options.tabContent);
            $btn.on('click', function () {
                $btn.removeClass('act');
                $(this).addClass('act');
                var index = $(this).index();
                var a = $cont.get(index);
                $cont.hide();
                $(a).show();
            });
        });
    };
    //显示遮罩层    
    function showMask(){     
        $("#mask").css("height",$(document).height());     
        $("#mask").css("width",$(document).width());     
        $("#mask").show();     
    }  
    //隐藏遮罩层  
    function hideMask(){     
          
        $("#mask").hide();     
    }
    $('.ex-tab').zztab({
        tabBtn: '.tab-nav li',
        tabContent: '.tab-content .tab-item'
    });
    //遮罩层
    $('.enter-btn').on('click', function () {
        showMask();
    });
    //pop关闭
    $('.pop-close, .pop-enter a').on('click', function () {
        var pop = $(this).parents('.pop');
        pop.hide();
        hideMask();
    });

    // 查询记录tab切换
    $('.query-tab').zztab({
        tabBtn: '.query-tab-btns li',
        tabContent: '.query-tab-content .query-tab-item'
    });

    $('#zz_return').on('click', function () {
        window.history.go(-1);
    });

    // 前端验证
    $('#telnum').on('input', function () {
        var tel = $(this).val();
		var $reg = /^1((3[4-9])|(5[0-2])|(5[8-9])|(8[8-9])|(82))\d{8}$/g;

        if (!$reg.test(tel)) {
            $('#telw-tip').show();
        } else {
            $('#telw-tip').hide();
        }
    });
    $('#llnum').on('input', function () {
        var val = $(this).val();
        var $reg = /^[1-9]{1}\d{2,}$/;
        if (!$reg.test(val)) {
            $('#llw-tip').show();
        } else {
            $('#llw-tip').hide();
        }
    });
});