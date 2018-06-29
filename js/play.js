"use strict";

 $(function() {
     $('#playbutton').click(function () {
         $('#playOutput').text($('playInput').val());
     });

     $('.importante').on('mouseover', function () {
         $(this).css('background-color', 'yellow');
     })
 })