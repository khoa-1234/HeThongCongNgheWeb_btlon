function ktraHoTen() {
    let hoTen = $("#txtHoTen").val();
    let btcq = /^[A-Z\u00c0-\u1fff][a-z\u00C0-\u1FFF]*(\s[A-Z\u00C0-\u1FFF][a-z\u00C0-\u1FFF]*)*$/;
    if (hoTen.length == 0) {
        $("#errHoTen").html("Không được rỗng");
        return false;
    } else if (btcq.test(hoTen)) {
        $("#errHoTen").html("*");
        return true;
    } else {
        $("#errHoTen").html("Họ tên phải từ 2 từ trở lên, mỗi ký tự đầu phải viết hoa");
        return false;
    }
}
$("#txtHoTen").blur(function() {
    ktraHoTen();
});

function ktraEmail() {
    let sDT = $("#email").val();
    let btcq = /^\w{1,}\d{1,}@gmail+\.com$/;
    if (sDT == "") {
        $("#errEmail").html("Không được rỗng");
        return false;
    } else if (btcq.test(sDT)) {
        $("#errEmail").html("*");
        return true;
    } else {
        $("#errEmail").html("Lỗi");
        return false;
    }
}
$("#email").blur(function() {
    ktraSDT();
});

function ktraSDT() {
    let sDT = $("#txtSDT").val();
    let btcq = /^(03|07|08|09)[0-9]{8}$/;
    if (sDT == "") {
        $("#errSDT").html("Không được rỗng");
        return false;
    } else if (btcq.test(sDT)) {
        $("#errSDT").html("*");
        return true;
    } else {
        $("#errSDT").html("Lỗi");
        return false;
    }
}
$("#txtSDT").blur(function() {
    ktraSDT();
});

document.querySelector(".send").addEventListener("click", (e) => {
    alert("Gửi thành công");
  });