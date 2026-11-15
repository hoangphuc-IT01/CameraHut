
document.addEventListener("DOMContentLoaded", function () {
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
