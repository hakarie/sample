function ValidateEmail() {
  const emailInput = document.getElementById("email");
  const emailValue = emailValue.trim();
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(emailValue)) {
    return true;
  }
  alert("Invalid Email");
  return false;
}

function ValidateName() {
  const nameInput = document.getElementById("name");
  const nameValue = nameValue.trim();
  const regex = /^[a-zA-Z\s]+$/;
  if (regex.test(nameValue)) {
    return true;
  }
  alert("Invalid Name");
  return false;
}

function form() {
  if (ValidateEmai() && ValidateName()) {
    window.location.href = "submit.html";
    return true;
  }
}

