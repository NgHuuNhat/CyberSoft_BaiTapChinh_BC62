const dsnv = new DSNV();
const validation = new Validation();

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
    const _taiKhoan = document.getElementById("tknv").value;
    const _hoTen = document.getElementById("name").value;
    const _email = document.getElementById("email").value;
    const _matKhau = document.getElementById("password").value;
    const _ngayLam = document.getElementById("datepicker").value;
    const _luongCoBan = document.getElementById("luongCB").value;
    const _chucVu = document.getElementById("chucvu").value;
    const _gioLamTrongThang = document.getElementById("gioLam").value;

    // validation
    // tạo biến flag(boolean), true: hợp lệ, false: ko hợp lệ.
    let isValidation = true;
    isValidation &= validation.kiemTraRong(_taiKhoan, "tbTKNV", "(*) Thiếu tài khoản!");
    isValidation &= validation.kiemTraRong(_hoTen, "tbTen", "(*) Thiếu họ và tên!");
    isValidation &= validation.kiemTraRong(_email, "tbEmail", "(*) Thiếu email!");
    isValidation &= validation.kiemTraRong(_matKhau, "tbMatKhau", "(*) Thiếu mật khẩu!");
    isValidation &= validation.kiemTraRong(_ngayLam, "tbNgay", "(*) Thiếu ngày làm!");
    isValidation &= validation.kiemTraRong(_luongCoBan, "tbLuongCB", "(*) Thiếu lương cơ bản!");
    isValidation &= validation.kiemTraRong(_chucVu, "tbChucVu", "(*) Thiếu chức vụ!");
    isValidation &= validation.kiemTraRong(_gioLamTrongThang, "tbGiolam", "(*) Thiếu giờ làm trong tháng!");
    if (!isValidation) return null;

    const nv = new NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLamTrongThang);
    nv.tinhTongLuong();
    nv.xepLoaiNhanVien();

    // Reset form
    resetForm();
    // tắt form thông tin sau khi điền xong
    $('#myModal').modal('hide');

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
                    <button class="btn btn-info" onclick="editNhanVien('${nv.taiKhoan}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteNhanVien('${nv.taiKhoan}')">Delete</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

function resetForm() {
    // Reset form
    document.getElementById("form").reset();
}
function buttonThemNhanVien() {
    // Reset form
    resetForm();
    document.getElementById("tknv").disabled = false;
    // Ẩn nút "Thêm người dùng", hiển thị nút "Cập nhật"
    document.getElementById("btnThemNV").style.display = "block";
    document.getElementById("btnCapNhat").style.display = "none";
}

function addNhanVien() {
    const nv = layThongTinNhanVien();
    if (!nv) return;

    dsnv.themNV(nv);
    hienThiDanhSachNhanVien(dsnv.arr);
    setLocalStorage();
}
function deleteNhanVien(username) {
    // console.log(username)
    dsnv.xoaNV(username);
    hienThiDanhSachNhanVien(dsnv.arr);
    setLocalStorage();
}
function editNhanVien(username) {
    console.log(username);
    const nv = dsnv.layThongTinNV(username);
    if (nv) {
        // Hiển thị thông tin nhân viên trên form
        document.getElementById("tknv").value = nv.taiKhoan;
        document.getElementById("tknv").disabled = true;
        document.getElementById("name").value = nv.hoTen;
        document.getElementById("email").value = nv.email;
        document.getElementById("password").value = nv.matKhau;
        document.getElementById("datepicker").value = nv.ngayLam;
        document.getElementById("luongCB").value = nv.luongCoBan;
        document.getElementById("chucvu").value = nv.chucVu;
        document.getElementById("gioLam").value = nv.gioLamTrongThang;
    }
    // Hiển thị modal
    $('#myModal').modal('show');
    // Ẩn nút "Thêm người dùng", hiển thị nút "Cập nhật"
    document.getElementById("btnThemNV").style.display = "none";
    document.getElementById("btnCapNhat").style.display = "block";
}
function updateNhanVien() {
    console.log("update");
    const nv = layThongTinNhanVien();
    dsnv.capNhatNV(nv);

    hienThiDanhSachNhanVien(dsnv.arr);
    setLocalStorage();
}
