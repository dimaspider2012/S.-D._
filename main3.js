const buttonlog = document.querySelector(".buttonlog");
const buttonlogB = document.querySelector(".buttonlogB");
const login = document.querySelector("#login"); // Замість #login вставте правильний селектор
const password = document.querySelector("#password"); // Замість #password вставте правильний селектор
const message = document.querySelector(".message")
buttonlog.addEventListener("click", () => {
  if (login.value === "" || password.value === "") {
    console.log("Будь ласка, заповніть всі поля.");
    message.textContent = "Error, we cannot find this login"
    message.style.color = "red"
  }
  
  if (login.value === "Admin" && password.value === "123") {
    console.log("Login found");
    message.textContent = "Login found";
    message.style.color = "green";
    window.location.href = "4.html";
  } else if (!login.value === "Admin" && password.value === "123") {
    console.log("Error, we cannot find this login");
  }
});

buttonlogB.addEventListener("click", () => {
  if (login.value === "" || password.value === "") {
    console.log("Будь ласка, заповніть всі поля.");
     message.textContent = "Error, we cannot find this login"
    message.style.color = "red"
  }
  
  if (login.value === "Admin" && password.value === "123") {
    console.log("Login found");
    message.textContent = "Login found";
    message.style.color = "green";
    window.location.href = "5.html";
  } else {
     console.log("Error, we cannot find this login");
     message.textContent = "Error, we cannot find this login"
     message.style.color = "red"
  }
});
