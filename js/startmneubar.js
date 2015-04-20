
	jQuery(function(){
		jQuery(document).click(function(){
			//讀取mainMenu.css
			jQuery("#mainMenu").css('display','none');
		});
		jQuery("#mainMenu li").each(function(){
			var jQuerythis = jQuery(this);
			//找尋#mainMenu li中的ul標籤是否>0
			if(jQuerythis.find("ul").length>0){
				jQuery(this).children("a").append("<img src=img/icon/arrow.png class=img>");
				//a 後面加上項目符號 arrow.png 圖示
			}
		});
 
		jQuery("#startBtn a").click(function(){
			if(jQuery("#mainMenu").is(":visible")){	//判斷顯示與否
				jQuery("#mainMenu").slideUp();	//slideUp 效果
			}else{
				jQuery("#mainMenu").slideDown();	//slideDown 效果
				jQuery("#mainMenu ul").hide();	//mainMenu ul 隱藏
			}	
			//關閉連結
			return false;
		});
 
		jQuery("#mainMenu li a").click(function(){
			//定義jQuerythis jQueryparent jQuerynext
			var jQuerythis= jQuery(this),	
				jQueryparent = jQuerythis.parent(),
				jQuerynext = jQuerythis.next("ul"),
				_idx = jQueryparent.index();//取得索引
 
			if(jQuerynext.length>0){
				if(jQuerynext.is(":visible")){//判斷顯示與否
					jQuerynext.slideUp();	//slideUp效果
				}else{
					//先將父層兄弟的ul標籤關閉
					jQueryparent.siblings().find("ul").slideUp();
					jQuerynext.css('top',55*_idx).slideDown();
				}
				//關閉連結
				return false;
			}
		});			
 
 
		//消除連結虛線框
		jQuery("a").focus( function(){
			jQuery(this).blur();
		});
 
	});
