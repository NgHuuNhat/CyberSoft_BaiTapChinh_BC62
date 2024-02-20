const dsnv = new DSNV();

getLocalStorage();

function setLocalStorage() {
    const arrString = JSON.stringify(dsnv.arr);
    localStorage.setItem("DSNV", arrString);
}
function getLocalStorage() {
    if (!localStorage.getItem("DSNV")) return;

    const arrString = localStorage.getItem("DSNV");
    const arrJSON = JSON.parse(arrString);
    dsnv.arr = arrJSON;
    hienThiDanhSachNhanVien(dsnv.arr);
}

function layThongTinNhanVien() {
    // const _taiKhoan = document.getElementById("tknv").value;
    // const _hoTen = document.getElementById("name").value;
    // const _email = document.getElementById("email").value;
    // const _matKhau = document.getElementById("password").value;
    // const _ngayLam = document.getElementById("datepicker").value;
    // const _luongCoBan = document.getElementById("luongCB").value;
    // const _chucVu = document.getElementById("chucvu").value;
    // const _gioLamTrongThang = document.getElementById("gioLam").value;

    // // Kiểm tra nếu chưa điền tài khoản thì không tạo Nhân viên
    // if (_taiKhoan === "") {
    //     // alert("Thiếu tài khoản!");
    //     document.getElementById("tbTKNV").innerText = "Thiếu tài khoản!";
    //     document.getElementById("tbTKNV").style.display = "block";
    //     document.getElementById("tbTKNV").reset();
    //     return;
    // } else {
    //     document.getElementById("tbTKNV").style.display = "none";
    // }

    const thongTin = {
        _taiKhoan: document.getElementById("tknv").value,
        _hoTen: document.getElementById("name").value,
        _email: document.getElementById("email").value,
        _matKhau: document.getElementById("password").value,
        _ngayLam: document.getElementById("datepicker").value,
        _luongCoBan: document.getElementById("luongCB").value,
        _chucVu: document.getElementById("chucvu").value,
        _gioLamTrongThang: document.getElementById("gioLam").value,
        // Các giá trị khác tùy thuộc vào cụm từ trên
    };

    ThongBao(thongTin);

    // const nv = new NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLamTrongThang);
    const nv = new NhanVien(thongTin);
    return nv;

}
function hienThiDanhSachNhanVien(data) {
    let content = "";
    for (let i = 0; i < data.length; i++) {
        const nv = data[i];
        content += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xepLoai}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteSV('${nv.taiKhoan}')">Delete</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}
function themNhanVien() {
    const nv = layThongTinNhanVien();

    dsnv.themNhanVien(nv);
    hienThiDanhSachNhanVien(dsnv.arr);
    setLocalStorage();

}