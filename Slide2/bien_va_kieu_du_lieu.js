// cú pháp khai báo biến: var [tenbien] = [giá trị];
var a = 5;
var b;
var m, n;
var m = 3,
  n = 5;

// khai báo hằng số: const
const hangSo = 5;

// kiểu số
var so1 = 5;
var so2 = 1.3;
var so3 = 0x3;
var so4 = 0xd;

// alert(so4 * so1);

// hex
// 0 1 2 3 4 5 6 7 8 9 a b c d e f

// isNAN()
// alert(isNaN("4"));

// alert("4" == 4);
// alert("4" === 4);
// alert(isNaN("four"));

// Math
// document.write(Math.round(2.4) + "<br>");
// document.write(Math.round(2.5) + "<br>");

// alert(Math.ceil(2.1));
// alert(Math.floor(2.9));

// alert(Math.floor(Math.random() * (10 - 1)) + 1);
// lodash

// String
var cach1 = "Hello word";

var cach2 = new String("Tôi là \n string");
// alert(cach2.length);

// toUpperCase, toLowercase
// alert(cach1.toLowerCase());

var x = "Toi la String.";
// alert(x.substring(0, 3));
// alert(x);

var firstString = " Day la mot xau ky tu ";
var finalString = firstString.concat(
  " Them mot xau ky tu nua ",
  " Noi them xau thu 3"
);
// alert(finalString);

var x = 20;
// if (x > 18) {
//   alert("Hi");
// }

var a = true;
var b = false;
var c = 20 > 18;
// alert(c);

// mảng
var cach1 = new Array();
cach1[0] = "meo";
cach1[1] = 10;
cach1[2] = 1.5;

var cach2 = new Array("meo", "ho", "cao");

// alert(cach2);
var cach3 = ["meo", "ho", "cao"];
// alert(cach3);

var testUndefined,
  y = undefined;

var testNull = null;

// alert(null === undefined);

for (var i = 0; i < cach3.length; i++) {
  document.write("<br>" + cach3[i]);
}

cach3.forEach(function (e, i) {
  alert(i);
});
