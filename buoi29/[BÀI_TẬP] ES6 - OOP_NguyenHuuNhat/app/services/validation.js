export default class Validation{
    kiemTraRong = (value, spanId, message) => {
        if (value === "") {
          document.getElementById(spanId).innerHTML = message;
          return false;
        }
    
        document.getElementById(spanId).innerHTML = "";
        return true;
      };
    
      kiemTraChuoiKiTu = (value, spanId, message) => {
        const letter =
          "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
          "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
          "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
          // hợp lệ
          document.getElementById(spanId).innerHTML = "";
          return true;
        }
    
        // k hợp lệ
        document.getElementById(spanId).innerHTML = message;
        return false;
      };
    
      kiemTraSo = (value, spanID, mess) => {
        const num = /^[0-9]+$/;
        if(value.match(num)){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        // không hợp lệ
        document.getElementById(spanID).innerHTML = mess;
        return false;
      }

      kiemTraEmail = (value, spanId, mess) => {
        const letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if (value.match(letter)) {
          // hợp lệ
          document.getElementById(spanId).innerHTML = "";
          return true;
        }
    
        // k hợp lệ
        document.getElementById(spanId).innerHTML = mess;
        return false;
      };
}