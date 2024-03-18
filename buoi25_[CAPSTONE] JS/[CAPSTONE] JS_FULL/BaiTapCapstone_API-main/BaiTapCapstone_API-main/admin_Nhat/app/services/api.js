function Api() {
    this.arr = [];

    this.fecthData = function () {
        const promise = axios({
            url: "https://65d8a725c96fbb24c1bc05cb.mockapi.io/api/ProductCapstone",
            method: "GET",
        });
        return promise;
    };

    this.delete = function (id) {
        const promise = axios({
            url: `https://65d8a725c96fbb24c1bc05cb.mockapi.io/api/ProductCapstone/${id}`,
            method: "DELETE",
        });
        return promise;
    }

    this.add = function (product) {
        const promise = axios({
            url: "https://65d8a725c96fbb24c1bc05cb.mockapi.io/api/ProductCapstone",
            method: "POST",
            data: product,
        });
        return promise;
    };

    this.getProductById = function (id) {
        const promise = axios({
            url: `https://65d8a725c96fbb24c1bc05cb.mockapi.io/api/ProductCapstone/${id}`,
            method: "GET",
        });
        return promise;
    };

    this.update = function (product) {
        const promise = axios({
            url: `https://65d8a725c96fbb24c1bc05cb.mockapi.io/api/ProductCapstone/${product.id}`,
            method: "PUT",
            data: product,
        });
        return promise;
    };

    // this.timKiem = function (keyword) {
    //     let mangTimKiem = [];
    //     for (let i = 0; i < this.arr.length; i++) {
    //         const product = this.arr[i];
    //         console.log(product);
    //         if (product && product.name) {
    //             const keywordLowerCase = keyword.toLowerCase();
    //             const nameLowerCase = product.name.toLowerCase();
    //             if (nameLowerCase.indexOf(keywordLowerCase) !== -1) {
    //                 mangTimKiem.push(product);
    //             }
    //         }
    //     }
    //     return mangTimKiem;
    // };
}
