// Lắng nghe sự kiện click trên các menu item
// $("#bai1").click(function() {
//     // Ẩn tất cả các nội dung của bài
//     $(".container").hide();
//     // Hiển thị nội dung của Bài 1
//     $("#bai1Content").show();
// });

// $("#bai2").click(function() {
//     // Ẩn tất cả các nội dung của bài
//     $(".container").hide();
//     // Hiển thị nội dung của Bài 2
//     $("#bai2Content").show();
// });

$(".container").hide();
$("#bai1Content").show();

// Số lượng bài
var soLuongBai = 4;

// Tạo menu items và sự kiện click tương ứng
for (var i = 1; i <= soLuongBai; i++) {
    // Thêm một menu item mới vào ul với id là menuItems
    $("#menuItems").append('<li class="nav-item" id="bai' + i + '"><a class="nav-link" href="#">Bài ' + i + '</a></li>');

    // Sự kiện click cho mỗi menu item
    $("#bai" + i).click(function(bai) {
        return function() {
            // Ẩn tất cả các nội dung của bài
            $(".container").hide();
            // Hiển thị nội dung của Bài
            $("#bai" + bai + "Content").show();
        };
    }(i));
}

// Bài 1: QUẢN LÝ TUYỂN SINH
function ketQua() {

    let diemChuan = parseFloat(document.getElementById("diemChuan").value);
    let khuVuc = document.getElementById("khuVuc").value;
    let doiTuong = document.getElementById("doiTuong").value;
    let diemMon1 = parseFloat(document.getElementById("diemMon1").value);
    let diemMon2 = parseFloat(document.getElementById("diemMon2").value);
    let diemMon3 = parseFloat(document.getElementById("diemMon3").value);

    let diemKhuVuc = 0;
    let diemDoiTuong = 0;

    if(khuVuc == "X"){
        diemKhuVuc = 0;

    } else if (khuVuc == "A") {
        diemKhuVuc = 2;

    } else if (khuVuc == "B") {
        diemKhuVuc = 1;

    } else if (khuVuc == "C") {
        diemKhuVuc = 0.5;
    }

    if(doiTuong == "0"){
        diemDoiTuong = 0;

    } else if (doiTuong == "1") {
        diemDoiTuong = 2.5;

    } else if (doiTuong == "2") {
        diemDoiTuong = 1.5;
        
    } else if (doiTuong == "3") {
        diemDoiTuong = 1;
    }

    let diemThi = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

    if (diemThi >= diemChuan){
        document.getElementById("hienThiKetQua").innerHTML = "Tổng điểm: " + diemThi + "<br>" + "Kết quả: Đậu";
    } else {
        document.getElementById("hienThiKetQua").innerHTML = "Tổng điểm: " + diemThi + "<br>" + "Kết quả: Rớt";
    }
}
document.getElementById("ketQua").onclick = ketQua;

// Bài 2: TÍNH TIỀN ĐIỆN
function tinhTienDien() {

    let hoTen = document.getElementById("hoTen").value;
    let soKw = parseFloat(document.getElementById("soKw").value);

    let tienDien = 0;
    let giaDien1 = 500;  // Giá điện cho 50 Kw đầu tiên
    let giaDien2 = 650;  // Giá điện cho 50 Kw tiếp theo
    let giaDien3 = 850;  // Giá điện cho 100 Kw tiếp theo
    let giaDien4 = 1100; // Giá điện cho 150 Kw tiếp theo
    let giaDien5 = 1300; // Giá điện cho Kw trên 350

    if (soKw <= 50) {
        tienDien = giaDien1 * soKw;

    } else if (soKw <= 100) {
        tienDien = giaDien1 * 50 + giaDien2 * (soKw - 50);

    } else if (soKw <= 200) {
        tienDien = giaDien1 * 50 + giaDien2 * 50 + giaDien3 * (soKw - 100);

    } else if (soKw <= 350) {
        tienDien = giaDien1 * 50 + giaDien2 * 50 + giaDien3 * 100 + giaDien4 * (soKw - 200);

    } else {
        tienDien = giaDien1 * 50 + giaDien2 * 50 + giaDien3 * 100 + giaDien4 * 150 + giaDien5 * (soKw - 350);
    }

    tienDien = tienDien.toLocaleString();

    document.getElementById("hienThiTienDien").innerHTML = "Họ tên: " + hoTen + "<br>" + "Tiền điện: " + tienDien;

}
document.getElementById("tinhTienDien").onclick = tinhTienDien;

