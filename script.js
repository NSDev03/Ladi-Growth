document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  // Reset error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("addressError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var message = document.getElementById("message").value;

  // Validate inputs
  if (name === "") {
    document.getElementById("nameError").innerHTML = "Please enter your name.";
  }
  if (email === "") {
    document.getElementById("emailError").innerHTML = "Please enter your email.";
  }
  if (phone === "") {
    document.getElementById("phoneError").innerHTML = "Please enter your phone number.";
  }
  if (address === "") {
    document.getElementById("addressError").innerHTML = "Please enter your address.";
  }
  if (message === "") {
    document.getElementById("messageError").innerHTML = "Please enter your message.";
  }
}