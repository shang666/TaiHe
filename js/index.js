$(function(){
	//微信
$('.Wx').mouseenter(function() {
	$('.WeiXin').show();
	$('.bdsharebuttonbox').hide();
});
$('.Wx').mouseleave(function() {
	$('.WeiXin').hide();
});
//微博
$('.Wb').mouseenter(function() {
	$('.bdsharebuttonbox').hide();
	$('.WeiBo').show();
});
$('.Wb').mouseleave(function() {
	$('.WeiBo').hide();
});
//分享
$('.Fx').mouseenter(function() {
	$('.bdsharebuttonbox').show();
});
$('.bdsharebuttonbox').mouseleave(function() {
	$(this).hide();
});
$('.right').mouseleave(function() {
	$('.bdsharebuttonbox').hide();
});

//$('.dcNav a:last').css('margin-right', '0');
//$('.newsListText a').each(function(i) {
//	var index = $(this).index();
//	index = index + 1;
//	if(index % 5 == 0) {
//		$(this).addClass('line');
//		};
//	});

window._bd_share_config = {
	"common": {
	"bdSnsKey": {},
	"bdText": "",
	"bdMini": "2",   //弹出框分享按钮的列数
	"bdPic": "",
	"bdStyle": "0",
	"bdSize": "16",    //分享按钮的尺寸
	"bdPopupOffsetLeft":"-200",//弹出框的位置
	"bdPopupOffsetTop":""//弹出框的位置
},
"share": {},
//"image": {
//	"viewList": ["qzone", "tsina", "tqq", "renren", "h163"],
//	"viewText": "分享到：",
//	"viewSize": "16"
//},
"selectShare": {
	"bdContainerClass": null,
	"bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "h163"]
	}
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
})
