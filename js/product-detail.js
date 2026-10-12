// 1. KHO DỮ LIỆU ĐẦY ĐỦ 18 SẢN PHẨM[cite: 8]
const products = [
    { id: 1, name: "Canon EOS R50", brand: "Canon", category: "Mirrorless", price: 16490000, image: "https://tse3.mm.bing.net/th/id/OIP.9Sxb3w5iK6Sl72cqWAEWLQHaHa?r=0&pid=Api&h=220&P=0" },
    { id: 2, name: "Sony Alpha A6400", brand: "Sony", category: "Mirrorless", price: 18390000, image: "https://tse4.mm.bing.net/th/id/OIP.46QrbQ6cnKUHTjjeaQhiJwHaEU?r=0&pid=Api&h=220&P=0" },
    { id: 3, name: "Fujifilm X-T5", brand: "Fujifilm", category: "Mirrorless", price: 32990000, image: "https://m.media-amazon.com/images/I/81ylqx3SdNL.jpg" },
    { id: 4, name: "Sony Alpha A6000", brand: "Sony", category: "Mirrorless", price: 7990000, image: "https://www.ephotozine.com/articles/sony-alpha-a6000--ilce-6000--hands-on-review-24041/images/highres-Sony-Alpha-A6000-4_1398771945.jpg" },
    { id: 5, name: "Canon EOS M10 + Kit 15-45mm", brand: "Canon", category: "Mirrorless", price: 7900000, image: "https://tse3.mm.bing.net/th/id/OIP.KzRfp8ftk4WirCjUBND3HwHaHa?r=0&pid=Api&h=220&P=0" },
    { id: 6, name: "Fujifilm X-A10", brand: "Fujifilm", category: "Mirrorless", price: 7990000, image: "https://pxlmag.com/db/images/cameras/gallery/fullsize/Fujifilm-X-A10/Fujifilm-X-A10-front.jpg" },
    { id: 7, name: "Canon EOS 4000D", brand: "Canon", category: "DSLR", price: 6990000, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80" },
    { id: 8, name: "Nikon D3500", brand: "Nikon", category: "DSLR", price: 8990000, image: "https://tse3.mm.bing.net/th/id/OIP.Ya2QsnIepQ0IrvmWXJdSoQHaG3?r=0&pid=Api&h=220&P=0" },
    { id: 9, name: "Nikon D7500", brand: "Nikon", category: "DSLR", price: 21990000, image: "https://photographylife.com/wp-content/uploads/2017/04/Nikon-D7500-DSLR.jpg" },
    { id: 10, name: "Canon EOS 90D", brand: "Canon", category: "DSLR", price: 24990000, image: "https://tse4.mm.bing.net/th/id/OIP.Mg5BYuYjmlHHH-EBtBoEEQHaHa?r=0&pid=Api&h=220&P=0" },
    { id: 11, name: "DJI Osmo Pocket 3", brand: "DJI", category: "Compact", price: 13990000, image: "https://tse4.mm.bing.net/th/id/OIP.m8uojyGg1BjhJe21Y6AERAHaHa?r=0&pid=Api&h=220&P=0" },
    { id: 12, name: "DJI Osmo Pocket 4", brand: "DJI", category: "Compact", price: 15990000, image: "https://videolane.com/wp-content/uploads/Imagined-Osmo-Pocket-4-Gemini.jpg" },
    { id: 13, name: "Sony ZV-1", brand: "Sony", category: "Compact", price: 14990000, image: "https://pxlmag.com/db/images/cameras/gallery/fullsize/Sony-ZV-1/Sony-ZV-1-front.jpg" },
    { id: 14, name: "Canon PowerShot SX620 HS", brand: "Canon", category: "Compact", price: 6500000, image: "https://tse2.mm.bing.net/th/id/OIP.gBtKmGF9GzdmdBlKI35qpgHaHa?r=0&pid=Api&h=220&P=0" },
    { id: 15, name: "Canon RF 50mm F1.8", brand: "Canon", category: "Lens", price: 5490000, image: "https://radojuva.com/wp-content/uploads/2020/11/canon-rf-lens-50mm-f-1-8-stm-new-2020-5.jpg" },
    { id: 16, name: "Sony FE 50mm F1.8", brand: "Sony", category: "Lens", price: 5990000, image: "https://tse1.mm.bing.net/th/id/OIP.asz0yW18Fb_LjYwaYf0KLQHaHa?r=0&pid=Api&h=220&P=0" },
    { id: 17, name: "Canon EF 50mm F1.8 STM", brand: "Canon", category: "Lens", price: 2500000, image: "https://www.ephotozine.com/articles/canon-ef-50mm-f-1-8-stm-lens-review-27666/images/highres-Canon-EF-50mm-f1-8-STM-5_1433862749.jpg" },
    { id: 18, name: "Sony 16-50mm F3.5-5.6 OSS", brand: "Sony", category: "Lens", price: 3990000, image: "https://www.ephotozine.com/articles/sony-e-16-50mm-f-3-5-5-6-oss-lens-review-20667/images/highres-sony-16-50mm-oss-lens_1352811627.jpg" }
];

// THÔNG TIN NỔI BẬT CHI TIẾT THEO TỪNG THIẾT BỊ[cite: 8, 9]
const highlightsDict = {
    1: ["Cảm biến APS-C CMOS 24.2MP kết hợp DIGIC X", "Lấy nét Dual Pixel CMOS AF II với 651 điểm", "Chụp liên tục 15 fps", "Quay video 4K/30p không crop, Full HD 120p"],
    2: ["Cảm biến APS-C Exmor CMOS 24.2MP và BIONZ X", "Lấy nét kỷ lục 0.02s với 425 điểm theo pha", "Real-time Eye AF và Real-time Tracking", "Màn hình cảm ứng LCD lật 180 độ"],
    3: ["Cảm biến thế hệ mới APS-C X-Trans CMOS 5 HR 40.2MP", "Bộ xử lý hình ảnh tốc độ cao X-Processor 5", "Chống rung IBIS 5 trục hiệu quả lên đến 7-stop", "Quay video chất lượng 6.2K/30p 10-bit"],
    4: ["Cảm biến APS-C HD CMOS 24.3MP và BIONZ X", "179 điểm lấy nét theo pha bao phủ rộng", "Chụp liên tiếp 11 khung hình/giây", "Kính ngắm điện tử OLED Tru-Finder"],
    5: ["Cảm biến APS-C CMOS 18.0MP cùng DIGIC 6", "Lấy nét Hybrid CMOS AF II (49 điểm AF)", "Màn hình cảm ứng lật 180 độ selfie", "Tích hợp Wi-Fi và NFC tiện lợi"],
    6: ["Cảm biến APS-C CMOS 16.3MP tái tạo màu da tự nhiên", "Màn hình lật 180 độ tự bật Eye AF", "Tích hợp 6 chế độ màu film kinh điển", "Thời lượng pin tới 410 tấm/lần sạc"],
    7: ["Cảm biến lớn APS-C 18.0MP xóa phông hậu cảnh", "Bộ xử lý hình ảnh DIGIC 4+", "Kính ngắm quang học 9 điểm lấy nét", "Quay phim chuẩn Full HD 1080p"],
    8: ["Cảm biến DX 24.2MP loại bỏ bộ lọc OLPF siêu nét", "Pin siêu bền lên đến 1.550 tấm/lần sạc", "Đồng bộ ảnh qua SnapBridge Bluetooth", "Chụp liên tiếp 5 khung hình/giây"],
    9: ["Kế thừa cảm biến 20.9MP và EXPEED 5 từ D500", "Dải ISO mở rộng kỷ lục 1.640.000", "Quay video 4K UHD không nén", "Khung vỏ máy kháng thời tiết cao"],
    10: ["Cảm biến 32.5MP đỉnh cao cùng vi xử lý DIGIC 8", "Lấy nét 45 điểm toàn bộ cross-type", "Chụp tốc độ cao 10 fps", "Quay video 4K không crop mượt mà"],
    11: ["Cảm biến 1-inch CMOS quay đêm cực nét", "Quay video 4K/120fps, hỗ trợ 10-bit D-Log M", "Màn hình cảm ứng xoay OLED 2.0 inch", "Chống rung cơ học 3 trục vật lý"],
    12: ["Cảm biến 1-inch nâng cấp tăng cường HDR", "Chống rung 3 trục thế hệ tiếp theo", "ActiveTrack AI bám nét thông minh", "Sạc nhanh Type-C thông minh"],
    13: ["Thiết kế chuyên dụng sáng tạo nội dung vlog", "Cảm biến 1.0-type Exmor RS CMOS 20.1MP", "Ống kính ZEISS 24-70mm F1.8-2.8", "Nút Bokeh Switch & Product Showcase"],
    14: ["Siêu zoom quang học 25x nhỏ gọn bỏ túi", "Cảm biến CMOS 20.2MP cùng DIGIC 4+", "Chống rung thông minh Intelligent IS", "Quay video Full HD chuyên nghiệp"],
    15: ["Tiêu cự chuẩn 50mm, khẩu độ lớn F1.8", "Động cơ STM lấy nét êm ái khi quay phim", "Vòng điều khiển Control Ring gán chức năng", "Ngàm kim loại chỉ nặng 160g"],
    16: ["Ống kính Full-frame ngàm E đa dụng", "Khẩu độ lớn F1.8 cho hậu cảnh mịn màng", "7 lá khẩu tròn tạo hiệu ứng bokeh đẹp", "Lấy nét DC chuẩn xác"],
    17: ["Huyền thoại chụp chân dung Canon DSLR", "Khẩu độ mở F1.8, động cơ STM bắt nét êm", "Lớp tráng phủ Super Spectra giảm lóa", "Khoảng cách lấy nét tối thiểu 35cm"],
    18: ["Zoom đa dụng Pancake siêu mỏng nhẹ 116g", "Chống rung quang học Optical SteadyShot", "Cần gạt Power Zoom hỗ trợ thu phóng mượt", "Gồm 4 thấu kính phi cầu tối ưu quang sai"]
};

// 2. LẤY SẢN PHẨM HIỆN TẠI TỪ URL (?id=...)[cite: 8]
const params = new URLSearchParams(window.location.search);
const currentId = Number(params.get("id")) || 1;
const currentItem = products.find(p => p.id === currentId) || products[0];

// 3. CÁC HÀM XỬ LÝ SỰ KIỆN GIAO DIỆN (WINDOW SCOPE)
function switchImageThumb(element, src) {
    document.querySelectorAll(".thumbnail-item").forEach(item => item.classList.remove("active"));
    element.classList.add("active");
    document.getElementById("mainPreviewImg").src = src;
}

function selectVariantOption(button, labelId, value) {
    button.parentElement.querySelectorAll(".btn-variant").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(labelId).innerText = value;
}

function adjustOrderQty(delta) {
    const input = document.getElementById("orderQty");
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1;
    input.value = val;
}

function switchDetailTab(type, button) {
    document.querySelectorAll(".tab-btn-item").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderTabDescription(type);
}

function renderTabDescription(type) {
    const container = document.getElementById("tabContentBox");
    if (type === 'desc') {
        container.innerHTML = `
            <div class="tab-text-desc">
                <p><strong>${currentItem.name}</strong> là dòng thiết bị đại diện tiêu biểu cho phân khúc <strong>${currentItem.category}</strong> của thương hiệu <strong>${currentItem.brand}</strong>.</p>
                <p>Thiết bị được thiết kế nhằm đáp ứng cả nhu cầu chụp ảnh lẫn quay phim với khả năng bắt nét chuẩn xác, dải nhạy sáng cao và màu sắc sống động đặc trưng của ${currentItem.brand}.</p>
                <p>Sản phẩm đi kèm gói bảo hành chính hãng 24 tháng tại tất cả các trung tâm ủy quyền toàn quốc.</p>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="tab-text-desc">
                <p>Hiện chưa có đánh giá nào cho <strong>${currentItem.name}</strong>. Hãy mua ngay để trở thành người đầu tiên chia sẻ cảm nhận về thiết bị này!</p>
            </div>
        `;
    }
}

// 4. KHỞI CHẠY RENDER TOÀN TRANG KHI LOAD
window.addEventListener("DOMContentLoaded", function () {
    // Cập nhật Breadcrumb & Tiêu đề
    document.title = `${currentItem.name} - Camera Hut`;
    document.getElementById("bcCategory").innerText = currentItem.category;
    document.getElementById("bcName").innerText = currentItem.name;

    const isLens = currentItem.category === "Lens";
    const highlights = highlightsDict[currentItem.id] || ["Hàng chính hãng", "Bảo hành 24 tháng"];

    // A. Render Khối sản phẩm chính
    document.getElementById("mainProductView").innerHTML = `
        <div class="gallery-column">
            <div class="main-preview-box">
                <img id="mainPreviewImg" src="${currentItem.image}" alt="${currentItem.name}">
            </div>
            <div class="thumbnail-row">
                <div class="thumbnail-item active" onclick="switchImageThumb(this, '${currentItem.image}')">
                    <img src="${currentItem.image}">
                </div>
            </div>
        </div>

        <div class="info-column">
            <h1 class="product-name-heading">${isLens ? "Ống kính" : "Máy ảnh"} ${currentItem.name} | Chính Hãng</h1>
            <div class="rating-row">★★★★★ <span>(98 lượt mua)</span></div>

            <div class="price-container">
                <div class="highlight-price">${Number(currentItem.price).toLocaleString("vi-VN")} đ</div>
                <div class="vat-text">Giá đã bao gồm VAT</div>
            </div>

            <div class="official-distributor-badge">
                ✓ <strong>Camera Hut</strong> - Nhà phân phối chính hãng ${currentItem.brand} tại Việt Nam
            </div>

            <div class="features-title">Thông tin nổi bật</div>
            <ul class="features-list">
                ${highlights.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <!-- Màu sắc -->
            <div class="variant-group">
                <div class="variant-label">Màu sắc: <span id="lblColor">Black</span></div>
                <div class="variant-buttons">
                    <button class="btn-variant active" onclick="selectVariantOption(this, 'lblColor', 'Black')">📷 Black</button>
                    <button class="btn-variant" onclick="selectVariantOption(this, 'lblColor', 'Silver')">📷 Silver</button>
                </div>
            </div>

            <!-- Kiểu cấu hình (chỉ hiển thị nếu không phải Lens) -->
            ${!isLens ? `
            <div class="variant-group">
                <div class="variant-label">Phiên bản: <span id="lblStyle">Body Only</span></div>
                <div class="variant-buttons">
                    <button class="btn-variant active" onclick="selectVariantOption(this, 'lblStyle', 'Body Only')">📷 Body Only</button>
                    <button class="btn-variant" onclick="selectVariantOption(this, 'lblStyle', 'Kèm Kit Lens')">📷 Kèm Kit Lens</button>
                </div>
            </div>` : ""}

            <!-- Thao tác mua hàng -->
            <div class="action-checkout-row">
                <div class="quantity-picker">
                    <button type="button" onclick="adjustOrderQty(-1)">-</button>
                    <input type="text" id="orderQty" value="1" readonly>
                    <button type="button" onclick="adjustOrderQty(1)">+</button>
                </div>
                <button type="button" class="btn-buy-primary" onclick="alert('Đã thêm ${currentItem.name} vào giỏ hàng!')">MUA NGAY</button>
            </div>

            <!-- Hộp quà tặng kèm viền đỏ đứt nét -->
            <div class="gift-promo-card">
                <div class="gift-promo-header">🎁 QUÀ TẶNG KÈM TRỊ GIÁ: 730.000 đ</div>
                <div class="gift-promo-body">
                    <div class="gift-item-block">
                        <img src="https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=80" alt="Dán màn hình">
                        <div class="gift-title-text">Dán màn hình</div>
                        <div class="gift-val-text">80.000 đ</div>
                    </div>
                    <div class="gift-item-block">
                        <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=80" alt="Thẻ nhớ">
                        <div class="gift-title-text">Thẻ nhớ 64GB</div>
                        <div class="gift-val-text">380.000 đ</div>
                    </div>
                    <div class="gift-item-block">
                        <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=80" alt="Túi đựng">
                        <div class="gift-title-text">Túi máy ảnh</div>
                        <div class="gift-val-text">270.000 đ</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // B. Logic Phụ kiện khuyên dùng (Ưu tiên Lọc Ống kính CÙNG HÃNG với máy)[cite: 8]
    document.getElementById("accessoriesTitle").innerText = `Phụ kiện & Ống kính khuyên dùng cho ${currentItem.brand}`;
    let accessories = products.filter(p => p.id !== currentItem.id && p.category === "Lens" && p.brand === currentItem.brand);

    // Nếu hãng đó chưa có lens trong kho data (như Fujifilm, Nikon, DJI), bổ sung thêm các Lens hoặc phụ kiện khác trong kho[cite: 8]
    if (accessories.length === 0) {
        accessories = products.filter(p => p.id !== currentItem.id && (p.category === "Lens" || p.category === "Compact")).slice(0, 5);
    }

    document.getElementById("accessoriesList").innerHTML = accessories.map(item => `
        <div class="mini-card-item">
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <div class="card-val-price">${Number(item.price).toLocaleString("vi-VN")} đ</div>
            <a href="product-detail.html?id=${item.id}" class="btn-action-mini">Xem ngay</a>
        </div>
    `).join("");

    // C. Logic Sản phẩm tương tự (CHỈ HIỂN THỊ CÙNG HÃNG)[cite: 8]
    document.getElementById("relatedTitle").innerText = `SẢN PHẨM KHÁC TỪ THƯƠNG HIỆU ${currentItem.brand.toUpperCase()}`;
    let sameBrandProducts = products.filter(p => p.id !== currentItem.id && p.brand === currentItem.brand);

    // Trường hợp hãng chỉ có 1 sản phẩm duy nhất (như Fujifilm X-A10 hoặc DJI), bổ sung thêm sản phẩm cùng phân loại category[cite: 8]
    if (sameBrandProducts.length === 0) {
        sameBrandProducts = products.filter(p => p.id !== currentItem.id && p.category === currentItem.category).slice(0, 5);
    }

    document.getElementById("relatedList").innerHTML = sameBrandProducts.map(item => `
        <div class="mini-card-item">
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <div class="card-val-price">${Number(item.price).toLocaleString("vi-VN")} đ</div>
            <a href="product-detail.html?id=${item.id}" class="btn-action-mini">Xem ngay</a>
        </div>
    `).join("");

    // D. Render nội dung Tab ban đầu
    renderTabDescription('desc');
});