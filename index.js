const diaChiDiaPhuong = [
  "65 Mai Xuan Thuong",
  "16 Pham Van Dong",
  "50 Hung Vuong",
  "103 Nguyen Trai",
  "01 Nguyen Chi Thanh",
];
const userChoice = Number(
  prompt(
    "Hãy nhập  \n 1. Thêm địa chỉ và xuất danh sách địa chỉ ra \n 2. Xoá địa chỉ ở cuối danh sách \n 3. Tìm kiếm địa chỉ có trong danh sách"
  )
);
switch (userChoice) {
  case 1:
    diaChiDiaPhuong.push(prompt('Hãy nhập địa chỉ bạn muốn thêm vào'))
    console.log(diaChiDiaPhuong)
    break
  case 2:
    diaChiDiaPhuong.pop()
    break
  case 3:
    if (diaChiDiaPhuong.includes(prompt('Hãy nhập địa chỉ cần tìm'))) {
      alert('Địa chỉ này có trong danh bạ nhá')
    } else {
      alert('Địa chỉ này không có nhá .-.')
    }
  }