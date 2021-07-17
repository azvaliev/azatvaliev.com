
var animateWelcome = setInterval(function() {
  if (document.getElementById('welcome').textContent == "Welcome...") {
    window.location.href = "https://azatvaliev.com/home.html";
  }
  else {
    document.getElementById('welcome').textContent = document.getElementById('welcome').textContent + ".";
  }
}, 800);
