// 1. KHO DỮ LIỆU ĐẦY ĐỦ 32 SẢN PHẨM
const products = [
    { id: 1, name: "Canon EOS R50", brand: "Canon", category: "Mirrorless", price: 16490000, image: "../pages/image/R50.webp", images: ["../pages/image/R50.webp", "../pages/image/R50.1.webp", "../pages/image/R50.2.webp", "../pages/image/R50.3.webp"] },
    { id: 2, name: "Sony Alpha A6400", brand: "Sony", category: "Mirrorless", price: 18390000, image: "../pages/image/A6400.webp", images: ["../pages/image/A6400.webp", "../pages/image/A6400.1.webp", "../pages/image/A6400.2.webp", "../pages/image/A6400.3.webp"] },
    { id: 3, name: "Fujifilm X-T5", brand: "Fujifilm", category: "Mirrorless", price: 32990000, image: "../pages/image/XT5.webp", images: ["../pages/image/XT5.webp", "../pages/image/XT5.1.webp", "../pages/image/XT5.2.webp", "../pages/image/XT5.3.webp", "../pages/image/XT5.4.webp"] },
    { id: 4, name: "Sony Alpha A6000", brand: "Sony", category: "Mirrorless", price: 7990000, image: "../pages/image/A6000.webp", images: ["../pages/image/A6000.webp", "../pages/image/A6000.1.webp", "../pages/image/A6000.2.webp", "../pages/image/A6000.3.webp"] },
    { id: 5, name: "Canon EOS M10 + Kit 15-45mm", brand: "Canon", category: "Mirrorless", price: 7900000, image: "../pages/image/M10.webp", images: ["../pages/image/M10.webp", "../pages/image/M10.1.webp", "../pages/image/M10.2.webp", "../pages/image/M10.3.webp"] },
    { id: 6, name: "Fujifilm X-A10", brand: "Fujifilm", category: "Mirrorless", price: 7990000, image: "../pages/image/XA10.webp", images: ["../pages/image/XA10.webp", "../pages/image/XA10.1.webp", "../pages/image/XA10.2.webp"] },
    { id: 7, name: "Canon EOS 4000D", brand: "Canon", category: "DSLR", price: 6990000, image: "../pages/image/4000D.webp", images: ["../pages/image/4000D.webp", "../pages/image/4000D.1.webp", "../pages/image/4000D.2.webp", "../pages/image/4000D.3.webp"] },
    { id: 8, name: "Nikon D3500", brand: "Nikon", category: "DSLR", price: 8990000, image: "../pages/image/D3500.webp", images: ["../pages/image/D3500.webp", "../pages/image/D3500.1.webp", "../pages/image/D3500.2.webp", "../pages/image/D3500.3.jpeg"] },
    { id: 9, name: "Nikon D7500", brand: "Nikon", category: "DSLR", price: 21990000, image: "../pages/image/D7500.webp", images: ["../pages/image/D7500.webp", "../pages/image/D7500.1.webp", "../pages/image/D7500.2.webp", "../pages/image/D7500.3.webp"] },
    { id: 10, name: "Canon EOS 90D", brand: "Canon", category: "DSLR", price: 24990000, image: "../pages/image/90D.webp", images: ["../pages/image/90D.webp", "../pages/image/90D.1.webp", "../pages/image/90D.2.webp", "../pages/image/90D.3.webp"] },
    { id: 11, name: "DJI Osmo Pocket 3", brand: "DJI", category: "Compact", price: 13990000, image: "../pages/image/PK3.webp", images: ["../pages/image/PK3.webp", "../pages/image/PK3.1.webp", "../pages/image/PK3.2.webp", "../pages/image/PK3.3.webp"] },
    { id: 12, name: "DJI Osmo Pocket 4", brand: "DJI", category: "Compact", price: 15990000, image: "../pages/image/PK4.webp", images: ["../pages/image/PK4.webp", "../pages/image/PK4.1.webp", "../pages/image/PK4.2.webp", "../pages/image/PK4.3.webp"] },
    { id: 13, name: "Sony ZV-1", brand: "Sony", category: "Compact", price: 14990000, image: "../pages/image/ZV1.webp", images: ["../pages/image/ZV1.webp", "../pages/image/ZV1.1.webp", "../pages/image/ZV1.2.webp", "../pages/image/ZV1.3.webp"] },
    { id: 14, name: "Canon PowerShot SX620 HS", brand: "Canon", category: "Compact", price: 6500000, image: "../pages/image/SX620.webp", images: ["../pages/image/SX620.webp", "../pages/image/SX620.1.webp", "../pages/image/SX620.2.webp"] },
    { id: 15, name: "Canon RF 50mm F1.8", brand: "Canon", category: "Lens", price: 5490000, image: "../pages/image/RF50.webp", images: ["../pages/image/RF50.webp", "../pages/image/RF50.1.webp", "../pages/image/RF50.2.webp", "../pages/image/RF50.3.webp"] },
    { id: 16, name: "Sony FE 50mm F1.8", brand: "Sony", category: "Lens", price: 5990000, image: "../pages/image/FE50.jpeg", images: ["../pages/image/FE50.jpeg", "../pages/image/FE50.1.jpeg", "../pages/image/FE50.2.jpeg", "../pages/image/FE50.3.jpeg", "../pages/image/FE50.4.jpeg"] },
    { id: 17, name: "Canon EF 50mm F1.8 STM", brand: "Canon", category: "Lens", price: 2500000, image: "../pages/image/EF50.jpeg", images: ["../pages/image/EF50.jpeg", "../pages/image/EF50.1.jpeg", "../pages/image/EF50.2.jpeg", "../pages/image/EF50.3.jpeg"] },
    { id: 18, name: "Sony 16-50mm F3.5-5.6 OSS", brand: "Sony", category: "Lens", price: 3990000, image: "../pages/image/1650.webp", images: ["../pages/image/1650.webp", "../pages/image/1650.1.webp", "../pages/image/1650.2.webp", "../pages/image/1650.3.webp"] },
    { id: 19, name: "Fujifilm X-A3", brand: "Fujifilm", category: "Mirrorless", price: 6500000, image: "../pages/image/XA3.jpg", images: ["../pages/image/XA3.jpg", "../pages/image/XA3.1.webp", "../pages/image/XA3.2.webp", "../pages/image/XA3.3.webp"] },
    { id: 20, name: "Fujifilm X-T20", brand: "Fujifilm", category: "Mirrorless", price: 11500000, image: "../pages/image/XT20.jpg", images: ["../pages/image/XT20.jpg", "../pages/image/XT20.1.webp", "../pages/image/XT20.2.webp", "../pages/image/XT20.3.jpg"] },
    { id: 21, name: "Fujifilm X-T30", brand: "Fujifilm", category: "Mirrorless", price: 18500000, image: "../pages/image/XT30.jpg", images: ["../pages/image/XT30.jpg", "../pages/image/XT30.1.webp", "../pages/image/XT30.2.webp", "../pages/image/XT30.3.webp"] },
    { id: 22, name: "Fujifilm X-S10", brand: "Fujifilm", category: "Mirrorless", price: 23990000, image: "../pages/image/XS10.jpg", images: ["../pages/image/XS10.jpg", "../pages/image/XS10.1.webp", "../pages/image/XS10.2.webp"] },
    { id: 23, name: "Fujifilm X-S20", brand: "Fujifilm", category: "Mirrorless", price: 34990000, image: "../pages/image/XS20.webp", images: ["../pages/image/XS20.webp", "../pages/image/XS20.1.webp", "../pages/image/XS20.2.jpg", "../pages/image/XS20.3.jpg"] },
    { id: 24, name: "Canon EOS R6 Mark II", brand: "Canon", category: "Mirrorless", price: 42000000, image: "../pages/image/R6II.jpg", images: ["../pages/image/R6II.jpg", "../pages/image/R6II.1.jpg", "../pages/image/R6II.2.jpg", "../pages/image/R6II.3.jpg"] },
    { id: 25, name: "Canon PowerShot G7 X Mark III", brand: "Canon", category: "Compact", price: 19990000, image: "../pages/image/G7XIII.jpg", images: ["../pages/image/G7XIII.jpg", "../pages/image/G7XIII.1.jpg", "../pages/image/G7XIII.2.jpg", "../pages/image/G7XIII.3.jpg"] },
    { id: 26, name: "Sony Alpha A7 III", brand: "Sony", category: "Mirrorless", price: 35000000, image: "../pages/image/A7III.jpg", images: ["../pages/image/A7III.jpg", "../pages/image/A7III.1.webp", "../pages/image/A7III.2.jpg", "../pages/image/A7III.3.jpg"] },
    { id: 27, name: "Fujifilm X100V", brand: "Fujifilm", category: "Compact", price: 36500000, image: "../pages/image/X100V.jpg", images: ["../pages/image/X100V.jpg", "../pages/image/X100V.1.jpg", "../pages/image/X100V.2.jpg", "../pages/image/X100V.3.jpg"] },
    { id: 28, name: "Fujifilm XF 35mm F1.4 R", brand: "Fujifilm", category: "Lens", price: 13490000, image: "../pages/image/XF35.jpg", images: ["../pages/image/XF35.jpg", "../pages/image/XF35.1.jpg", "../pages/image/XF35.2.jpg", "../pages/image/XF35.3.jpg"] },
    { id: 29, name: "Nikon Z30", brand: "Nikon", category: "Mirrorless", price: 17490000, image: "../pages/image/Z30.jpg", images: ["../pages/image/Z30.jpg", "../pages/image/Z30.1.jpg", "../pages/image/Z30.2.jpg", "../pages/image/Z30.3.jpg"] },
    { id: 30, name: "Nikon Zfc", brand: "Nikon", category: "Mirrorless", price: 24500000, image: "../pages/image/ZFC.jpg", images: ["../pages/image/ZFC.jpg", "../pages/image/ZFC.1.jpg", "../pages/image/ZFC.2.jpg", "../pages/image/ZFC.3.jpg"] },
    { id: 31, name: "Nikon D5600", brand: "Nikon", category: "DSLR", price: 13500000, image: "../pages/image/D5600.jpeg", images: ["../pages/image/D5600.jpeg", "../pages/image/D5600.1.webp", "../pages/image/D5600.2.webp", "../pages/image/D5600.3.webp"] },
    { id: 32, name: "Nikon NIKKOR Z 50mm F1.8 S", brand: "Nikon", category: "Lens", price: 14990000, image: "../pages/image/Z50.jpg", images: ["../pages/image/Z50.jpg", "../pages/image/Z50.1.jpeg", "../pages/image/Z50.2.jpeg"] }
];

