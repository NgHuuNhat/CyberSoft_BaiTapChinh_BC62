const api = new Api();
const gioHang = new Cart();

function getEle(id) {
    return document.getElementById(id);
};

let cart = [];
if (!localStorage.getItem("CartItem")){
    setLocalStorage(cart, "CartItem");
}
/**
 * get list product
 */

function getListProduct() {
    getEle("loader").style.display = "block";

    const promise = api.fetchData();
    promise
        .then(function (result) {
            const data = result.data;
            getEle("loader").style.display = "none";
            renderUI(data);
            setLocalStorage(data, "DSSP");
            // cập nhật lại giỏ hàng khi xóa sản phẩm bên trang admin
            let notExist = true;

            for (let i = 0; i < cart.length; i++) {
                const item = cart[i];
                for (let j = 0; j < data.length; j++) {
                    const product = data[j];
                    if (item.id == product.id) {
                        notExist = false;
                        break;
                    } else {
                        notExist = true;
                    }
                }
                if (notExist) {
                    cart.splice(i, 1)
                }
            }


            setLocalStorage(cart, "CartItem");
            renderCartUI(cart);
            cartNoti();
            renderTotalPrice();
        })
        .catch(function (error) {
            console.log(error)
        })
}

getListProduct()

/**
 * set local storage
 */
function setLocalStorage(arr, name) {
    const arrString = JSON.stringify(arr);
    localStorage.setItem(name, arrString);
}

/**
 * get local storage
 */
function getLocalStorage(name) {
    if (!localStorage.getItem(name)) return;

    const arrString = localStorage.getItem(name);

    const arrJSON = JSON.parse(arrString);

    return arrJSON;
}


/**
 * render UI
 */
function renderUI(data) {
    let content = "";

    data.forEach(function (product) {
        content += `
        <div class="col-12 col-lg-6">
        <div class="card cardPhone">
            <img src="${product.img}" class="card-img-top"
                alt="...">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <h3 class="cardPhone__title">${product.name}</h3>
                        <p class="cardPhone__text">
                            Screen: ${product.screen}
                            <br>
                            Back Camera: ${product.backCamera}
                            <br>
                            Front Camera: ${product.frontCamera}
                            <br>
                            ${product.desc}
                        </p>
                    </div>
                    <div>
                        <h3 class="cardPhone__title">$${product.price}</h3>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="cardPhone__rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div>
                        <button onclick="addCartItem(${product.id})" class="btnAddToCart"><i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
    
            </div>
        </div>
    </div>
        `
    });

    getEle("showProduct").innerHTML = content;
}


/**
 * add item to cart
 */
function addCartItem(id) {
    const promise = api.getProductById(id);
    promise
        .then(function (result) {
            const data = result.data;
            const cartItem = new CartItem(data.id, data.name, data.img, data.price, 1);

            // Thêm sản phầm vào cart
            cart = gioHang.addItem(cart, cartItem);

            // set local storage cho cart
            setLocalStorage(cart, "CartItem");

            // hiển thị UI
            renderCartUI(cart);
            cartNoti();
            renderTotalPrice();
        })
        .catch(function (error) {
            console.log(error)
        })
}

// lấy cart từ local storage
    cart = getLocalStorage("CartItem");
    renderCartUI(cart)


// cart noti
function totalQuantity() {
    let quantity = 0;
        cart.forEach(function (item) {
            quantity += item.quantity
        })
    return quantity;
}
function cartNoti() {
    let quantity = totalQuantity();
    if (quantity > 0) {
        getEle("cartNoti").style.display = "inline-block";
        getEle("cartNoti").innerHTML = quantity;
    } else {
        getEle("cartNoti").style.display = "none";
    }

}
cartNoti();

// hiển thị giá total từ cart
function renderTotalPrice() {
    let total = 0;
    total = gioHang.totalPrice(cart, total);
    getEle("totalPrice").innerHTML = `$${total}`;
}
renderTotalPrice();


/**
 * render UI cart
 */
