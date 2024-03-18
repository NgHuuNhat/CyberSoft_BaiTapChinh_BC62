const api = new Api();

function getListProduct() {
    const promise = api.fecthData();
    // pending
    document.getElementById("loader").style.display = "block";
    promise
        .then(function (result) {
            document.getElementById("loader").style.display = "none";
            // console.log(result.data);
            renderUI(result.data);
            // loadItem();
        })
        .catch(function (error) {
            document.getElementById("loader").style.display = "none";
            console.log(error);
        });
}
getListProduct();

function renderUI(data) {
    let content = "";

    data.forEach(function (product, index) {
        content += `
            <tr class="item">
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                    <img src="${product.img}" width="100" />
                </td>
                <td>${product.type}</td>

                <td>${product.screen}</td>
                <td>${product.frontCamera}</td>
                <td>${product.backCamera}</td>
                <td>${product.desc}</td>

                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct(${product.id}, ${index + 1})" >Edit</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${product.id})" >Delete</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("tblDanhSachSP").innerHTML = content;
}

function deleteProduct(id) {
    console.log(id);
    const promise = api.delete(id);
    promise
        .then(function (result) {
            console.log(result);
            //refresh lại fecthData mới
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        });
}

document.getElementById("btnThemSP").onclick = function () {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Add product";
    const btnAdd = `<button class="btn btn-success" onclick="addProduct()" >Add Product</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;

    // Xóa thông báo lỗi khi mở modal
    clearErrorMessages();
    // Xóa các giá trị nhập liệu trước đó khi mở modal
    clearInputFields();
}

function addProduct() {
    const name = document.getElementById("TenSP").value;
    const price = document.getElementById("GiaSP").value;
    const image = document.getElementById("HinhSP").value;
    const desc = document.getElementById("MoTa").value;

    const screen = document.getElementById("Screen").value;
    const frontCamera = document.getElementById("CameraTruoc").value;
    const backCamera = document.getElementById("CameraSau").value;
    const type = document.getElementById("HangDienThoai").value;

    // validation
    // tạo biến flag(boolean), true: hợp lệ, false: ko hợp lệ.
    let isKiemTraRong = true;

    isKiemTraRong &= kiemTraRong(name, "errorTenSP", "(*) Thiếu tên sản phẩm!");
    isKiemTraRong &= kiemTraRong(price, "errorGiaSP", "(*) Thiếu giá tiền!");
    isKiemTraRong &= kiemTraRong(image, "errorHinhSP", "(*) Thiếu hình ảnh!");
    isKiemTraRong &= kiemTraRong(desc, "errorMoTa", "(*) Thiếu mô tả!");
    isKiemTraRong &= kiemTraRong(screen, "errorScreen", "(*) Thiếu kích thước màn hình!");
    isKiemTraRong &= kiemTraRong(frontCamera, "errorCameraTruoc", "(*) Thiếu camera trước!");
    isKiemTraRong &= kiemTraRong(backCamera, "errorCameraSau", "(*) Thiếu camera sau!");
    isKiemTraRong &= kiemTraRong(type, "errorHangDienThoai", "(*) Thiếu hãng điện thoại!");
    if (!isKiemTraRong) return null;

    // Nếu tất cả trường nhập liệu hợp lệ, tiến hành thêm sản phẩm
    const product = new Product("", name, price, screen, frontCamera, backCamera, image, desc, type);
    console.log(product);

    const promise = api.add(product);
    promise
        .then(function (result) {
            console.log(result);
            // close model
            document.getElementsByClassName("close")[0].click();
            //refresh lại fecthData mới
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function editProduct(id, index) {
    console.log("stt: ", index);
    console.log("id: ", id);

    clearErrorMessages();

    document.getElementsByClassName("modal-title")[0].innerHTML = "Edit product";
    const btnUpdate = `<button class="btn btn-success" onclick="updateProduct(${id})">Update Product</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = btnUpdate;

    const promise = api.getProductById(id);
    promise
        .then(function (result) {
            const product = result.data;
            console.log(product);
            //show thong tin ra ngoai
            document.getElementById("TenSP").value = product.name;
            document.getElementById("GiaSP").value = product.price;
            document.getElementById("HinhSP").value = product.img;
            document.getElementById("MoTa").value = product.desc;

            document.getElementById("Screen").value = product.screen;
            document.getElementById("CameraTruoc").value = product.frontCamera;
            document.getElementById("CameraSau").value = product.backCamera;
            document.getElementById("HangDienThoai").value = product.type;

        })
        .catch(function (error) {
            console.log(error);
        });
}

function updateProduct(id) {
    //lay thong tin tu user nhap vao
    const name = document.getElementById("TenSP").value;
    const price = document.getElementById("GiaSP").value;
    const image = document.getElementById("HinhSP").value;
    const desc = document.getElementById("MoTa").value;

    const screen = document.getElementById("Screen").value;
    const frontCamera = document.getElementById("CameraTruoc").value;
    const backCamera = document.getElementById("CameraSau").value;
    const type = document.getElementById("HangDienThoai").value;

    // validation
    // tạo biến flag(boolean), true: hợp lệ, false: ko hợp lệ.
    let isKiemTraRong = true;

    isKiemTraRong &= kiemTraRong(name, "errorTenSP", "(*) Thiếu tên sản phẩm!");
    isKiemTraRong &= kiemTraRong(price, "errorGiaSP", "(*) Thiếu giá tiền!");
    isKiemTraRong &= kiemTraRong(image, "errorHinhSP", "(*) Thiếu hình ảnh!");
    isKiemTraRong &= kiemTraRong(desc, "errorMoTa", "(*) Thiếu mô tả!");
    isKiemTraRong &= kiemTraRong(screen, "errorScreen", "(*) Thiếu kích thước màn hình!");
    isKiemTraRong &= kiemTraRong(frontCamera, "errorCameraTruoc", "(*) Thiếu camera trước!");
    isKiemTraRong &= kiemTraRong(backCamera, "errorCameraSau", "(*) Thiếu camera sau!");
    isKiemTraRong &= kiemTraRong(type, "errorHangDienThoai", "(*) Thiếu hãng điện thoại!");
    if (!isKiemTraRong) return null;

    //tao product tu Product
    // const product = new Products(id, name, price, image, desc);
    const product = new Product(id, name, price, screen, frontCamera, backCamera, image, desc, type);
    console.log(product);

    const promise = api.update(product);
    promise
        .then(function (result) {
            console.log(result);
            // close model
            document.getElementsByClassName("close")[0].click();
            //refresh lại fecthData mới
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        });
}

//timkiem
timKiem();
//sap xep
document.getElementById("sapXep").addEventListener("change", handleSortChange);