// THÔNG TIN NỔI BẬT CHI TIẾT THEO TỪNG THIẾT BỊ
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
    18: ["Zoom đa dụng Pancake siêu mỏng nhẹ 116g", "Chống rung quang học Optical SteadyShot", "Cần gạt Power Zoom hỗ trợ thu phóng mượt", "Gồm 4 thấu kính phi cầu tối ưu quang sai"],
    19: ["Cảm biến APS-C CMOS 24.2MP sắc nét", "Màn hình cảm ứng lật 180 độ selfie", "11 chế độ giả lập màu phim Fujifilm", "Kết nối Wi-Fi truyền ảnh nhanh"],
    20: ["Cảm biến X-Trans CMOS III 24.3MP", "Bộ xử lý X-Processor Pro tốc độ cao", "Quay video 4K UHD giả lập màu phim", "Thiết kế hoài cổ với vòng xoay cơ học"],
    21: ["Cảm biến X-Trans CMOS 4 26.1MP", "Lấy nét theo pha phủ 100% khung hình", "Quay video DCI 4K/30p, Full HD 120p", "Màn hình cảm ứng nghiêng 2 chiều"],
    22: ["Cảm biến X-Trans CMOS 4 26.1MP", "Chống rung IBIS 5 trục tới 6-stop", "Báng cầm sâu, màn hình xoay lật", "Quay video 4K/30p 10-bit"],
    23: ["Cảm biến 26.1MP và chip X-Processor 5", "Chống rung IBIS 5 trục tới 7-stop", "Quay video 6.2K/30p 10-bit nội bộ", "Pin dung lượng lớn chụp tới 750 tấm"],
    24: ["Cảm biến Full-Frame 24.2MP và DIGIC X", "Chụp liên tiếp điện tử 40 fps", "Lấy nét AI nhận diện đa chủ thể", "Quay video 4K/60p không crop"],
    25: ["Cảm biến 1-inch 20.1MP và DIGIC 8", "Ống kính zoom 24-100mm f/1.8-2.8", "Hỗ trợ Livestream trực tiếp qua Wi-Fi", "Quay 4K/30p không crop, có cổng mic"],
    26: ["Cảm biến Full-Frame BSI 24.2MP", "693 điểm lấy nét phủ 93% khung hình", "Chống rung 5 trục trong thân máy", "Quay video 4K HDR sắc nét"],
    27: ["Cảm biến X-Trans CMOS 4 26.1MP", "Ống kính cố định 23mm F2.0 siêu nét", "Kính ngắm lai quang học & điện tử", "Tích hợp 17 giả lập màu phim"],
    28: ["Ống kính Fix tiêu cự vàng 35mm (quy đổi 53mm)", "Khẩu độ lớn F1.4 chụp thiếu sáng tốt", "Thấu kính phi cầu tối ưu độ nét", "Vỏ kim loại kèm vòng khẩu độ cơ học"],
    29: ["Cảm biến APS-C 20.9MP và EXPEED 6", "Màn hình xoay lật cảm ứng tối ưu Vlog", "Quay 4K/30p không crop, Full HD 120p", "Lấy nét Eye-AF người và động vật"],
    30: ["Cảm biến DX 20.9MP kết hợp EXPEED 6", "Thiết kế cổ điển lấy cảm hứng từ FM2", "Màn hình xoay lật đa góc linh hoạt", "Quay video 4K UHD không crop"],
    31: ["Cảm biến DX 24.2MP và EXPEED 4", "Hệ thống lấy nét tự động 39 điểm", "Màn hình cảm ứng xoay lật 3.2 inch", "Kết nối không dây SnapBridge"],
    32: ["Ống kính chuẩn ngàm Z khẩu độ F1.8", "Thấu kính ED và phi cầu chống quang sai", "Lớp phủ Nano Crystal giảm lóa sáng", "Thiết kế chống bụi và kháng thời tiết"]
};

