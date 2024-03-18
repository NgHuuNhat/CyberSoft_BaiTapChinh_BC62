// Phân trang
// function loadItem() {

//     let thisPage = 1;
//     let limit = 3;
//     let list = document.querySelectorAll('.list .item');

//     console.log("list = ", list);
//     console.log("nhatdeptrai");

//     let beginGet = limit * (thisPage - 1);
//     let endGet = (limit * thisPage) - 1;
//     list.forEach(function (item, i) {
//         if (i >= beginGet && i <= endGet) {
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
//     listPage();
// }

// function listPage() {
//     let count = Math.ceil(list.length / limit);
//     document.querySelectorAll('.listPage').innerHTML = '';

//     console.log("nhat", document.querySelectorAll('.listPage'));

//     if (thisPage != 1) {
//         let prev = document.createElement('li');
//         prev.innerText = 'PREV';
//         prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
//         document.querySelectorAll('.listPage').appendChild(prev);
//     }

//     for (i = 1; i <= count; i++) {
//         let newPage = document.createElement('li');
//         newPage.innerText = i;
//         if (i == thisPage) {
//             newPage.classList.add('active');
//         }
//         newPage.setAttribute('onclick', "changePage(" + i + ")");
//         document.querySelectorAll('.listPage').appendChild(newPage);
//     }

//     if (thisPage != count) {
//         let next = document.createElement('li');
//         next.innerText = 'NEXT';
//         next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
//         document.querySelectorAll('.listPage').appendChild(next);
//     }
// }

// function changePage(i) {
//     thisPage = i;
//     loadItem();
// }