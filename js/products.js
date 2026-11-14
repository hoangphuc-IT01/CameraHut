// QUẢN LÝ TRẠNG THÁI & DỮ LIỆU
let products = [];
let currentBrand = "all"; 

// 1. LẤY DỮ LIỆU TỪ PRODUCTS.JSON
fetch("../data/products.json")
    .then(response => response.json())
    .then(data => {
        products = data;        
        
        // Hiển thị toàn bộ sản phẩm vào danh sách chính
        showProducts(products, "productList");
        
        // Lấy ngẫu nhiên 4 sản phẩm hiển thị vào mục Nổi bật
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        showProducts(shuffled.slice(0, 4), "featuredList");
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

// 2. HIỂN THỊ SẢN PHẨM (Khớp 100% với CSS của bạn)
function showProducts(list, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `
            <div class="no-product">
                <h3>Không tìm thấy sản phẩm</h3>
                <p>Hãy thử tìm kiếm với tiêu chí khác.</p>
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
                <a href="product-detail.html?id=${product.id}" class="product-detail-btn">Xem chi tiết</a>
            </div>
        </div>
    `).join("");
    
    container.innerHTML = html;
}

// 3. CÁC HÀM LỌC SẢN PHẨM
function filterBrand(brand, btnElement) {
    currentBrand = brand;
    
    // Đổi viền đen (active) cho logo vừa bấm
    document.querySelectorAll('.brand-logo').forEach(btn => btn.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');
    
    applyFilters();
}

function applyFilters() {
    const keyword = document.getElementById("search").value.toLowerCase().trim();
    const category = document.getElementById("categoryFilter").value;
    const priceRange = document.getElementById("priceFilter").value;
    
    const result = products.filter(product => {
        // Lọc Hãng
        const matchBrand = (currentBrand === 'all') || (product.brand.toLowerCase() === currentBrand.toLowerCase());
        
        // Lọc Dòng máy
const matchCategory = (category === 'all') || (product.category === category);
        
        // Lọc Từ khóa
        const matchSearch = product.name.toLowerCase().includes(keyword) || product.brand.toLowerCase().includes(keyword);
        
        // Lọc Giá
        let matchPrice = true;
        if (priceRange === 'under10') matchPrice = product.price < 10000000;
        else if (priceRange === '10to20') matchPrice = product.price >= 10000000 && product.price <= 20000000;
        else if (priceRange === '20to40') matchPrice = product.price > 20000000 && product.price <= 40000000;
        else if (priceRange === 'over40') matchPrice = product.price > 40000000;
        
        return matchBrand && matchCategory && matchSearch && matchPrice;
    });
    
    // Ẩn/hiện khu vực "Có thể bạn sẽ thích" tùy vào việc có đang dùng bộ lọc hay không
    const isFiltering = (currentBrand !== 'all' || category !== 'all' || priceRange !== 'all' || keyword !== '');
    const featuredSection = document.getElementById('featuredSection');
    const mainListTitle = document.getElementById('mainListTitle');

    if (isFiltering) {
        featuredSection.style.display = 'none';
        mainListTitle.innerText = `Kết quả tìm kiếm (${result.length})`;
    } else {
        featuredSection.style.display = 'block';
        mainListTitle.innerText = `📷 Tất cả sản phẩm`;
    }

    // Hiển thị kết quả sau khi lọc
    showProducts(result, "productList");
}