// 👉 KHO ẢNH PHÂN LOẠI
const variantImagesDict = {
    1: {
        "black_body": "image/R50.black.bodyonly.webp",
        "black_kit":  "image/R50.black.lenkit.webp",
        "silver_body": "image/R50.silver.bodyonly.webp",
        "silver_kit":  "image/R50.silver.lenkit.webp"
    },
    2: {
        "black_body": "image/A6400.black.bodyonly.webp",
        "black_kit":  "image/A6400.black.lenkit.jpg",
        "silver_body": "image/A6400.silver.bodyonly.jpg",
        "silver_kit":  "image/A6400.silver.lenkit.jpg"
    },
    3: {
        "black_body": "image/XT5.black.bodyonly.jpg",
        "black_kit":  "image/XT5.black.lenkit.webp",
        "silver_body": "image/XT5.silver.bodyonly.webp",
        "silver_kit":  "image/XT5.silver.lenkit.webp"
    },
    4: {
        "black_body": "image/A6000.black.bodyonly.jpg",
        "black_kit":  "image/A6000.black.lenkit.jpg",
        "silver_body": "image/A6000.silver.bodyonly.jpg",
        "silver_kit":  "image/A6000.silver.lenkit.jpg"
    },
    5: {
        "black_body": "image/M10.black.bodyonly.jpg",
        "black_kit":  "image/M10.black.lenkit.jpg",
        "silver_body": "image/M10.silver.bodyonly.jpg",
        "silver_kit":  "image/M10.silver.lenkit.jpg"
    },
    6: {
        "black_body": "image/XA10.black.bodyonly.jpg",
        "black_kit":  "image/XA10.black.lenkit.webp",
        "silver_body": "image/XA10.silver.bodyonly.jpg",
        "silver_kit":  "image/XA10.silver.lenkit.jpg"
    },
    7: {
        "black_body": "image/4000D.black.bodyonly.jpg",
        "black_kit":  "image/4000D.black.lenkit.jpg"
    },
    8: {
        "black_body": "image/D3500.black.bodyonly.jpg",
        "black_kit":  "image/D3500.black.lenkit.jpg"
    },
    9: {
        "black_body": "image/D7500.black.bodyonly.jpg",
        "black_kit":  "image/D7500.black.lenkit.jpg"
    },
    10: {
        "black_body": "image/90D.black.bodyonly.jpg",
        "black_kit":  "image/90D.black.lenkit.jpg"
    },
    13: {
        "black_body": "image/ZV1.black.bodyonly.jpg",
        "black_kit":  "image/ZV1.black.lenkit.webp",
        "silver_body": "image/ZV1.silver.bodyonly.webp",
        "silver_kit":  "image/ZV1.silver.lenkit.webp"
    }
};

