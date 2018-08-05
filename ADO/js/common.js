$(document).ready(function (){
	/* 아이디, 비밀번호 포커스시 이벤트 */
	$(".id_area, .pwd_area").on({
		"focusin":function  (e) {
			if ( $(this).val() == "" ) $(this).prev().text("");
			else $(this).prev().text();
		},
		"focusout":function  (e) {
			if ( $(this).val() == "" ) {
				if ( $(this).hasClass("id_area") ) $(this).prev().text("아이디");
				else $(this).prev().text("비밀번호");
			} else {
				$(this).prev().text("");
			}
		}
	});

	/* 슬라이더 */
	function slider () {
		var $slider = $(".slider")
		var $visual = $(".visual > li");
		var nowNum = 0;		
		var nextNum;			
		var playNext;				
		var total = $(".visual > li").length;

		// 자동실행
		function timer () {
			playNext = setInterval(function  () {
				nextNum = nowNum+1;
				if ( nextNum==total ) nextNum=0;

				$visual.eq(nowNum).css("left",0).stop().animate({left:"-100%"});
				$visual.eq(nextNum).css("left","100%").stop().animate({left:0});

				nowNum++;
				if ( nowNum==total ) nowNum=0;
			}, 3000)
		}
		timer();
	}
	slider();	
});