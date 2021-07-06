var bil1 = document.getElementById("bil1");
var bil2 = document.getElementById("bil2");
var bil3 = document.getElementById("bil3");
var result = document.getElementById("hasil");
var opr = document.getElementsByClassName("operator");
var hitung = document.getElementById("hitung");

for (var i = 0; i < opr.length; i++) {
  opr[i].onchange = function () {
    if (this.checked) {
      var oper = this.getAttribute("data");
      Operasi(oper);
    }
  };
}

function Operasi(oper) {
  hitung.onclick = function () {
    var val1 = parseInt(bil1.value);
    var val2 = parseInt(bil2.value);
    var val3 = parseInt(bil3.value);
    if (oper == "tambah") {
      var hasil = val1 + val2 + val3;
    } else if (oper == "kurang") {
      var hasil = val1 - val2 - val3;
    } else if (oper == "kali") {
      var hasil = val1 * val2 * val3;
    } else if (oper == "bagi") {
      var hasil = val1 / val2 / val3;
    } else {
      var hasil = "error";
    }
    result.value = hasil;
  };
}