// 👉 BIẾN LƯU TRẠNG THÁI HIỆN TẠI
let selectedColor = "Black";
let selectedStyle = "Body Only";
let isDescExpanded = false;

// 2. LẤY SẢN PHẨM HIỆN TẠI TỪ URL (?id=...)
const params = new URLSearchParams(window.location.search);
const currentId = Number(params.get("id")) || 1;
const currentItem = products.find(p => p.id === currentId) || products[0];

// Danh sách ảnh hiện tại của sản phẩm (đặt sau currentItem để không bao giờ lỗi)
let currentGallery = [...(currentItem.images || [currentItem.image])];
let currentSlideIndex = 0;

// 3. CÁC HÀM XỬ LÝ GALLERY ẢNH & MŨI TÊN CHUYỂN ẢNH
function selectSlide(index) {
    if (!currentGallery.length) return;
    currentSlideIndex = (index + currentGallery.length) % currentGallery.length;

    const mainImg = document.getElementById("mainPreviewImg");
    if (mainImg) {
        mainImg.src = currentGallery[currentSlideIndex];
    }

    document.querySelectorAll(".thumbnail-item").forEach((item, idx) => {
        item.classList.toggle("active", idx === currentSlideIndex);
    });
}

function changeSlide(step) {
    selectSlide(currentSlideIndex + step);
}

