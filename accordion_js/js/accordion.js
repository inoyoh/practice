$(function(){
  // 一旦コンテンツを隠す
  $(`.panel__content`).hide();
  // タイトルをクリックした際の挙動
  $(`.panel__title`).click(function(){
    // this(タイトルをクリックした要素）の次の要素を表示する
    $(this).next().slideToggle(500);
  });
});
