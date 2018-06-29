 "use strict";

 (function() {

     $('#jq').click(function () {
         $('#jq').css('background-color', 'cyan');

     });

     $('p').dblclick(function(){
         $('p').css('font-size', '20px');
     });

     $('li').hover(function() {
         $('li').css('color', 'red');
     }, function(){
         $('li').css('color', 'black');
     });

     $('#name').keyup(function(){

     })


 })();