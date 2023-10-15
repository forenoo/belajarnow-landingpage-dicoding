const menuBtn = document.querySelector(".hamburger-btn");
const navbar = document.querySelector(".nav-links")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('is-active');
    navbar.classList.toggle('is-active');
});

document.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
})

const faqs = document.querySelectorAll(".faq-box");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector(`header nav ul li a[href*=${id}]`).classList.add("active");
            })
        }
    })
}