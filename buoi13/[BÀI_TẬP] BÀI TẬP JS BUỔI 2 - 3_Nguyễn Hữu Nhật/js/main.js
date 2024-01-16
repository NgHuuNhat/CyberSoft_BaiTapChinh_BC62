//Bài 1: Tính tiền lương nhân viên
function tinhLuong() {

    // Định dạng số tiền VND với 3 số 0 phân tách
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
      });

    let luongMotNgay = parseFloat(document.getElementById("luongMotNgay").value);
    // format lại luongMotNgay theo định dạng VND 
    // document.getElementById("luongMotNgay").value = formatter.format(luongMotNgay);
    let soNgayLam = parseFloat(document.getElementById("soNgayLam").value);
    let luong = luongMotNgay*soNgayLam;

    document.getElementById("hienThiLuong").innerHTML = "Tổng lương = " + formatter.format(luong);
}

document.getElementById("tinhLuong").onclick = tinhLuong;



//Bài 2: Tính giá trị trung bình
function tinhTrungBinh(){

    let soThu1 = parseFloat(document.getElementById("soThu1").value);
    let soThu2 = parseFloat(document.getElementById("soThu2").value);
    let soThu3 = parseFloat(document.getElementById("soThu3").value);
    let soThu4 = parseFloat(document.getElementById("soThu4").value);
    let soThu5 = parseFloat(document.getElementById("soThu5").value);

    let giaTriTrungBinh = (soThu1+soThu2+soThu3+soThu4+soThu5)/5;
    giaTriTrungBinh = giaTriTrungBinh.toFixed(2);

    document.getElementById("hienThiTrungBinh").innerHTML = "Giá trị trung bình = " + giaTriTrungBinh;

}

document.getElementById("tinhTrungBinh").onclick = tinhTrungBinh;



//Bài 3: Quy đổi tiền
function quyDoi(){

    // Định dạng số tiền VND với 3 số 0 phân tách
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
    });

    let giaTienUSD = parseFloat(document.getElementById("giaTienUSD").value);
    let soTienUSD = parseFloat(document.getElementById("soTienUSD").value);

    let quyDoiTien = giaTienUSD*soTienUSD;
    quyDoiTien = formatter.format(quyDoiTien);

    document.getElementById("hienThiQuyDoi").innerHTML = "Quy đổi: " + soTienUSD + " $ = " + quyDoiTien;

}

document.getElementById("quyDoiTien").onclick = quyDoi;



//Bài 4: Tính diện tích, chu vi hình chữ nhật
function tinh(){

    let chieuDai = parseFloat(document.getElementById("chieuDai").value);
    let chieuRong = parseFloat(document.getElementById("chieuRong").value);

    let dienTich = chieuDai*chieuRong;
    dienTich = dienTich.toFixed(2);
    let chuVi = (chieuDai+chieuRong)*2;
    chuVi = chuVi.toFixed(2);

    document.getElementById("hienThiTinh").innerHTML = "Diện tích = " + dienTich + "<br>" + "Chu vi = " + chuVi;

}

document.getElementById("tinh").onclick = tinh;

//Bài 5: Tính tổng 2 ký số

function tinhTongHaiKySo(){

    let soHaiChuSo = parseInt(document.getElementById("soHaiChuSo").value);

    let soHangChuc = parseInt(soHaiChuSo / 10);
    let soHangDonVi = soHaiChuSo % 10;
    let tongHaiKySo = soHangDonVi + soHangChuc;

    document.getElementById("hienThiTongHaiKySo").innerHTML = "Tổng 2 ký số = " + soHangChuc + " + " + soHangDonVi + " = " + tongHaiKySo;

}

document.getElementById("tinhTongHaiKySo").onclick = tinhTongHaiKySo;

