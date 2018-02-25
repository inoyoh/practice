$(function(){
  $(`.panel__content`).hide();
  $(`.panel__title`).click(function(){
    $(this).next().slideToggle(500);
  });
});
