//Bước 1Xác định phần tử bị tác động
var jFruit     = document.getElementById("txtFruit");
var jShowFruit = document.getElementById("btnShowFruit");
var jImgFruit  = document.getElementById("imgFruit");

//Bước 2: Bắt Sự Kiện
jShowFruit.addEventListener('click',showresult);

//Bước 3 : Khai báo hàm
function showresult ()
{
    var getFruit = jFruit.value;
    alert(getFruit);
    jImgFruit.setAttribute('src', 'images/'+getFruit+'.jpg');
}