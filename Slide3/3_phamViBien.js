// 3. Phạm vi biến

/*
    - Biến cục bộ (local variable)
        + Biến được khai báo trong hàm
        + Chỉ được tham chiếu đến trong phạm vi khai báo

    - Biến toàn cục (global variable)
        + Biến được khai báo ngoài hàm
        + Có thể tham chiếu đến từ bất cứ đâu
*/

var bienToanCuc = "Tôi là biến toàn cục";

function testPhamViBien() {
	var bienCucBo = "Tôi là biến cục bộ";

	console.log(bienToanCuc + " trong hàm testPhamViBien");
	console.log(bienCucBo + " trong hàm testPhamViBien");
}

testPhamViBien();
console.log(bienToanCuc + " bên ngoài");
console.log(bienCucBo + " bên ngoài");
