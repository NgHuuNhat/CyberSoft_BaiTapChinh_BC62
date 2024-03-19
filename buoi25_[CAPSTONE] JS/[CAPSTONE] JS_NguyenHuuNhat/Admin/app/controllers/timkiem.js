//cach1
// function timKiem() {
//     const promise = api.fecthData();
//     // pending
//     document.getElementById("loader").style.display = "block";
//     promise
//         .then(function (result) {
//             document.getElementById("loader").style.display = "none";
//             const arrProduct = result.data;
//             // console.log("arrProduct = ", arrProduct);

//             document.getElementById("search").addEventListener("keyup", function () {
//                 //lay tu khoa tim kiem
//                 const keyword = document.getElementById("search").value;
//                 // console.log(keyword);

//                 let mangTimKiem = [];
//                 for (let i = 0; i < arrProduct.length; i++) {
//                     const product = arrProduct[i];
//                     console.log(product);
//                     if (product && product.name) {
//                         const keywordLowerCase = keyword.toLowerCase();
//                         const nameLowerCase = product.name.toLowerCase();
//                         if (nameLowerCase.indexOf(keywordLowerCase) !== -1) {
//                             mangTimKiem.push(product);
//                         }
//                     }
//                 }
//                 // return mangTimKiem;
//                 renderUI(mangTimKiem);
//             });

//         })
//         .catch(function (error) {
//             document.getElementById("loader").style.display = "none";
//             console.log(error);
//         });
// }

//cach2
function timKiem() {
    //lay tu khoa tim kiem
    const keyword = document.getElementById("search").value;
    // console.log(keyword);

    let mangTimKiem = [];
    for (let i = 0; i < arr.length; i++) {
        const product = arr[i];
        console.log(product);
        if (product && product.name) {
            const keywordLowerCase = keyword.toLowerCase();
            const nameLowerCase = product.name.toLowerCase();
            if (nameLowerCase.indexOf(keywordLowerCase) !== -1) {
                mangTimKiem.push(product);
            }
        }
    }
    // return mangTimKiem;
    renderUI(mangTimKiem);
}