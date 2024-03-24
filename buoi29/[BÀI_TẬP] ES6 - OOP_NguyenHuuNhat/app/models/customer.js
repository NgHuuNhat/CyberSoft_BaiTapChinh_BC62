import Person from "./person.js";

export default class Customer extends Person{
    constructor(_id, _name, _email, _address,_type, _nameCompany, _bill){
        super(_id, _name, _email, _address,_type)
        this.nameCompany = _nameCompany;
        this.bill = _bill;
        this.rate = "";
    }
    xepLoai(){
        if(this.bill >= 50000000){
            this.rate = "Kim Cương"
        } else if (this.bill >= 20000000 && this.bill < 50000000){
            this.rate = "Vàng"
        } else if (this.bill >= 5000000 && this.bill < 20000000){
            this.rate = "Bạc"
        } else {
            this.rate = "Đồng"
        }
    }
}