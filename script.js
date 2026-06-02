"use strict";

//hàm hiện thông tin khi click vào nút "View more" và ẩn thông tin khi click vào nút "View less"
const view = function (section) {
  const btnViewMore = section.querySelector(".btn-viewmore");
  const content = section.querySelector(".content");
  const btnViewLess = section.querySelector(".btn-viewless");

  section.addEventListener("mouseenter", function () {
    //chỉ hiện VIEWMORE nếu content ẩn
    if (content.classList.contains("d-none")) {
      btnViewMore.classList.remove("d-none");
    }
  });

  section.addEventListener("mouseleave", function () {
    btnViewMore.classList.add("d-none");
  });

  btnViewMore.addEventListener("click", function () {
    content.classList.remove("d-none");
    btnViewMore.classList.add("d-none");
    btnViewLess.classList.remove("d-none");
  });

  btnViewLess.addEventListener("click", function () {
    content.classList.add("d-none");
    btnViewLess.classList.add("d-none");
    btnViewMore.classList.remove("d-none");
  });
};

//Ẩn, hiện thông tin cá nhân khi nhập vào email
const email = document.getElementById("email");
console.log(email.value);
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector(".btn-submit").addEventListener("click", function () {
  if (email.value === "" || !regex.test(email.value)) {
    alert("Hãy nhập đúng email của bạn!");
  } else {
    document.querySelector(".personal-info").classList.remove("d-none");
    document.querySelector(".form").classList.add("d-none");
  }
});

//Hiện thông tin khi click vào nút "View more" và ẩn thông tin khi click vào nút "View less"
view(document.getElementById("experience"));
view(document.getElementById("education"));
view(document.getElementById("activity"));
view(document.getElementById("hobby"));
view(document.getElementById("language"));
view(document.getElementById("skill"));
