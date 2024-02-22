function Validation() {
    this.kiemTraRong = function (value, spanId, message) {
        if (value === "" || value === "Chọn chức vụ") {
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
}