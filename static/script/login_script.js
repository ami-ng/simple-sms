const token = localStorage.getItem("token");
if (token) {
  window.location.href = "/user";
}

const loginError = document.getElementById("loginError");

document.getElementById("add-login").addEventListener("click", () => {
  let userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  userName = userName.toLowerCase();

  fetch("/api/login-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: userName,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (!data.token) {
        loginError.style.display = "block";
        loginError.innerText = data.message;
      } else {
        localStorage.setItem("token", data.token);
        window.location.href = "/user";
      }
    })
});