function renderCartUI(list) {
    let content = "";
    list.forEach(function (item, index) {
        content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td> <img src="${item.img} "alt="..." width="30"></td>
                    <td>$${item.price}</td>
                    <td>
                        <button onclick="giamSL(${index})" class="btnCartItem" type="button">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="tangSL(${index})" class="btnCartItem" type="button">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </td>
                    <td>
                        <button onclick="deleteItem(${index})" id="btnDeleteItem" class="btn btn-danger">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </td>
                </tr>
            `
    })

    getEle("tblCartBody").innerHTML = content;

}

/**
 * giảm số lượng item
 */
function giamSL(index) {
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        if (i == index && item.quantity > 1) {
            item.quantity--;
        } else if (i == index && item.quantity == 1) {
            cart.splice(i, 1)
        }
    }

    renderCartUI(cart);
    setLocalStorage(cart, "CartItem");
    renderTotalPrice();
    cartNoti();
}

/**
 * tăng số lượng item
 */
function tangSL(index) {
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        if (i == index) {
            item.quantity++;
            break;
        }
    }

    renderCartUI(cart);
    setLocalStorage(cart, "CartItem");
    renderTotalPrice();
    cartNoti();
}

/**
 * xóa item
 */
function deleteItem(index) {
    cart.forEach(function (item, i) {
        if (i == index) {
            cart.splice(i, 1);
        }
    })
    renderCartUI(cart);
    setLocalStorage(cart, "CartItem");
    renderTotalPrice();
    cartNoti();
}

/**
 * clear all
 */
function announClear() {
    gioHang.announ(
        cart,
        "announModalLabel",
        `Thông báo`,
        "announBodyModal",
        `Bạn có muốn xóa toàn bộ sản phẩm khỏi giỏ hàng không?`,
        `Giỏ hàng không có sản phẩm`,
        "announFooterModal",
        `<button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        <button onclick="deleteAll()" type="button" class="btn btn-info" data-dismiss="modal">Confirm</button>`,
        `<button type="button" class="btn btn-info" data-dismiss="modal">Quay lại</button>`
    )
}

function deleteAll() {
    cart = []
    gioHang.clear(
        "announModalLabel",
        `Thông báo`,
        "announBodyModal",
        `Xóa giỏ hàng thành công`,
        "announFooterModal",
        `<button type="button" class="btn btn-info" data-dismiss="modal">Tiếp tục mua sắm</button>`,
    )
    renderCartUI(cart);
    setLocalStorage(cart, "CartItem");
    renderTotalPrice();
    cartNoti();
}

/**
 * purchase
 */
function announPurchase() {
    gioHang.announ(
        cart,
        "announModalLabel",
        `Thông báo`,
        "announBodyModal",
        `Bạn có muốn thanh toán toàn bộ sản phẩm trong giỏ hàng không?`,
        `Giỏ hàng không có sản phẩm cần thanh toán`,
        "announFooterModal",
        `<button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        <button onclick="purchase()" type="button" class="btn btn-info" data-dismiss="modal">Confirm</button>`,
        `<button type="button" class="btn btn-info" data-dismiss="modal">Quay lại</button>`,
    )
}
function purchase() {
    cart = [];
    gioHang.clear(
        "announModalLabel",
        `Thông báo`,
        "announBodyModal",
        `Thanh toán thành công
        <br>
        Cảm ơn bạn đã mua hàng`,
        "announFooterModal",
        `<button type="button" class="btn btn-info" data-dismiss="modal">Tiếp tục mua sắm</button>`,
    )
    renderCartUI(cart);
    setLocalStorage(cart, "CartItem");
    renderTotalPrice();
    cartNoti();
}

/**
 * select type
 */
getEle("inputType").addEventListener("change", function () {
    const type = getEle("inputType").value;
    api.fetchData()
        .then(function (result) {
            const listPhone = result.data
            let listFilter = [];
            if (type == "All Brands") {
                listFilter = listPhone;
            } else {
                listFilter = listPhone.filter(function (phone) {
                    return phone.type === type;
                })
            }
            renderUI(listFilter);
        })
        .catch(function (error) {
            console.log(error)
        })
})