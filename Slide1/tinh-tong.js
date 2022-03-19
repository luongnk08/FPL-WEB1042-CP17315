var a = 5,
  b = 6,
  c = 7;

function tinhTong(x, y, z) {
  return x + y + z;
}

var result = tinhTong(a, b, c);

if (result % 2 == 0) {
  alert(result + " la so chan");
} else {
  alert(result + " la so le");
}

document.write("<br><h1>" + result + "</h1>");
