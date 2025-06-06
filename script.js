const slides = document.querySelectorAll(".slide"); // lấy tất cả các slide
const prevBtn = document.querySelector(".prev"); //trái
const nextBtn = document.querySelector(".next"); //phải
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);
showSlide(currentSlide);

// Đăng Nhập//
const popup = document.getElementById("loginPopup"); //khung
const btn = document.getElementById("loginBtn"); //bấm
const closeBtn = document.getElementsByClassName("close")[0]; //dấu x
const emailInput = document.querySelector("#loginPopup input[type='text']");

btn.addEventListener("click", () => {
  popup.style.display = "block"; // hiện
  popup.classList.add("show"); // thêm hiệu ứng
  if (emailInput) {
    emailInput.focus();
  }
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show"); // gỡ hiệu ứng
  setTimeout(() => (popup.style.display = "none"), 300);
});
//bấm ra ngoài
window.addEventListener("click", (e) => {
  if (e.target == popup) {
    popup.classList.remove("show");
    setTimeout(() => (popup.style.display = "none"), 300);
  }
});
//đóng bằng esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popup.style.display === "block") {
    popup.classList.remove("show");
    setTimeout(() => (popup.style.display = "none"), 300);
  }
});
