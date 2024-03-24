import Api from "../services/callAPI.js";
import Student from "../models/student.js";
import Teacher from "../models/teacher.js";
import Customer from "../models/customer.js";
import Validation from "../services/validation.js";

const getEle = (id) => document.getElementById(id);
const api = new Api();
const validation = new Validation();

/**
 * render UI
 */
const renderUI = (data) => {
    let content = "";
    data.forEach((person, index) => {
        let type = "";
        switch (person.type) {
            case "student":
                type = "Học Viên";
                break;
            case "teacher":
                type = "Giảng Viên";
                break;
            case "customer":
                type = "Khách Hàng";
                break;
            default:
                break;
        }
        content += `
            <tr>
                <td>${index + 1}</td>
                <td>${person.name}</td>
                <td>${person.email}</td>
                <td>${person.address}</td>
                <td>${type}</td>
                <td style="text-align: center">${person.type == "student" ? person.dtb : "<div style='width: 100%; height:1px; background-color:black'></div>"}</td>
                <td style="text-align: center">${person.type == "teacher" ? person.luong : "<div style='width: 100%; height:1px; background-color:black'></div>"}</td>
                <td style="text-align: center">${person.type == "customer" ? person.rate : "<div style='width: 100%; height:1px; background-color:black'></div>"}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editPerson(${person.id})">Edit</button>
                    <button onclick="deletePerson(${person.id})" class="btn btn-danger">Delete</button>
                </td>
            </tr>
       `
    });

    getEle("tblBodyInfo").innerHTML = content;
}

/**
 * get list person
 */
const getListPerson = () => {
    api.callApi("QLNS", "GET", null)
        .then((result) => {
            renderUI(result.data)
        })
        .catch((error) => {
            console.log(error)
        })
}
getListPerson();

/**
 * add person
 */
getEle("btnThemNguoi").onclick = () => {
    getEle("modalHeader").innerHTML = `Thêm Người Dùng`
    getEle("modalFooter").innerHTML = `
        <button onclick="addPerson()" class="btn btn-success">Thêm</button>    
    `

    getEle("inputName").value = "";
    getEle("inputEmail").value = "";
    getEle("inputAddress").value = "";
    getEle("selectType").selected = 0;
    getEle("inputToan").value = "";
    getEle("inputLy").value = "";
    getEle("inputHoa").value = "";
    getEle("inputSalary").value = "";
    getEle("inputDay").value = "";
    getEle("inputCompany").value = "";
    getEle("inputBill").value = "";
}

// test valid
const testValid = () => {
    const name = getEle("inputName").value;
    const email = getEle("inputEmail").value;
    const address = getEle("inputAddress").value;
    const type = getEle("selectType").value;
    const toan = getEle("inputToan").value;
    const ly = getEle("inputLy").value;
    const hoa = getEle("inputHoa").value;
    const luongNgay = getEle("inputSalary").value;
    const ngay = getEle("inputDay").value;
    const nameCompany = getEle("inputCompany").value;
    const bill = getEle("inputBill").value;



    let isValid = true

    isValid &=
        validation.kiemTraRong(name, "spanName", "(*) Họ Tên không được để trống") &&
        validation.kiemTraChuoiKiTu(name, "spanName", "(*) Vui lòng nhập chuỗi kí tự")

    isValid &=
        validation.kiemTraRong(email, "spanEmail", "(*) Email không được để trống") &&
        validation.kiemTraEmail(email, "spanEmail", "(*) Email không hợp lệ")

    isValid &=
        validation.kiemTraRong(address, "spanAddress", "(*) Địa chỉ không được để trống")

    if (type == "none") {
        getEle("spanType").innerHTML = "(*) Vui lòng chọn vai trò"
        isValid &= false
    } else {
        getEle("spanType").innerHTML = ""
        isValid &= true
    }
    switch (type) {
        case "student":
            isValid &=
                validation.kiemTraRong(toan, "spanToan", "(*) Chưa nhập điểm Toán") &&
                validation.kiemTraSo(toan, "spanToan", "(*) Vui lòng nhập chữ số")
            isValid &=
                validation.kiemTraRong(ly, "spanLy", "(*) Chưa nhập điểm Lý") &&
                validation.kiemTraSo(ly, "spanLy", "(*) Vui lòng nhập chữ số")
            isValid &=
                validation.kiemTraRong(hoa, "spanHoa", "(*) Chưa nhập điểm Hóa") &&
                validation.kiemTraSo(hoa, "spanHoa", "(*) Vui lòng nhập chữ số")
            break;
        case "teacher":
            isValid &=
                validation.kiemTraRong(luongNgay, "spanSalary", "(*) Chưa nhập lương/ngày") &&
                validation.kiemTraSo(luongNgay, "spanSalary", "(*) Vui lòng nhập chữ số")
            isValid &=
                validation.kiemTraRong(ngay, "spanDay", "(*) Chưa nhập số ngày làm việc") &&
                validation.kiemTraSo(ngay, "spanDay", "(*) Vui lòng nhập chữ số")
            break;
        case "customer":
            isValid &=
                validation.kiemTraRong(nameCompany, "spanCompany", "(*) Vui lòng nhập tên Công ty")
            isValid &=
                validation.kiemTraRong(bill, "spanBill", "(*) Vui lòng nhập giá trị hóa đơn") &&
                validation.kiemTraSo(bill, "spanBill", "(*) Vui lòng nhập chữ số")
            break;
        default:
            break;
    }

    return isValid;
}

const addPerson = () => {
    const name = getEle("inputName").value;
    const email = getEle("inputEmail").value;
    const address = getEle("inputAddress").value;
    const type = getEle("selectType").value;
    const toan = getEle("inputToan").value;
    const ly = getEle("inputLy").value;
    const hoa = getEle("inputHoa").value;
    const luongNgay = getEle("inputSalary").value;
    const ngay = getEle("inputDay").value;
    const nameCompany = getEle("inputCompany").value;
    const bill = getEle("inputBill").value;

    const isValid = testValid();
    if (!isValid) return null;

    const student = new Student("", name, email, address, type, toan, ly, hoa)
    const teacher = new Teacher("", name, email, address, type, luongNgay, ngay)
    const customer = new Customer("", name, email, address, type, nameCompany, bill)
    student.tinhDTB();
    teacher.tinhLuong();
    customer.xepLoai();

    let person;
    switch (type) {
        case "student":
            person = student;
            break;
        case "teacher":
            person = teacher;
            break;
        case "customer":
            person = customer;
            break;
        default:
            break;
    }

    api.callApi("QLNS", "POST", person)
        .then(() => {
            getListPerson();
            document.getElementsByClassName("close")[0].click();
        })
        .catch((error) => {
            console.log(error)
        })
}
window.addPerson = addPerson;

/**
 * delete person
 */
const deletePerson = (id) => {
    api.callApi(`QLNS/${id}`, "DELETE", null)
        .then(() => {
            getListPerson()
        })
        .catch((error) => {
            console.log(error)
        })
}
window.deletePerson = deletePerson;

/**
 * edit person
 */
const editPerson = (id) => {
    getEle("modalHeader").innerHTML = `Chỉnh Sửa Thông Tin Người Dùng`
    getEle("modalFooter").innerHTML = `
        <button onclick="updatePerson(${id})" class="btn btn-info">Cập Nhật</button>    
    `
    api.callApi(`QLNS/${id}`, "GET", null)
        .then((result) => {
            const person = result.data
            getEle("inputName").value = person.name;
            getEle("inputEmail").value = person.email;
            getEle("inputAddress").value = person.address;
            getEle("selectType").value = person.type;
            getEle("inputToan").value = person.toan;
            getEle("inputLy").value = person.ly;
            getEle("inputHoa").value = person.hoa;
            getEle("inputSalary").value = person.salaryPerDay;
            getEle("inputDay").value = person.day;
            getEle("inputCompany").value = person.nameCompany;
            getEle("inputBill").value = person.bill;
            renderType(person.type)
        })
        .catch((error) => {
            console.log(error)
        })
}
window.editPerson = editPerson;

/**
 * update person
 */
const updatePerson = (id) => {
    const name = getEle("inputName").value;
    const email = getEle("inputEmail").value;
    const address = getEle("inputAddress").value;
    const type = getEle("selectType").value;
    const toan = getEle("inputToan").value;
    const ly = getEle("inputLy").value;
    const hoa = getEle("inputHoa").value;
    const luongNgay = getEle("inputSalary").value;
    const ngay = getEle("inputDay").value;
    const nameCompany = getEle("inputCompany").value;
    const bill = getEle("inputBill").value;

    const isValid = testValid();
    if(!isValid) return null;

    const student = new Student(id, name, email, address, type, toan, ly, hoa)
    const teacher = new Teacher(id, name, email, address, type, luongNgay, ngay)
    const customer = new Customer(id, name, email, address, type, nameCompany, bill)
    student.tinhDTB();
    teacher.tinhLuong();
    customer.xepLoai();

    let person;
    switch (type) {
        case "student":
            person = student;
            break;
        case "teacher":
            person = teacher;
            break;
        case "customer":
            person = customer;
            break;
        default:
            break;
    }

    api.callApi(`QLNS/${id}`, "PUT", person)
        .then(() => {
            getListPerson()
            document.getElementsByClassName("close")[0].click();
        })
        .catch((error) => {
            console.log(error)
        })
}
window.updatePerson = updatePerson;

/**
 * select type modal
 */
getEle("selectType").addEventListener("change", () => {
    const type = getEle("selectType").value;
    renderType(type);
})

/**
 * filter type 
 */
getEle("filterType").addEventListener("change", () => {
    const type = getEle("filterType").value;
    api.callApi("QLNS", "GET", null)
        .then((result) => {
            const listPerson = result.data;
            let listFilter = [];
            if (type == "all") {
                listFilter = listPerson;
            } else {
                listFilter = listPerson.filter((person) => person.type == type)
            }
            renderUI(listFilter)
        })
        .catch((error) => {
            console.log(error)
        })
})

/**
 * render type
 */
const renderType = (type) => {
    switch (type) {
        case "student":
            getEle("inputStudent").style.display = "block"
            getEle("inputTeacher").style.display = "none"
            getEle("inputCustomer").style.display = "none"
            break;
        case "teacher":
            getEle("inputStudent").style.display = "none"
            getEle("inputTeacher").style.display = "block"
            getEle("inputCustomer").style.display = "none"
            break;
        case "customer":
            getEle("inputStudent").style.display = "none"
            getEle("inputTeacher").style.display = "none"
            getEle("inputCustomer").style.display = "block"
            break;
        default:
            getEle("inputStudent").style.display = "none"
            getEle("inputTeacher").style.display = "none"
            getEle("inputCustomer").style.display = "none"
            break;
    }
}

/**
 * sắp xếp theo tên
 */

const sortName = () => {
    api.callApi("QLNS", "GET", null)
        .then((result) => {
            const listPerson = result.data;
            let sortList = listPerson.sort((personA,personB) => {
                let tenA = personA.name.split(' ').slice(-1)[0];
                let tenB = personB.name.split(' ').slice(-1)[0];
                if(tenA < tenB){
                    return -1;
                }
                if(tenB < tenA){
                    return 1;
                }
                return 0;
            })
            renderUI(sortList)           
        })
        .catch((error) => {
            console.log(error)
        })
}
window.sortName = sortName;

/**
 * tìm kiếm theo tên
 */
const searchName = () => {
    api.callApi("QLNS", "GET", null)
        .then((result)=>{
            const listPerson = result.data;
            getEle("txtSearch").addEventListener("keyup",()=>{
                const keyword = getEle("txtSearch").value;
                let filterSearch = [];
                listPerson.forEach((person)=>{
                    if (person.name) {
                        const keywordLowerCase = keyword.toLowerCase();
                        const nameLowerCase = person.name.toLowerCase();
                        if (nameLowerCase.indexOf(keywordLowerCase) !== -1) {
                            filterSearch.push(person);
                        }
                    }
                })
                renderUI(filterSearch);
            })
        })
        .catch((error)=>{
            console.log(error)
        })
}
searchName();