var ten = prompt('Nhập tên: ');
var tuoi = prompt('Nhập tuổi: ');
var email = prompt('Nhập email: ');
var sdt = prompt('Nhập sdt: ');

if(ten == ''){
    console.log('Bạn không nhập tên');
}

var checkTuoi = /[0-9]/ig.test(tuoi);
if(checkTuoi == false){
    console.log('Bạn nhập sai tuổi');
}

var checkEmail = /\./ig.test(email) && /@/ig.test(email);
if(checkEmail == false){
    console.log('Bạn nhập sai email');
}

var checkSDT = /^[0]/ig.test(sdt);
if(checkSDT == false){
    console.log('Bạn nhập sai SĐT');
}