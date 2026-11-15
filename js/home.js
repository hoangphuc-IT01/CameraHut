document.addEventListener("DOMContentLoaded", function () {
    // Xử lý nút Khám phá ngay
    const exploreButton = document.querySelector(".home-banner-button");
    const featuredSection = document.querySelector(".home-featured");

    if (exploreButton && featuredSection) {
        exploreButton.addEventListener("click", function (event) {
            event.preventDefault();

            featuredSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
        // Xử lý hiệu ứng khi di chuột vào sản phẩm
    const productCards = document.querySelectorAll(".home-product-card");

    productCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.classList.add("active");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("active");
        });
    });
});