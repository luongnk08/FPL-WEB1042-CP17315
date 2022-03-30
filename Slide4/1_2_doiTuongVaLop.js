// 1. ĐỐI TƯỢNG

// Tạo đối tượng

// cách 1: sử dụng từ khóa new
// cú pháp: var tendoituong = new Object();
var meo = new Object();
var hoaDao = new Object();

// var viDu = {
//   mau: "hong",
//   soCanh: 5,

//   a: function () {},
// };

console.log("Meo: ", meo);

// {}

// Thêm thuộc tính cho đối tượng
// cú pháp: tendoituong.tenthuoctinh = giatri;
hoaDao.mau = "Hong";
hoaDao.soCanh = 5;

// Truy cập đến thuộc tính của đối tượng
// cú pháp: tendoituong.tenthuoctinh
// alert(hoaDao.mau);
// alert(hoaDao.soCanh);

// Thêm phương thức cho đối tượng
/*
    Cú pháp:
    tendoituong.tenphuongthuc = function(){
        Viết mã cho phương thức ở đây
    }
*/
// hoaDao.toaHuong = function () {
//   alert("Toi co mau Hong, toi dang toa huong");
// };

// Gọi phương thức của đối tượng
// cú pháp: tendoituong.tenphuongthuc();
// hoaDao.toaHuong();

// ----------------------------------------------------------------

// 2. LỚP

/*
    Cú pháp:

    function tenlop (tenbien1, tenbien2…){
        tenthuoctinh1 = tenbien1;
        tenthuoctinh2 = tenbien2;
        tenphuongthuc = function(){
            Viết mã cho phương thức ở đây
        }
    }
*/
function Hoa(mauHoa, soCanhHoa) {
  this.mau = mauHoa;
  this.soCanh = soCanhHoa;
  this.toaHuong = function () {
    alert("toi co mau " + this.mau + ", toi dang toa huong");
  };
}

// tạo đối tượng
Hoa["Dao"] = new Hoa("Hong", "5");
Hoa["Hong"] = new Hoa("Do", "10");
Hoa["Cuc"] = new Hoa("Vang", "20");
Hoa["Lan"] = new Hoa("Tim", "3");
Hoa["Mai"] = new Hoa("Tim", "3");

// console.log(Hoa["Dao"]);
// console.log(Hoa["Dao"].mau);
// Hoa["Hong"].toaHuong();

// console.log("Hoa la: ", Hoa);

// lặp qua tất cả các đối tượng có kiểu là Hoa
// for (var x in Hoa) {
//   console.log("x la: ", x);
//   Hoa[x].toaHuong();
// }

if ("Mai" in Hoa) {
  alert(" Doi tuong Mai da duoc tao");
} else {
  alert(" Đối tượng Mai chua duoc tao");
}

console.log(Hoa["Dao"]);
Hoa["Hong"].bieuTuong = "Tron";
console.log(Hoa["Hong"]);

var tk = "abc@gmail.com";
var mk = "1234";

var user = {
  taiKhoan: tk,
  matKhau: mk,
};
