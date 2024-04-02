const token = localStorage.getItem("token");
if (token) {
  window.location.href = "/user";
}
const registerError = document.getElementById("registerError");

document.getElementById("register-btn").addEventListener("click", () => {
  let userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  userName = userName.toLowerCase();

  const name = document.getElementById("name").value;
  fetch("/api/register-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: userName,
      password: password,
      name: name,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (!data.token) {
        registerError.style.display = "block";
        registerError.innerText = data.message;
      } else {
        localStorage.setItem("token", data.token);
        window.location.href = "/user";
      }
    });
});
