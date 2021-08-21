alert("hello Thiên đây");
userChoice = prompt(
  "Nhập \n 1: Để giải phương trình bậc nhất 2 ẩn. \n 2: Để giải phương trình bậc 2 1 ẩn"
);
if (userChoice == 2) {
  alert("Bạn hãy nhập 3 hệ số a,b,c cho phương trình ax^2+bx+c=0");
  const a = Number(prompt("Nhập a đi bạn"));
  const b = Number(prompt("Nhập b nữa"));
  const c = Number(prompt("Thiếu c nè bạn :)"));
  const delta = b * b - 4 * a * c;
  alert("Kết quả được đưa ra ở console nha bạn");

  console.log(
    "Phương trình của bạn là " +
      String(a) +
      "x^2+" +
      String(b) +
      "x+" +
      String(c) +
      "=0"
  );

  if (delta > 0) {
    console.log(
      "Phương trình có 2 nghiệm là " +
        (-b + Math.sqrt(delta)) / (2 * a) +
        " và " +
        (-b - Math.sqrt(delta)) / (2 * a)
    );
  } else if (delta == 0) {
    console.log(
      "Phương trình có nghiệm kép là " + (-b + Math.sqrt(delta)) / (2 * a)
    );
  } else {
    console.log("Xin lỗi nhưng phương trình vô nghiệm rồi");
  }
} else if (userChoice == 1) {
  alert("Bây giờ chúng ta sẽ giải hệ PT 2 ẩn :)");
  alert("Tôi sẽ lần lượt hỏi bạn 6 hệ số a,b,c cho 2 phương trình");
  a1 = Number(prompt("Hãy nhập hệ số a1"));
  b1 = Number(prompt("Hãy nhập hệ số b1"));
  c1 = Number(prompt("Hãy nhập hệ số c1"));
  a2 = Number(prompt("Hãy nhập hệ số a2"));
  b2 = Number(prompt("Hãy nhập hệ số b2"));
  c2 = Number(prompt("Hãy nhập hệ số c2"));
  alert("Kết quả được đưa ra ở console nha bạn.");
  console.log(
    "Hai phương trình của bạn lần lượt là " +
      String(a1) +
      "x+" +
      String(b1) +
      "y=" +
      String(c1) +
      " và " +
      String(a2) +
      "x+" +
      String(b2) +
      "y=" +
      String(c2)
  );
  if ((a1 / a2 == b1 / b2) == c1 / c2) {
    console.log("Phương trình có vô số nghiệm");
  } else if (a1 / a2 != b1 / b2) {
    let solX = (c1 * b2 - c2 * b1) / (a1 * b2 - a2 * b1);
    let solY = (c1 - solX * a1) / b1;
    console.log(
      "Phương trình có 1 nghiệm duy nhất là x=" + solX + " và y=" + solY
    );
  } else {
    console.log("Phương trình vô nghiệm.");
  }
} else {
  alert("Bạn đã không nhập 1 hoặc 2.");
}
alert("Tải lại trang để bắt đầu");
