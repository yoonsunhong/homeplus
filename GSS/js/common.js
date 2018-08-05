$(document).ready(function (){
	/* 아이디, 비밀번호 포커스시 이벤트 */
	$(".id_area, .pwd_area").on({
		"focusin":function  (e) {
			if ( $(this).val() == "" ) $(this).prev().text("");
			else $(this).prev().text();
		},
		"focusout":function  (e) {
			if ( $(this).val() == "" ) {
				if ( $(this).hasClass("id_area") ) $(this).prev().text("ID");
				else $(this).prev().text("Password");
			} else {
				$(this).prev().text("");
			}
		}
	});
});