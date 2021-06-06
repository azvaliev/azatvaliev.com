
var animateWelcome = setInterval(function() {
  if (document.getElementById('welcome').textContent == "Welcome...") {
    document.getElementById('welcome').textContent = "Welcome";
  }
  else {
    document.getElementById('welcome').textContent = document.getElementById('welcome').textContent + ".";
  }
}, 1000);
