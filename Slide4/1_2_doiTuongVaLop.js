// 1. ĐỐI TƯỢNG

// Tạo đối tượng

// cách 1: sử dụng từ khóa new
// cú pháp: var tendoituong = new Object();
var meo = new Object();
var hoaDao = new Object();

// Thêm thuộc tính cho đối tượng
// cú pháp: tendoituong.tenthuoctinh = giatri;
hoaDao.mau = "Hong";
hoaDao.soCanh = 5;

// Truy cập đến thuộc tính của đối tượng
// cú pháp: tendoituong.tenthuoctinh
alert(hoaDao.mau);
alert(hoaDao.soCanh);

// Thêm phương thức cho đối tượng
/*
    Cú pháp:
    tendoituong.tenphuongthuc = function(){
        Viết mã cho phương thức ở đây
    }
*/
hoaDao.toaHuong = function () {
	alert("Toi co mau Hong, toi dang toa huong");
};

// Gọi phương thức của đối tượng
// cú pháp: tendoituong.tenphuongthuc();
hoaDao.toaHuong();

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
