const buttonlog = document.querySelector(".buttonlog");
const buttonlogB = document.querySelector(".buttonlogB");
const login = document.querySelector("#login"); // Замість #login вставте правильний селектор
const password = document.querySelector("#password"); // Замість #password вставте правильний селектор

buttonlog.addEventListener("click", () => {
  if (login.value === "" || password.value === "") {
    console.log("Будь ласка, заповніть всі поля.");
    return;
  }
  
  if (login.value === "Admin" && password.value === "123") {
    window.location.href = "4.html";
  } else {
    console.log("Error, we cannot find this login");
  }
});

buttonlogB.addEventListener("click", () => {
  if (login.value === "" || password.value === "") {
    console.log("Будь ласка, заповніть всі поля.");
  }
  
  if (login.value === "Admin" && password.value === "123") {
    window.location.href = "5.html";
  } else {
    console.log("Error, we cannot find this login");
  }
});
