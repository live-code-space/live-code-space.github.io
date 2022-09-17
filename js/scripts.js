import { s } from './lcs.js';

$('#timetable > a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')

})

let interactive = new p5(s, 'p5lcs');

$(window).on('resize', function() {
  if($(window).width() < 768) {
      $('#times').addClass('py-5');
      
  }else{
      $('#times').removeClass('py-5');
  }
})

