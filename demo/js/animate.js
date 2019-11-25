$(function() { 
    var marginTop = 0;      
    var bool = false;
    setInterval(function() {        
        if (bool) return; //判断运行和停止
        $(".company li:first").animate({ marginTop: marginTop -= 2 }, 10, function() {
            if (!$("this").is(":animated")) { //判断是否有一个动画节点
                if ((-marginTop) > $(this).height()) { //判断移出位置是否超过高度
                    $(this).css("margin", "10px 1vw 0 1vw");
                    $(this).appendTo($(".company"));  //把第一个节点移到ul后面
                    marginTop = 10;    //重新设置移动数值      
                }          
            }
        });      
    }, 100);

    $(".company").mouseover(function() {   //li鼠标移入，停止移动
        bool = true;      
    });      
    $(".company").mouseout(function() {
        bool = false;      
    });


    //左滑动隐藏
    jQuery.fn.slideLeftHide = function(speed, callback) {
        this.animate({
            width: "hide",
            paddingLeft: "hide",
            paddingRight: "hide",
            marginLeft: "hide",
            marginRight: "hide"
        }, speed, callback);
    };
    //左滑动显示
    jQuery.fn.slideLeftShow = function(speed, callback) {
        this.animate({
            width: "show",
            paddingLeft: "show",
            paddingRight: "show",
            marginLeft: "show",
            marginRight: "show"
        }, speed, callback);
    };
    //右滑动隐藏
    jQuery.fn.slideRightHide = function(speed, callback) {
        this.animate({
            width: "hide",
            paddingRight: "hide",
            paddingLeft: "hide",
            marginRight: "hide",
            marginLeft: "hide"
        }, speed, callback);
    };

    //右滑动显示
    jQuery.fn.slideRightShow = function(speed, callback) {
        this.animate({
            width: "show",
            paddingRight: "show",
            paddingLeft: "show",
            marginRight: "show",
            marginLeft: "show"
        }, speed, callback);
    }
})