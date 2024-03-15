const div = document.querySelector(".match-mismatch");
const pwd = document.querySelector("#password");
const confPwd = document.querySelector("#confirm-password");

confPwd.addEventListener("input", (event) => {
    if (pwd.value === confPwd.value) {
        div.textContent = "Passwords matched";
    } else {
        div.textContent = "Passwords do not match";
    }
})
