// Function nạp nội dung file HTML vào thẻ chứa
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error("Không thể tải file: " + filePath);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Tự động chạy khi trang web nạp xong
document.addEventListener("DOMContentLoaded", function () {
    // Xác định đường dẫn tương đối tùy theo trang ở thư mục gốc hay thư mục pages/
    const isInsidePages = window.location.pathname.includes("/pages/");
    const basePath = isInsidePages ? "../components/" : "components/";

    // Tải Header và Footer
    if (document.getElementById("header-placeholder")) {
        loadComponent("header-placeholder", basePath + "header.html");
    }
    if (document.getElementById("footer-placeholder")) {
        loadComponent("footer-placeholder", basePath + "footer.html");
    }
});