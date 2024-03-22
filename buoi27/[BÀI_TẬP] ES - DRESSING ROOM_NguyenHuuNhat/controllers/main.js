import { navPills } from "../utils/navPills.js";
import Api from "../utils/callApi.js";

const api = new Api();

/**
 * hiển thị thanh nav
 */
let content = "";
navPills.forEach(tab => {
    content += `
            <li class="nav-item" role="presentation">
                <button class="nav-link" data-toggle="pill" data-target="#${tab.tabName}" type="button" role="tab" aria-controls="${tab.tabName}">${tab.showName}</button>
            </li>
           `
});
document.getElementsByClassName("nav-pills")[0].innerHTML = content;

//set localStorage
const setLocalStorage = (arr, name) => {
    const arrString = JSON.stringify(arr);
    localStorage.setItem(name, arrString);
}
// window.setLocalStorage = setLocalStorage;

//get localStorage
const getLocalStorage = (name) => {
    if (!localStorage.getItem(name)) return;

    const arrString = localStorage.getItem(name);

    const arrJSON = JSON.parse(arrString);

    return arrJSON;
}
// window.getLocalStorage = getLocalStorage;


/**
 * show product
 */
let product = [];
if (!localStorage.getItem("SP")) {
    setLocalStorage(product, "SP")
}

const showProduct = () => {
    api.fetchData()
        .then((result) => {
            product = result.data
            setLocalStorage(product, "SP")
            const ao = product.filter((item) => item.type == "topclothes")
            renderUI(ao, "tabTopClothes")

            const quan = product.filter((item) => item.type == "botclothes")
            renderUI(quan, "tabBotClothes")

            const giay = product.filter((item) => item.type == "shoes")
            renderUI(giay, "tabShoes")

            const tuiXach = product.filter((item) => item.type == "handbags")
            renderUI(tuiXach, "tabHandBags")

            const dayChuyen = product.filter((item) => item.type == "necklaces")
            renderUI(dayChuyen, "tabNecklaces")

            const toc = product.filter((item) => item.type == "hairstyle")
            renderUI(toc, "tabHairStyle")

            const bg = product.filter((item) => item.type == "background")
            renderUI(bg, "tabBackground")
        })
        .catch((error) => {
            console.log(error)
        })
}
showProduct();

product = getLocalStorage("SP");

/**
 * render UI product
 */
const renderUI = (list, target) => {
    let content = ""
    list.forEach((item) => {
        content += `
            <div class="col-3">
            <div class="card">
            <img src="${item.imgSrc_jpg}" class="card-img-top" alt="..." >
            <div class="card-body">
              <p>${item.name}</p>
              <button type="button" onclick="thuDo('${item.id}', '${item.type}')")">Thử đồ</button>
            </div>
          </div>
          </div>
            `
    })
    document.getElementsByClassName("tab-content")[0].innerHTML += `
        <div class="tab-pane fade" id="${target}" role="tabpanel">
            <div class="row">
                    ${content}
            </div>
        </div>
        `
}

const thuDo = (id, type) => {
    product.forEach((item) => {
        if (id == item.id) {
            switch (type) {
                case "topclothes":
                    document.getElementsByClassName("bikinitop")[0].style.background = "none"
                    document.getElementsByClassName("bikinitop")[0].innerHTML = `
                                <img src="${item.imgSrc_png}" style="width: 250px; height: 500px">
                            `
                    break;
                case "botclothes":
                    document.getElementsByClassName("bikinibottom")[0].style.background = "none"
                    document.getElementsByClassName("body")[0].innerHTML = `
                                <img src="${item.imgSrc_png}" style="width: 250px; height: 500px">
                            `
                    break;
                case "shoes":
                    document.getElementsByClassName("feet")[0].innerHTML = `
                                    <img src="${item.imgSrc_png}">
                                `
                    break;
                case "handbags":
                    document.getElementsByClassName("handbag")[0].innerHTML = `
                                        <img src="${item.imgSrc_png}">
                                    `

                    break;
                case "necklaces":
                    document.getElementsByClassName("necklace")[0].innerHTML = `
                                            <img src="${item.imgSrc_png}">
                                        `
                    break;
                case "hairstyle":
                    document.getElementsByClassName("hairstyle")[0].innerHTML = `
                                                <img src="${item.imgSrc_png}">
                                            `
                    break;
                case "background":
                    document.getElementsByClassName("background")[0].innerHTML = `
                                                    <img src="${item.imgSrc_png}" style="width: 100%; height: 100%">
                                                `
                    break;
                default:
                    break;
            }
        }
    })

}
window.thuDo = thuDo;





