var x = 20,
  y = 10;

// toán tử 2 ngôi
var z = x + y;
var z1 = x * y;

// toán tử 1 ngôi
var z2 = -x;
var z3 = ++x;
var z3 = x++;

// AND: & , OR: |
// thường dùng 2 loại: && , ||

if (z2 > 100 && z3 < 0) {
  // khi cả 2 biểu thức điều kiện là true
  // thì ở đây mới được thực hiện
}

if (z2 > 100 || z3 < 0) {
  // khi 1 trong 2 biểu thức điều kiện là true
  // thì ở đây mới được thực hiện
}

// tại sao lại phải && và ||
// mà không dùng & , |
if ((z2 > 100) & (z3 < 0)) {
  // khi cả 2 biểu thức điều kiện là true
  // thì ở đây mới được thực hiện
}

// hàm prompt
var testPrompt = prompt("Nhập gì đó vào đây:");
var testPrompt1 = prompt("Nhập gì đó vào đây:");
alert("Giá trị: " + testPrompt + ", kiểu: " + typeof testPrompt);
alert("Giá trị: " + testPrompt1 + ", kiểu: " + typeof testPrompt);
