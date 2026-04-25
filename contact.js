const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    successMsg.style.color = "red";
    successMsg.textContent = "Please fill all fields";
    return;
  }

  if (!emailInput.value.includes("@")) {
    successMsg.style.color = "red";
    successMsg.textContent = "Enter valid email";
    return;
  }

  successMsg.style.color = "green";
  successMsg.textContent = "Message sent successfully";

  form.reset();
});