// Bấm phím mũi tên trái / phải trên bàn phím để chuyển ảnh
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeSpecModal();
        return;
    }
    const specModal = document.getElementById("specModalOverlay");
    if (specModal && specModal.classList.contains("active")) return;
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

    if (e.key === "ArrowLeft") changeSlide(-1);
    if (e.key === "ArrowRight") changeSlide(1);
});

// 4. HÀM CHỌN PHÂN LOẠI MÀU & PHIÊN BẢN
function selectVariantOption(button, labelId, value) {
    button.parentElement.querySelectorAll(".btn-variant").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    document.getElementById(labelId).innerText = value;

    if (labelId === 'lblColor') {
        selectedColor = value;
    } else if (labelId === 'lblStyle') {
        selectedStyle = value;
    }

    updateMainProductImage();
    updateProductPrice();
}

function updateProductPrice() {
    let price = currentItem.price;
    if (selectedStyle === "Kèm Kit Lens") {
        price += 2000000;
    }
    document.querySelector(".highlight-price").innerText =
        price.toLocaleString("vi-VN") + " đ";
}

function updateMainProductImage() {
    const mainImg = document.getElementById("mainPreviewImg");
    const firstThumbImg = document.querySelector("#thumbnailRow .thumbnail-item:first-child img");
    if (!mainImg) return;

    const productImages = variantImagesDict[currentItem.id];
    let newImgSrc = currentItem.image;

    if (productImages) {
        const isSilver = selectedColor.toLowerCase().includes("silver");
        const isKit = selectedStyle.toLowerCase().includes("kit");

        let key = "";
        if (isSilver && isKit) key = "silver_kit";
        else if (isSilver && !isKit) key = "silver_body";
        else if (!isSilver && isKit) key = "black_kit";
        else key = "black_body";

        if (productImages[key]) {
            newImgSrc = productImages[key];
        }
    }

    // Nếu thiếu file ảnh biến thể trong thư mục, tự động fallback về ảnh gốc để không bị vỡ ảnh
    mainImg.onerror = function () {
        this.onerror = null;
        this.src = currentItem.image;
        currentGallery[0] = currentItem.image;
        if (firstThumbImg) firstThumbImg.src = currentItem.image;
    };

    // Đổi cả ảnh lớn và ảnh đầu tiên trong cột ảnh bên trái
    currentGallery[0] = newImgSrc;
    currentSlideIndex = 0;
    mainImg.src = newImgSrc;

    if (firstThumbImg) {
        firstThumbImg.parentElement.style.display = "flex";
        firstThumbImg.src = newImgSrc;
    }

    document.querySelectorAll(".thumbnail-item").forEach((item, idx) => {
        item.classList.toggle("active", idx === 0);
    });
}

function adjustOrderQty(delta) {
    const input = document.getElementById("orderQty");
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1;
    input.value = val;
}

