/**
 * Created by Administrator on 2017-02-10.
 */
$(function(){
    $('.accordion ul ul').hide();

    $('.accordion > ul > li > a').on('click',function(){

        var element = $(this).parent('li');

        if(element.hasClass('open')){
            element.removeClass('open');
            element.find('ul').slideUp();

        }else{
            element.addClass('open');
            element.children('ul').slideDown();
        }
    });

});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){

    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}