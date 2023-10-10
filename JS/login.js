// ======
// Login
// ======
var btn = document.getElementById("buttonLogin");
var username = document.getElementById("username");
var password = document.getElementById("password");

btn.addEventListener("click", login);

// Validasi form
if (!usernameValue || !passwordValue) {
  alert("Please fill in all fields."); // Menampilkan pesan alert jika ada field yang kosong
  return;
}

function login() {
  fetch("https://be-jayapura-01-production.up.railway.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      alert(data.message);
      const user = data.data.user; // Data pengguna
      const token = data.data.token; // Token
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.replace("index.html");
    })
    .catch(function (error) {
      console.log(error);
    });
}
