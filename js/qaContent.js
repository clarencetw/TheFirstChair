// JavaScript Document
	jQuery(function(){
		// 幫 #qaContent 的 ul 子元素加上 .accordionPart
		// 接著再找出 li 中的第一個 div 子元素加上 .qa_title
		// 並幫其加上 hover 及 click 事件
		// 同時把兄弟元素加上 .qa_content 並隱藏起來
		jQuery('#qaContent ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('qa_title').hover(function(){
			jQuery(this).addClass('qa_title_on');
		}, function(){
			jQuery(this).removeClass('qa_title_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它，同時隱藏其它已經展開的項目
			// 反之則隱藏
			var jQueryqa_content = jQuery(this).next('div.qa_content');
			if(!jQueryqa_content.is(':visible')){
				jQuery('#qaContent ul li div.qa_content:visible').slideUp();
			}
			jQueryqa_content.slideToggle();
		}).siblings().addClass('qa_content').hide();
		// 全部展開
		jQuery('#qaContent .qa_showall').click(function(){
			jQuery('#qaContent ul.accordionPart li div.qa_content').slideDown();
			return false;
		});
 
		// 全部隱藏
		jQuery('#qaContent .qa_hideall').click(function(){
			jQuery('#qaContent ul.accordionPart li div.qa_content').slideUp();
			return false;
		});
	});