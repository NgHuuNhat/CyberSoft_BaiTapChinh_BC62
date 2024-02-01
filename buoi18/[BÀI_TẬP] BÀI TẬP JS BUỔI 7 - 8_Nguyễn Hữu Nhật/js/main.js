function getId(id){
    return document.getElementById(id);
}

let mang = [];
getId("themSo").onclick = function(){
    nhapSo();
    tongSoDuong();
    demSoDuong();
    soNhoNhat();
    soDuongNhoNhat();
    soChanCuoiCung();
}

getId("doiCho").onclick = function(){
    doiCho();
}

function nhapSo(){
    let nhapSo = parseFloat(getId("nhapSo").value);
    mang.push(nhapSo);
    getId("hienThiMang").innerHTML = "Mảng A = [ " + mang + " ]" + "<br>";
}

function tongSoDuong(){
    let tong = 0;
    for(let i=0; i<mang.length; i++){
        if(mang[i] > 0){
            tong += mang[i];
        }
    }

    getId("hienThiTongSoDuong").innerHTML = "Tổng số dương là: " + tong;
}

function demSoDuong(){
    let dem = 0;
    for(let i=0; i<mang.length; i++){
        if(mang[i] > 0){
            dem ++;
        }
    }

    getId("hienThiDemSoDuong").innerHTML = "Đếm số dương: " + dem;

}

function soNhoNhat(){
    let soNhoNhat = mang[0];
    for(let i=0; i<mang.length; i++){
        if(mang[i] < soNhoNhat){
            soNhoNhat = mang[i];
        }
    }

    getId("hienThiSoNhoNhat").innerHTML = "Số nhỏ nhất là: " + soNhoNhat;
}

function soDuongNhoNhat(){
    let soDuongNhoNhat;
    for(let i=0; i<mang.length; i++){
        if(mang[i] > 0 && (soDuongNhoNhat === undefined || mang[i] < soDuongNhoNhat)){
            soDuongNhoNhat = mang[i];
        }
    }

    getId("hienThiSoDuongNhoNhat").innerHTML = "Số dương nhỏ nhất là: " + soDuongNhoNhat;
}

function soChanCuoiCung(){
    let soChanCuoiCung = -1;
    // Duyệt qua từng phần tử của mảng
    for (let i = mang.length - 1; i >= 0; i--) {
        // Nếu phần tử hiện tại là số chẵn, lưu và kết thúc vòng lặp
        if (mang[i] > 0 && mang[i] % 2 === 0) {
            soChanCuoiCung = mang[i];
            break;
        } 
    }

    getId("hienThiSoChanCuoiCung").innerHTML = "Số chẵn cuối cùng là: " + soChanCuoiCung;
}

function doiCho(){

    let viTri1 = parseInt(getId("viTri1").value);
    let viTri2 = parseInt(getId("viTri2").value);

   // Kiểm tra xem vị trí có hợp lệ không
    if (
        viTri1 < 0 || viTri1 >= mang.length ||
        viTri2 < 0 || viTri2 >= mang.length
    ) {
        return "Vị trí không hợp lệ.";
    }

    // Sử dụng vòng lặp for để đổi chỗ giá trị của hai vị trí trong mảng
    for (let i = 0; i < mang.length; i++) {
        if (i === viTri1) {
        let temp = mang[viTri1];
        mang[viTri1] = mang[viTri2];
        mang[viTri2] = temp;
        break; // Kết thúc vòng lặp sau khi đổi chỗ
        }
    }

    getId("hienThiDoiCho").innerHTML = "Mảng A sau khi đổi chỗ là: " + mang;
}


