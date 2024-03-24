import Person from "./person.js";

export default class Student extends Person {
    constructor(_id, _name, _email, _address, _type, _toan, _ly, _hoa) {
        super(_id, _name, _email, _address, _type)
        this.toan = _toan;
        this.ly = _ly;
        this.hoa = _hoa;
        this.dtb = 0;
    }

    tinhDTB() {
        this.dtb = (Number(this.toan) + Number(this.ly) + Number(this.hoa)) / 3;
    }
}