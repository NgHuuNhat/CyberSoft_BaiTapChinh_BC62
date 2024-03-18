function clearErrorMessages() {
    // Xóa tất cả thông báo lỗi
    const errorElements = document.querySelectorAll(".text-danger");
    errorElements.forEach(function (element) {
        element.textContent = "";
    });
}

function clearInputFields() {
     // Xóa giá trị đã chọn của dropdown select
     const selectElement = document.getElementById("HangDienThoai");
     selectElement.selectedIndex = 0; // Chọn lại option đầu tiên
 
     // Xóa tất cả giá trị nhập liệu trong các trường input và textarea
     const inputElements = document.querySelectorAll(".modal input, .modal textarea");
     inputElements.forEach(function (element) {
         element.value = "";
     });
}


function kiemTraRong(value, spanId, message) {
    if (value === "" || value === "Chọn hãng") {
        // alert("Thiếu tài khoản!");
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        // document.getElementById("tbTKNV").reset();
        return false;
    } else {
        document.getElementById(spanId).innerHTML = "";
        return true;
    }
};