// Bài 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
function tinhTienThue(){

    let hoTen3 = document.getElementById("hoTen3").value;
    let tongThuNhapNam = parseFloat(document.getElementById("tongThuNhapNam").value);
    let soNguoiPhuThuoc = parseInt(document.getElementById("soNguoiPhuThuoc").value);

    let thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc*1600000;
    let tienThueThuNhapCaNhan = 0;

    if(thuNhapChiuThue < 60000000){
        tienThueThuNhapCaNhan = thuNhapChiuThue * 0.05;

    } else if(60000000 < thuNhapChiuThue < 120000000){
        tienThueThuNhapCaNhan = thuNhapChiuThue * 0.1;

    } else if(120000000 < thuNhapChiuThue < 210000000){
        tienThueThuNhapCaNhan = thuNhapChiuThue * 0.15;

    } else if(210000000 < thuNhapChiuThue < 384000000){
        tienThueThuNhapCaNhan = thuNhapChiuThue * 0.2;

    } else if(384000000 < thuNhapChiuThue < 624000000){
        tienThueThuNhapCaNhan = thuNhapChiuThue * 0.25;
        
    } else if(624000000 < thuNhapChiuThue < 960000000){
        tienThueThuNhapCaNhan = thuNhapChiuThue * 0.3;
        
    } else if(960000000 < thuNhapChiuThue){
        tienThueThuNhapCaNhan = thuNhapChiuThue * 0.35;
        
    }

    // Định dạng số tiền VND với 3 số 0 phân tách
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
    });
    tienThueThuNhapCaNhan = formatter.format(tienThueThuNhapCaNhan);
    document.getElementById("hienThiTienThue").innerHTML = "Họ tên: " + hoTen3 + "<br>" + "Tiền thuế thu nhập cá nhân: " + tienThueThuNhapCaNhan;

}
document.getElementById("tinhTienThue").onclick = tinhTienThue;

// Bài 4: TÍNH TIỀN CÁP
function hienAnSoKetNoi(){

    let loaiKH = document.getElementById("loaiKH");
    let soKetNoiInput = document.getElementById("soKetNoiInput");

    if(loaiKH.value === "doanhNghiep"){
        soKetNoiInput.style.display = "block";
    } else {
        soKetNoiInput.style.display = "none";
    }

}

function tinhTienCap(){

    let loaiKH = document.getElementById("loaiKH").value;
    let maKH = document.getElementById("maKH").value;
    let soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value);
    let soKetNoi = parseInt(document.getElementById("soKetNoi").value);

    let phiXuLiHoaDon = 0.0;
    let phiDichVuCoBan = 0.0;
    let thueKenhCaoCap = 0.0;

    if(loaiKH === "nhaDan"){
        phiXuLiHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        thueKenhCaoCap = 7.5;

    } else if(loaiKH === "doanhNghiep"){
        phiXuLiHoaDon = 15;
        thueKenhCaoCap = 50;
        if(1 <= soKetNoi <= 10){
            phiDichVuCoBan = 75;

        } else if(10 < soKetNoi){
            phiDichVuCoBan = 75 + 5*(soKetNoi-10);
        }
    }

    let tienCap = phiXuLiHoaDon + phiDichVuCoBan + thueKenhCaoCap;

    document.getElementById("hienThiTienCap").innerHTML = "Mã khách hàng: " + maKH + "<br>" + "Tiền cáp: $" + tienCap;

}
document.getElementById("tinhTienCap").onclick = tinhTienCap;



