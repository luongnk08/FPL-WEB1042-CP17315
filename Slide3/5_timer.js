// 5. TIMER

/*
    - JavaScript cung cấp các phương thức để xử lý
    các sự kiện thời gian

    Cú pháp:

    var t=setTimeout("Lệnh_javascript", số_mili _giây);
    var t=setInterval("Lệnh_javascript", số_mili _giây );
*/

// 1s = 1000ms

function onClickTimeoutEvent() {
  console.log("Clicked timeout event");
  //   setTimeout("console.log('Timeout!');", 1000);

  setTimeout(function () {
    // code js here
    alert("hello, tôi đang ở trong function!");
  }, 1000);
}

function testTimeOut() {
  // code here
}

var interval;

function onClickIntervalEvent() {
  console.log("Clicked interval event");
  interval = setInterval("console.log('Interval!');", 1000);
}

function onCancelIntervalEvent() {
  console.log("Canceled interval event");
  clearInterval(interval);
}
