// QUẢN LÝ TRẠNG THÁI & DỮ LIỆU
let products = [];
let currentBrand = "all"; 

// 1. LẤY DỮ LIỆU TỪ PRODUCTS.JSON
fetch("../data/products.json")
    .then(response => response.json())
    .then(data => {
        products = data;        
        filterProducts(); // Hiển thị toàn bộ sản phẩm
    })
    .catch(error => {
        console.error("Lỗi:", error);
        document.getElementById("productList").innerHTML = `
            <div class="no-product">
                <h3>Không thể tải dữ liệu sản phẩm</h3>
                <p>Vui lòng thử lại sau.</p>
            </div>
        `;
    });

// 2. HIỂN THỊ SẢN PHẨM
function showProducts(list) {
    const productContainer = document.getElementById("productList");
    if (list.length === 0) {
        productContainer.innerHTML = `
            <div class="no-product">
                <h3>Không tìm thấy sản phẩm</h3>
                <p>Hãy thử tìm kiếm sản phẩm khác.</p>
            </div>
        `;
        return; 
    }
    const html = list.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <p class="product-brand">${product.brand}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">${Number(product.price).toLocaleString("vi-VN")} VNĐ</p>
                <!-- ĐƯỜNG DẪN KÈM ID ĐỂ TRANG CHI TIẾT NHẬN DIỆN ĐÚNG MÁY -->
                <a href="product-detail.html?id=${product.id}" class="product-detail-btn">Xem chi tiết</a>
            </div>
        </div>
    `).join("");
    productContainer.innerHTML = html;
}

// 3. CÁC HÀM LỌC (FILTER)
function filterBrand(brand) {
    currentBrand = brand;
    filterProducts();
}
function filterProducts() {
    const keyword = document.getElementById("search").value.toLowerCase();

    const result = products.filter(product => {
        const isMatchBrand = currentBrand === "all" || product.brand.toLowerCase() === currentBrand.toLowerCase();
        const isMatchSearch = product.name.toLowerCase().includes(keyword) || product.brand.toLowerCase().includes(keyword);
        return isMatchBrand && isMatchSearch; 
    });
    showProducts(result);
}

// 4. LẮNG NGHE SỰ KIỆN TÌM KIẾM
document.getElementById("search").addEventListener("input", filterProducts);