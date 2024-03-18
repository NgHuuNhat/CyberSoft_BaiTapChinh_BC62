function ThongBao(thongTin) {
    // Kiểm tra nếu chưa điền tài khoản thì không tạo Nhân viên
    if (thongTin._taiKhoan === "") {
        // alert("Thiếu tài khoản!");
        document.getElementById("tbTKNV").innerText = "Thiếu tài khoản!";
        document.getElementById("tbTKNV").style.display = "block";
        document.getElementById("tbTKNV").reset();
        return;
    } else {
        document.getElementById("tbTKNV").style.display = "none";
    }

}