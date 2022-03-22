// 2. HÀM

/*
    - Được dùng để thực hiện một chức năng cụ thể

    Cú pháp:

    1. Hàm không trả về giá trị:
    
    function tenham (thamso1, thamso2, …, thamson) {
        Thực hiện
    }


    2. Hàm trả về giá trị:

    function tenham (thamso1, thamso2, …, thamson) {
        Thực hiện
        return giatritrave;
    }
*/

// hàm không có giá trị trả về:

// Định nghĩa hàm
function myFunction(loichao1, loichao2) {
	alert("Bien thu nhat la: " + loichao1);
	alert("Bien thu hai la: " + loichao2);
}

// gọi hàm
myFunction("Hi", "Hello");

/*
    Chú ý: 
    - lời gọi hàm có thể ở một thẻ script khác với thẻ script định nghĩa hàm
    
    - kết quả trả về của hàm không trả về giá trị sẽ là: undefined
*/

// hàm có giá trị trả về:

// định nghĩa hàm
function nhanHaiSo(x, y) {
	return x * y;
}

// gọi hàm
var tich = nhanHaiSo(3, 4);
alert(tich);

// HÀM CONFIRM

/*
    - Là hộp thoại để nhập hồi đáp từ phía người dùng

    Cú pháp: confirm(thông_điệp);

    => Hàm trả về hồi đáp của người dùng
        - Trả về True nếu người dùng nhấn vào OK
        - Trả về False nếu người dùng nhấn vào Cancel
*/

function xacNhan(traloi) {
	var ketQua = "";

	if (traloi) {
		ketQua = "Tuyet voi. Chuc ban chien thang!";
	} else {
		ketQua = "Hen gap lai ban nhe!";
	}

	return ketQua;
}

var traloi = confirm("Ban se choi game chu?");
var thongbao = xacNhan(traloi);
alert(thongbao);
