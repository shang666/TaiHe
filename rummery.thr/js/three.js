$(function() {

	$('#banner_full').mouseenter(function() {
		$('.subNav').hide();
		$('.nav li').removeClass('navBlod');
	});

	$('#banner_full').css('height', $(window).height() - 100);
	$('.bx').click(function() {
		$('.fullbg').fadeIn(300);
		$('#' + $(this).attr('name')).fadeIn();
	});
	$('.fullbox .close').click(function() {
		$('.fullbg').fadeOut(300);
		$('.fullMb').hide();
	});
	$('.Nav4').click(function() {
		$('#mapp').attr('src', 'map.asp');
	});
	var bg_id = $('#banner_full');
	var bg_box = bg_id.find('li');
	var bg_length = bg_box.length;
	bg_id.after("<div id=\"bg_control\"></div>");
	$('#bg_control').append("<ul id=\"bg_page\"></ul>");
	$('#bg_control').append("<div id=\"bg_number\"><h1>1</h1><h2>1</h2></div>");
	for(var i = 0; i <= bg_length - 1; i++) {
		$('#bg_page').append("<li></li>");
	};
	$('#bg_control').prepend("<div id=\"bg_up\"></div>");
	$('#bg_control').append("<div id=\"bg_down\"></div>");
	bg_li = $('#bg_page li');
	bg_box.eq(0).fadeIn();
	bg_li.eq(0).addClass('on');
	$('#bg_number h2').html(bg_length);

	function bg_down() {
		bg_box.fadeOut();
		bgon = $('#bg_page .on').index() + 1;
		if(bgon > bg_length - 1) {
			$('#bg_number h1').html(1);
			bg_box.eq(0).fadeIn();
			bg_li.removeClass('on');
			bg_li.eq(0).addClass('on');
		} else {
			$('#bg_number h1').html(bgon + 1);
			bg_box.eq(bgon).fadeIn();
			bg_li.removeClass('on');
			bg_li.eq(bgon).addClass('on');
		}
	};

	function bg_up() {
		bg_box.fadeOut();
		bgon = $('#bg_page .on').index() - 1; /*上一个索引值*/
		if(bgon < 0) {
			$('#bg_number h1').html(bg_length);
			bg_box.eq(bg_length - 1).fadeIn();
			bg_li.removeClass('on');
			bg_li.eq(bg_length - 1).addClass('on');
		} else {
			$('#bg_number h1').html(bgon + 1);
			bg_box.eq(bgon).fadeIn();
			bg_li.removeClass('on');
			bg_li.eq(bgon).addClass('on');
		}
	};
	bg_li.click(function() {
		bg_box.fadeOut();
		bg_li.removeClass('on');
		$(this).addClass('on');
		bg_box.eq($(this).index()).fadeIn();
	});
	$('#bg_up').click(function() {
		bg_up()
	});
	$('#bg_down').click(function() {
		bg_down()
	});
	bg_time = setInterval(function() {
		bg_down()
	}, 5000);
	$('#bg_control,#banner_full li .hotea').hover(function() {
		clearInterval(bg_time);
	}, function() {
		bg_time = setInterval(function() {
			bg_down()
		}, 5000);
	});

	function countFix() {
		var bodyHeight = $(window).height() - 100;
		var bodyWidth = $(window).width();
		$('.hotea').css({
			right: 15,
			top: bodyHeight - 400
		});
		$('.fullbyfbox .fbox').css({
			height: bodyHeight - 430
		});
		$('.fullbox .fullM').css({
			height: bodyHeight + 20
		});
		$('.fullbg').css({
			height: bodyHeight + 100,
			width: bodyWidth
		});
		$('.by1').css({
			height: bodyHeight - 380
		});
		$('#mapp').css({
			height: $('.fullM').height() - 270
		});
		$('.boxNav').css({
			bottom: 45,
			width: bodyWidth
		});
		$('#bg_control').css({
			left: (bodyWidth - 115) / 2,
			bottom: 150
		});
		$('#hotelnews').css({
			height: $('.fullM').height() - 80
		});
		var hns = $("#hotelnews").height();
		if(hns > 700) {
			h1 = 5;
		} else if(hns >= 524) {
			h1 = 4;
		} else {
			h1 = 3;
		};
		$('#hotelnews').attr('src', 'hotelnews.aspx?count=' + h1);

		$('#header').css({
			width: bodyWidth
		});
		$('#footer').css({
			width: bodyWidth,
			top: bodyHeight - 55
		});
		var bg_box = $('#banner_full').find('.hotelImg');
		$('#banner_full').css({
			width: bodyWidth,
			height: bodyHeight
		});
		var bg_length = bg_box.length;
		for(var i = 0; i <= bg_length - 1; i++) {
			bg_w = bg_box.eq(i).width();
			bg_h = bg_box.eq(i).height();
			bg_box.eq(i).width(bodyWidth);
			bg_box.eq(i).height(bg_box.eq(i).width() / bg_w * bg_h);
			bg_box.eq(i).css({
				top: -(bg_box.eq(i).height() - bodyHeight) / 2
			});
			if(bg_box.eq(i).height() < bodyHeight) {
				bg_box.eq(i).height(bodyHeight);
				bg_box.eq(i).width(bg_box.eq(i).height() / bg_h * bg_w);
				bg_box.eq(i).css({
					top: 0
				});
			}
			bg_box.eq(i).css({
				left: -(bg_box.eq(i).width() - bodyWidth) / 2
			});
		}
	};
	$(window).resize(function() {
		countFix();
	});
	countFix();
});