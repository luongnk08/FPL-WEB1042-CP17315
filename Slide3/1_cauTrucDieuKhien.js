// 1. CẤU TRÚC ĐIỀU KHIỂN (TIẾP)

// a. if else
// nếu thỏa mãn điều kiện x > 50 sẽ vào if
// không thì sẽ vào else
// var x = prompt("Hay nhap vao so be hon 100:");
// if (x > 50) {
// 	alert("Ban vua nhap gia tri la: " + x + ", gia tri nay lon hon 50");
// } else {
// 	alert("Ban vua nhap gia tri la: " + x);
// }

// ------------------------------------------------------------------------------------------------

// b. switch

/**
 * Cú pháp:
 * 
 * switch ( dieukien ) {
        case giatri1:
            //Thực hiện
            break;
        case giatri2:
            //Thực hiện
            break;

        default:
            //Thực hiện
    }
 */

// var diem = prompt("Hay nhap diem:");
// switch (diem) {
// 	case "A":
// 		alert("Tuyet voi!");
// 		break;
// 	case "B":
// 	case "C":
// 		alert("Kha!");
// 		break;
// 	case "D":
// 	case "E":
// 	case "F":
// 		alert("Ban can co gang hon!");
// 		break;
// 	default:
// 		alert("Gia tri ban nhap vao khong hop le.");
// }

/* 
    - Sử dụng break để thoát khỏi lệnh switch, nếu không sẽ chuyển
    xuống thực hiện lệnh trong mệnh đề case tiếp theo

    - Nếu không có case nào thỏa mãn, default sẽ được thực hiện
    (default có thể có hoặc không, nếu không có thì sẽ kết thúc switch)
*/

// Câu hỏi: nếu nhập Tuyet voi! vào cửa số prompt thì kết quả đoạn mã sẽ là gì?

// ------------------------------------------------------------------------------------------------

// c. Lặp không biết trước số lần lặp: while() | do ... while()

// while

/*
    Cú pháp:

    while (dieukien ) {
        Thực hiện
    }
*/
var xWhile = 0;
while (xWhile < 10) {
	//Thực hiện
	xWhile++;
	console.log(xWhile);
}

/* 
    - khi bắt đầu vòng lặp, while sẽ kiểm tra biểu thức điều kiện

    - while sẽ chỉ dừng khi nào điều kiện trong () không còn đúng
    (biểu thức có kết quả là false)
    
    - hay khi biểu thức điều kiện là true, while sẽ tiếp tục lặp
*/

// do...while

/*
    Cú pháp:
    
    do {
        Thực hiện
    } while ( đieukien )
*/

var demDW = 0;
do {
	console.log("dem den " + demDW);
	demDW++;
} while (demDW < 0);

// Câu hỏi: vậy while và do...while khác nhau thế nào?

/*
    - do...while sẽ luôn chạy xử lí trong do lần đầu tiên
    - sau đó sẽ kiểm tra điều kiện trong while
    để xác định việc lặp tiếp hay không.
*/

// ------------------------------------------------------------------------------------------------

// d. lặp biết trước số lần thực hiện: for

/*
    Cú pháp:

    for (khoitao; dieukien; buoctang) {
        Thực hiện
    }
*/

for (var x = 0; x < 10; x++) {
	console.log(x);
}

var convat = new Array("meo", "ho", "voi");
for (var i = 0; i < convat.length; i++) {
	console.log(convat[i]);
}

// ------------------------------------------------------------------------------------------------
