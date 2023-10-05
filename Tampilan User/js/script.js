// const, let dan var untuk mendeklarasi Variabel
// document.querySelectorAll untuk memilih selector CSS pada dokumen HTML
const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

// foreach untuk pengulangan, jadi bisa di klik ulang ulang
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      // jika eye icon diklik akan terlihat password
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      // jika eye icon tidak diklik maka password tidak terlihat
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

// ketika klik link sign up langsung muncul tampilan signup
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});
