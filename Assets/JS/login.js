
//checking
function check() {
  var storedName = localStorage.getItem("name");
  var storedPw = localStorage.getItem("pw");

  var userName = document.getElementById("userName");
  var userPw = document.getElementById("userPw");
  var userRemember = document.getElementById("rememberMe");

  if (userName.value == storedName && userPw.value == storedPw) {
     Location.assign("index.html");
  } else {
    alert("Error on login");
  }
}
