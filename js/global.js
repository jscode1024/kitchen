var contHeight = $(".k-header").height();
$(".k-content").css({
    "margin-top": contHeight
});

$(function(){
	$('body').on('click','.arrow_left',function(){
		history.go(-1);
	});
	$('body').on('click touchstart','.kit_nav li',function(){
		var thisIndex = $(this).index();
		$(this).addClass('sub_active').siblings().removeClass('sub_active');
		$('.main_list').eq(thisIndex).addClass('list_active animated bounceInRight').siblings().removeClass('list_active animated bounceInRight');
	});
	
	/*计数*/
	$(".sug_txt>textarea").keyup(function() {
   		var ediTxt = $(".sug_txt>textarea").val();
   		var ediTxtLen = ediTxt.length;
   	
   		if(ediTxtLen > 60) {
   			ediTxtLen = 60;
   			$(this).val($(this).val().substring(0, 60));
   			limitWord();
   		}
   		$(".cont_tips").text(ediTxtLen);
   	});
   	/*提交*/
   	$('#intTxt').on('input propertychange', function () {
        var inpVal = $("#intTxt").val();
        inpVal == "" ? $('.sug_sub .sub_btn').removeClass('sub_btn_on') : $('.sug_sub .sub_btn').addClass('sub_btn_on');
    });
   	/*好评&差评*/
// 	$('body').on('click','.icon_bad',function(){
// 		$(this).toggleClass('icon_bad_on');
// 	});
// 	$('body').on('click','.icon_good',function(){
// 		$(this).toggleClass('icon_good_on');
// 	});
	$('body').on('touchstart','.details_top>ul li',function(){
   		if($(this).index() == 0){
   			$(this).find('span.icon_bad').toggleClass('icon_bad_on');
   			$(this).siblings().find('span').removeClass('icon_good_on');
   		}else if($(this).index() == 1){
   			$(this).find('span.icon_good').toggleClass('icon_good_on');
   			$(this).siblings().find('span').removeClass('icon_bad_on');
   			
   		}
   	});
   	var winHeight = $(window).height();   //获取当前页面高度
	$(window).resize(function(){
	   var thisHeight=$(this).height();
	    if(winHeight - thisHeight >50){
	         //当软键盘弹出，在这里面操作
			$('.k-footer').hide();
	    }else{
	        //当软键盘收起，在此处操作
			$('.k-footer').show();
	    }
	});
})
/*common*/
function previewFile() {
	var preview = $('.sug_file').find('img')[0];
	var file    = $('.sug_file').find('input[type=file]').prop('files')[0];
	var reader  = new FileReader();
	console.log(file)
	reader.onloadend = function (e) {
    	preview.src = reader.result;
	}

	if (file) {
    	reader.readAsDataURL(file);
	} else {
    	preview.src = "";
	}
}
/*Layer*/
function userMenuLayer(){
	layer.open({
		type: 1,
        anim: 'up',
        content: $('.user_layer').html(),
        style: 'position:fixed; bottom:0; left:0; width: 100%; border:none;'
    });
}
function exitLayer(){
	layer.open({
        anim: 'up',
        title: "退出账号",
        content: '您确定要退出吗？',
        btn: ['确认', '取消']
    });
}
function noneWord() {//提示
    layer.open({
        content: '投诉不能为空白！',
        skin: 'msg',
        time: 1 //2秒后自动关闭
    });
}
function limitWord() {//字数超限
    layer.open({
        content: '字数超限制！',
        skin: 'msg',
        time: 1 //2秒后自动关闭
    });
}
function successLayer(){
	layer.open({
        content: '提交成功！',
        skin: 'msg',
        time: 1 //2秒后自动关闭
    });
}
function limitNums() {//字数超限
    layer.open({
        content: '选项达上限！',
        skin: 'msg',
        time: 1 //2秒后自动关闭
    });
}