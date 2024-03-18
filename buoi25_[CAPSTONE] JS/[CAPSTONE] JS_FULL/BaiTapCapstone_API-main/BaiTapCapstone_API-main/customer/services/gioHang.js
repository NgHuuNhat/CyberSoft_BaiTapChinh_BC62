function Cart() {
    // add item to cart
    this.addItem = function (cart, cartItem) {
        if (cart.length === 0) {
            cart.push(cartItem);
        } else {
            let exist = false;
            for (let i = 0; i < cart.length; i++) {
                const item = cart[i];
                if (item.id === cartItem.id) {
                    exist = true;
                    item.quantity++;
                    break;
                }
            }
            if (exist == false) {
                cart.push(cartItem);
            }
        }

        return cart;
    };

    // tính tổng tiền
    this.totalPrice = function (cart, total) {
        cart.forEach(function (item) {
            total += item.price * item.quantity;
        })
        return total;
    }

    // popup thông báo
    this.announ = function (cart, idHead, messHead1, idBody, messBody1, messBody2, idFoot, messFoot1, messFoot2) {
        if (cart.length > 0) {
            getEle(idHead).innerHTML = messHead1
            getEle(idBody).innerHTML = messBody1
            getEle(idFoot).innerHTML = messFoot1
        } else {
            getEle(idHead).innerHTML = messHead1
            getEle(idBody).innerHTML = messBody2
            getEle(idFoot).innerHTML = messFoot2
        }
    }

    // clear cart
    this.clear = function (idHead,messHead,idBody,messBody,idFoot,messFoot) {
        getEle(idHead).innerHTML = messHead
        getEle(idBody).innerHTML = messBody
        getEle(idFoot).innerHTML = messFoot
    }
}