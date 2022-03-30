// 3. BOM

// Đối tượng window
function onLoad() {
  // console.log(window.innerHeight);
  // console.log(window.document.body);
  // var myWindow = window.open("", "", "width=300, height=300");
  // myWindow.resizeTo(500, 500);
  // myWindow.alert(myWindow.outerHeight);
}

// window.open(
//   "https://www.youtube.com.vn/",
//   "timkiem",
//   "menubar = yes, width = 800, height = 600"
// );

// Đối tượng screen
// console.log("Chieu cao con lai la: " + screen.availHeight);
// console.log("Tong so chieu cao la: " + screen.height);
// console.log("Bang mau la: " + screen.colorDepth);

// Đối tượng navigator
// console.log("appCodeName: " + navigator.appCodeName);
// console.log("appName: " + navigator.appName);
// console.log("version: " + navigator.appVersion);
// console.log("cookieEnabled: " + navigator.cookieEnabled);

// Đối tượng location
document.write("host: " + location.host + "<br>");
document.write("hostname: " + location.hostname + "<br>");
document.write("href: " + location.href + "<br>");
document.write("pathname: " + location.pathname + "<br>");
document.write("port: " + location.port + "<br>");
document.write("protocol: " + location.protocol + "<br>");

// demo sử dụng location mở url mới
// window.location.assign("http://www.w3schools.com");

// đối tượng history