// =========================================================================
// 5. MÔ TẢ CHI TIẾT (CÓ TABLE OF CONTENTS) & THÔNG SỐ KỸ THUẬT (LỚP PHỦ)
// =========================================================================
function getSpecsData() {
    const hl = highlightsDict[currentItem.id] || ["Hàng chính hãng", "Bảo hành 24 tháng", "Thiết kế nhỏ gọn", "Chất lượng cao"];
    if (currentItem.category === "Lens") {
        return [
            { group: "Thông số quang học", rows: [["Thương hiệu", currentItem.brand], ["Phân loại", "Ống kính rời (Lens)"], ["Tiêu cự & Khẩu độ", hl[0]], ["Hệ thống lấy nét", hl[1]]] },
            { group: "Thiết kế & Tương thích", rows: [["Cấu tạo quang học", hl[2]], ["Trọng lượng / Khoảng cách nét", hl[3]], ["Tương thích", `Thân máy ảnh ${currentItem.brand}`], ["Bảo hành", "24 tháng chính hãng"]] }
        ];
    }
    return [
        { group: "Cảm biến & Hình ảnh", rows: [["Thương hiệu", currentItem.brand], ["Phân khúc", currentItem.category], ["Cảm biến & Xử lý", hl[0]], ["Hệ thống lấy nét", hl[1]], ["Định dạng ảnh", "JPEG, RAW, MP4"]] },
        { group: "Phơi sáng & Quay video", rows: [["Hiệu năng chụp", hl[2]], ["Quay video / Pin", hl[3]], ["Chế độ phơi sáng", "Auto / P / A (Av) / S (Tv) / M"], ["Cân bằng trắng", "Tự động, Daylight, Cloudy, Tungsten, Custom"]] },
        { group: "Kết nối & Lưu trữ", rows: [["Thẻ nhớ hỗ trợ", "SD / SDHC / SDXC"], ["Kết nối không dây", "Wi-Fi, Bluetooth"], ["Bảo hành", "24 tháng chính hãng tại Camera Hut"]] }
    ];
}

