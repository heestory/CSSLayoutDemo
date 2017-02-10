/**
 * Created by Administrator on 2017-01-20.
 */
$(function(){
    $('.slideBtn ul ul').hide();

   $('.slideBtn > ul > li > a').on('click',function(){

       var element = $(this).parent('li');

       if(element.hasClass('open')){
           element.removeClass('open');
           element.find('ul').slideUp();

       }else{
           element.addClass('open');
           element.children('ul').slideDown();
       }
   }) ;
});