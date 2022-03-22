// lệnh lựa chọn đơn

var x = 2;

if (x > 2) {
  alert("X đang lớn hơn 2!");
}

// var x = prompt("Hay nhap vao so be hon 100:");
// if (x >= 100) {
//   alert("Ban vua nhap gia tri la: " + x + ", gia tri nay khong be hon 100");
// }

var x = prompt("Hay nhap vao so be hon 100 va lon hon 50:");
console.log(x);
if (x < 51 || x > 99) {
  document.write("<h1>Ban vua nhap gia tri la: " + x + "</h1>");
  document.write(
    "<h2>Gia tri nay khong nam trong" + " khoang tu 50 den 100</h2>"
  );
  a(x);
}

function a(x) {
  alert(x);
}