function renderTabDescription() {
    const hl = highlightsDict[currentItem.id] || ["Hàng chính hãng", "Bảo hành 24 tháng", "Thiết kế nhỏ gọn", "Chất lượng cao"];
    const isLens = currentItem.category === "Lens";

    const sections = [
        {
            id: "sec-intro",
            title: `Giới Thiệu ${currentItem.name}: Thiết Bị Nổi Bật Từ ${currentItem.brand}`,
            text: `<span class="highlight-green">${currentItem.name}</span> là dòng ${isLens ? "ống kính" : "máy ảnh"} đại diện tiêu biểu cho phân khúc <strong>${currentItem.category}</strong> của thương hiệu <strong>${currentItem.brand}</strong>, mang lại hiệu năng ổn định cho cả nhu cầu chụp ảnh lẫn quay phim.`
        },
        {
            id: "sec-design",
            title: `Thiết Kế Và Xây Dựng Của ${currentItem.name}`,
            text: `Thiết bị sở hữu ngoại hình hiện đại, trọng lượng tối ưu giúp dễ dàng cầm nắm tác nghiệp hằng ngày hoặc mang theo du lịch. Các phím chức năng được bố trí hợp lý giúp người dùng làm quen và thao tác nhanh chóng.`
        },
        {
            id: "sec-sensor",
            title: `Cảm Biến Và Hiệu Năng Xử Lý Trên ${currentItem.name}`,
            text: `Điểm nổi bật của <strong>${currentItem.name}</strong> nằm ở <span class="highlight-green">${hl[0]}</span> kết hợp cùng <span class="highlight-green">${hl[1]}</span>, giúp tái tạo màu sắc sống động đặc trưng của ${currentItem.brand} và giữ chi tiết sắc nét.`
        },
        {
            id: "sec-features",
            title: `Tính Năng Quay Chụp Và Tốc Độ Vận Hành`,
            text: `Sản phẩm hỗ trợ tối đa cho người sáng tạo nội dung nhờ <span class="highlight-green">${hl[2]}</span> cùng khả năng <span class="highlight-green">${hl[3]}</span>, đáp ứng linh hoạt nhiều điều kiện ánh sáng khác nhau.`
        },
        {
            id: "sec-conclusion",
            title: `Kết Luận Về ${currentItem.name}`,
            text: `Với mức giá <strong>${Number(currentItem.price).toLocaleString("vi-VN")} đ</strong> đi kèm gói bảo hành chính hãng 24 tháng tại <strong>Camera Hut</strong>, ${currentItem.name} là lựa chọn đáng cân nhắc trong phân khúc ${currentItem.category}.`
        }
    ];

    const articleBox = document.getElementById("richArticleContent");
    if (articleBox) {
        articleBox.innerHTML = sections.map((s, idx) => `
            <h2 id="${s.id}">${s.title}</h2>
            <p>${s.text}</p>
            ${idx === 0 ? `<div class="article-img-wrap"><img src="${currentItem.image}" alt="${currentItem.name}"></div>` : ""}
        `).join("");
    }

    const tocList = document.getElementById("tocList");
    if (tocList) {
        tocList.innerHTML = sections.map((s, idx) => `
            <li>
                <a href="#${s.id}" class="${idx === 0 ? "active" : ""}" onclick="scrollToSection(event, '${s.id}')">${s.title}</a>
            </li>
        `).join("");
    }

    const specGroups = getSpecsData();
    const miniTable = document.getElementById("specsMiniTable");
    if (miniTable) {
        miniTable.innerHTML = specGroups.flatMap(g => g.rows).slice(0, 7)
            .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("");
    }

    const modalBody = document.getElementById("specModalBody");
    if (modalBody) {
        modalBody.innerHTML = specGroups.map(g => `
            <div class="spec-group-title">${g.group}</div>
            <table class="spec-full-table">
                ${g.rows.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("")}
            </table>
        `).join("");
    }

    const inBoxList = document.getElementById("inBoxList");
    if (inBoxList) {
        inBoxList.innerHTML = isLens
            ? `<li>Ống kính ${currentItem.name}</li><li>Nắp trước & nắp sau ống kính</li><li>Sách hướng dẫn & Thẻ bảo hành</li>`
            : `<li>Thân máy ${currentItem.name}</li><li>Pin sạc & Bộ sạc chính hãng</li><li>Dây đeo máy ảnh ${currentItem.brand}</li><li>Sách hướng dẫn & Thẻ bảo hành</li>`;
    }

    const reviewBox = document.getElementById("reviewContentBox");
    if (reviewBox) {
        reviewBox.innerHTML = `<p>Hiện chưa có đánh giá nào cho <strong>${currentItem.name}</strong>. Hãy mua ngay để trở thành người đầu tiên chia sẻ cảm nhận về thiết bị này!</p>`;
    }
}

