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
  $('#open_studio').click(function(event) {
    window.location = "mailto:open.live.code@proton.me";
  });
});

let interactive = new p5(s, 'p5lcs');

mail_entry = document.getElementById("user_mail").value
button_news = document.getElementById("button-newsletter")

function sendEmail() {
  Email.send({
    Host: "",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: 'open.live.code@proton.me',
    From: mail_entry,
    Subject: "I want to receive newsletter",
    Body: "Keeo me up to date!!",
  })
    .then(function () {
      mail_entry = "Thank you!"
      button_news.disabled = true;
    });
}