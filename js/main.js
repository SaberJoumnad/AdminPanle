function showpassword() {
    var x = document.getElementById("showInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }