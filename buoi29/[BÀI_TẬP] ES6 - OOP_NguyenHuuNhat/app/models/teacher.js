import Person from "./person.js";

export default class Teacher extends Person{
    constructor(_id, _name, _email, _address,_type,_luongNgay,_ngayLam){
        super(_id, _name, _email, _address,_type)
        this.luongNgay = _luongNgay;
        this.ngayLam = _ngayLam;
        this.luong = 0;
    }

    tinhLuong(){
        this.luong = this.luongNgay * this.ngayLam;
    }
}