$(function() {
  // クリックしたときの関数
  $('.tab li').click(function() {

    // 〜〜コンテンツについての処理〜〜
    //クリックされたタブの番号をindexに格納。
		var index = $('.tab li').index(this);
    //コンテンツを一旦全て非表示に。
		$('.contents li').css('display','none');
    // クリックされた番号のタブを表示。
		$('.contents li').eq(index).css('display','block');


    // 〜〜タブについての処理〜〜
    // 一度タブについている'tab_current'を消し
		$('.tab li').removeClass('tab_current');
    //クリックされたタブのみに'tab_current'をつける。
		$(this).addClass('tab_current')
	});
});
