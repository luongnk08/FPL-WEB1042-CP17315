function bai1() {
  do {
    // yêu cầu user nhập vào 1 số
    var n = prompt("Hãy nhập vào 1 số:");

    // nếu n không phải là số => isNaN sẽ trả ra true
    if (isNaN(n) || n < 1 || n > 10) {
      alert("Số không hợp lệ, yêu cầu nhập lại!");
    }
  } while (isNaN(n) || n < 1 || n > 10);

  // 3! = 3 * 2 * 1
  var giaiThua = 1;

  for (var i = 2; i <= n; i++) {
    giaiThua *= i;

    // tương tự: giaiThua = giaiThua * i;
  }

  alert(n + "! = " + giaiThua);
}

// bai1();

// bài 2
var intervalId;
var seconds = 0;
var minus = 0;

function dem() {
  // 00:00
  seconds++;

  if (seconds == 60) {
    minus++;
    seconds = 0;
  }

  var kq = "";

  // 9 => 09:
  // 10 => 10:
  if (minus < 10) {
    kq = kq + "0" + minus + ":";
  } else {
    q = kq + minus + ":";
  }

  // 9 => 09:09
  // 10 => 10:10
  if (seconds < 10) {
    kq = kq + "0" + seconds;
  } else {
    kq = kq + seconds;
  }

  var spanElement = document.getElementById("demSpan");
  spanElement.innerText = kq;
}

function start() {
  if (intervalId == undefined) {
    intervalId = setInterval("dem()", 1000);
  } else {
    alert("Đồng hồ đang chạy rồi!");
  }
}

function pause() {
  clearInterval(intervalId);
  intervalId = undefined;
}

// // đảm bảo duy nhất chỉ có 1 interval được chạy
// if (intervalId == undefined) {
//   intervalId = setInterval("start()", 1000);
// } else {
//   alert("Đồng hồ đang chạy rồi!");
// }