function toggleDescriptionExpand() {
    isDescExpanded = !isDescExpanded;
    const box = document.getElementById("articleCollapseBox");
    if (box) box.classList.toggle("collapsed", !isDescExpanded);
    const toc = document.getElementById("tocSidebar");
    if (toc) toc.style.display = isDescExpanded ? "block" : "none";
    const btn = document.getElementById("btnToggleDesc");
    if (btn) btn.innerHTML = isDescExpanded ? `THU GỌN <span>▴</span>` : `XEM THÊM <span>▾</span>`;
    if (!isDescExpanded && box) {
        box.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

function scrollToSection(event, id) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

window.addEventListener("scroll", function () {
    if (!isDescExpanded) return;
    let activeId = "";
    document.querySelectorAll("#richArticleContent h2").forEach(h => {
        if (h.getBoundingClientRect().top <= 140) activeId = h.id;
    });
    if (activeId) {
        document.querySelectorAll("#tocList a").forEach(a => {
            a.classList.toggle("active", a.getAttribute("href") === `#${activeId}`);
        });
    }
});

function openSpecModal() {
    const overlay = document.getElementById("specModalOverlay");
    if (overlay) {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeSpecModal() {
    const overlay = document.getElementById("specModalOverlay");
    if (overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

// 6. KHỞI CHẠY RENDER TOÀN TRANG KHI LOAD
window.addEventListener("DOMContentLoaded", function () {
    document.title = `${currentItem.name} - Camera Hut`;
    document.getElementById("bcCategory").innerText = currentItem.category;
    document.getElementById("bcName").innerText = currentItem.name;

    const isLens = currentItem.category === "Lens";
    const highlights = highlightsDict[currentItem.id] || ["Hàng chính hãng", "Bảo hành 24 tháng"];

    // A. Render Khối sản phẩm chính
    document.getElementById("mainProductView").innerHTML = `
        <div class="gallery-column">
            <div class="main-preview-box" tabindex="0" onclick="this.focus()">
                <button type="button" class="gallery-nav-btn prev-btn" onclick="event.stopPropagation(); changeSlide(-1)">&#10094;</button>
                <img id="mainPreviewImg" src="${currentGallery[0]}" alt="${currentItem.name}">
                <button type="button" class="gallery-nav-btn next-btn" onclick="event.stopPropagation(); changeSlide(1)">&#10095;</button>
            </div>
            <div class="thumbnail-row" id="thumbnailRow">
                ${currentGallery.map((imgSrc, index) => `
                    <div class="thumbnail-item ${index === 0 ? "active" : ""}" onclick="selectSlide(${index})">
                        <img src="${imgSrc}" alt="${currentItem.name}" onerror="this.parentElement.style.display='none'">
                    </div>
                `).join("")}
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
                    <button type="button" class="btn-variant active" onclick="selectVariantOption(this, 'lblColor', 'Black')">📷 Black</button>
                    <button type="button" class="btn-variant" onclick="selectVariantOption(this, 'lblColor', 'Silver')">📷 Silver</button>
                </div>
            </div>

            <!-- Kiểu cấu hình (chỉ hiển thị nếu không phải Lens) -->
            ${!isLens ? `
            <div class="variant-group">
                <div class="variant-label">Phiên bản: <span id="lblStyle">Body Only</span></div>
                <div class="variant-buttons">
                    <button type="button" class="btn-variant active" onclick="selectVariantOption(this, 'lblStyle', 'Body Only')">📷 Body Only</button>
                    <button type="button" class="btn-variant" onclick="selectVariantOption(this, 'lblStyle', 'Kèm Kit Lens')">📷 Kèm Kit Lens</button>
                </div>
            </div>` : ""}

            <!-- Thao tác mua hàng -->
            <div class="action-checkout-row">
                <div class="quantity-picker">
                    <button type="button" onclick="adjustOrderQty(-1)">-</button>
                    <input type="text" id="orderQty" value="1" readonly>
                    <button type="button" onclick="adjustOrderQty(1)">+</button>
                </div>
                <div class="action-buttons">
                    <button type="button" class="btn-add-cart" onclick="addToCart()">THÊM VÀO GIỎ</button>
                    <button type="button" class="btn-buy-primary" onclick="alert('Đang chuyển đến trang thanh toán...')">MUA NGAY</button>
                </div>
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

    // Đồng bộ đúng ảnh màu Black ngay lúc mới vào trang
    updateMainProductImage();

    // B. Logic Phụ kiện khuyên dùng (Ưu tiên Lọc Ống kính CÙNG HÃNG với máy)
    document.getElementById("accessoriesTitle").innerText = `Phụ kiện & Ống kính khuyên dùng cho ${currentItem.brand}`;
    let accessories = products.filter(p => p.id !== currentItem.id && p.category === "Lens" && p.brand === currentItem.brand);

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

    // C. Logic Sản phẩm tương tự (CHỈ HIỂN THỊ CÙNG HÃNG)
    document.getElementById("relatedTitle").innerText = `SẢN PHẨM KHÁC TỪ THƯƠNG HIỆU ${currentItem.brand.toUpperCase()}`;
    let sameBrandProducts = products.filter(p => p.id !== currentItem.id && p.brand === currentItem.brand);

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

    // D. Render Mô tả chi tiết + Mục lục + Thông số kỹ thuật + Đánh giá
    renderTabDescription();
});

function addToCart() {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    const qty = parseInt(document.getElementById("orderQty").value);
    let finalPrice = currentItem.price;
    if (selectedStyle === "Kèm Kit Lens") finalPrice += 2000000;

    const cartItem = {
        id: currentItem.id,
        name: currentItem.name,
        image: document.getElementById("mainPreviewImg").src,
        color: selectedColor,
        style: selectedStyle,
        price: finalPrice,
        quantity: qty
    };

    cart.push(cartItem);
    localStorage.setItem('myCart', JSON.stringify(cart));
    alert(`Đã lưu ${qty} chiếc ${currentItem.name} vào giỏ hàng thật!`);
}