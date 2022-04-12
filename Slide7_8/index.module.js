var app = angular.module("myApp", []);

app.controller("indexController", function ($scope) {
  $scope.name = "I'm FPoly";

  $scope.inHoa = function () {
    $scope.name = $scope.name.toUpperCase();
  };

  $scope.giaTien = 100000;
  $scope.soLuong = 1;
  $scope.thanhTien = $scope.giaTien * $scope.soLuong;

  // kiểm tra tính hợp lệ
  $scope.giaTienHL = $scope.giaTien > 0;
  $scope.soLuongHL = $scope.soLuong > 0;

  $scope.tinhTien = function () {
    // kiểm tra tính hợp lệ
    $scope.giaTienHL = $scope.giaTien > 0;
    $scope.soLuongHL = $scope.soLuong > 0;

    if ($scope.giaTien > 0 && $scope.soLuong > 0) {
      $scope.thanhTien = $scope.giaTien * $scope.soLuong;
    } else {
      $scope.thanhTien = 0;
    }
  };
});

// custom filter
