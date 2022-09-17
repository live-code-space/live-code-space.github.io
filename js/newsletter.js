
function sendEmail() {
	Email.send({
	Host: "127.0.0.1",
	Username : "open.live.code@proton.me",
	Password : "_lcs*zurich22",
	To : 'open.live.code@proton.me',
	From : document.getElementById("user_mail").value,
	Subject : "Signed up for the newsletter"
	}).then(
	 message => document.getElementById("news").innerHTML = "Sent successfuly!",
   document.getElementById("news_under").innerHTML = "You'll hear back from us."
	);
}