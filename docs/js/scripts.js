/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
import { s } from './lcs.js';

$('#timetable > a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')

})

$(document).ready(function() {
  $('#openstudio').click(function(event) {
    window.location = "mailto:openlivecode@protonmail.ch";
  });
});

let interactive = new p5(s, 'p5lcs');